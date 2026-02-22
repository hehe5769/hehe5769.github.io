
function getMoatInfo(code, name) {
    const codeStr = String(code).trim().replace('.0', '');

    // 1. Try exact code match
    if (MOAT_INFO[codeStr]) {
        return MOAT_INFO[codeStr];
    }

    // 2. Try name match
    for (const key in MOAT_INFO) {
        const info = MOAT_INFO[key];
        if (info.name && (name.includes(info.name) || info.name.includes(name))) {
            return info;
        }
    }

    // 3. Heuristics for unknown stocks
    let industry = "不明 (Unknown)";
    let rating = "中 (Medium)";
    let description = "具体的な堀(Moat)を特定するためにさらなる調査が必要です。";

    if (name.includes("ホールディングス") || name.includes("ＨＤ") || name.includes("Ｇ")) {
        industry = "複合企業 (Conglomerate)";
        description = "持株会社構造、事業の多角化。中核子会社の市場地位に注目が必要です。";
    } else if (name.includes("銀行") || name.includes("ＦＧ")) {
        industry = "銀行業 (Bank)";
        rating = "高い (High)";
        description = "大手金融グループ、強固な顧客基盤と資金力を持っています。";
    } else if (name.includes("電力")) {
        industry = "電力・ガス (Utility)";
        rating = "高い (High)";
        description = "地域独占の公益事業、キャッシュフローが安定しています。";
    } else if (name.includes("鉄道") || name.includes("電鉄")) {
        industry = "鉄道 (Railroad)";
        rating = "高い (High)";
        description = "鉄道輸送、複製不可能な線路資産と沿線不動産を保有しています。";
    } else if (name.includes("製薬") || name.includes("薬品")) {
        industry = "医薬品 (Pharma)";
        rating = "高い (High)";
        description = "医薬品開発、特許の壁と研究開発パイプラインを持っています。";
    } else if (name.includes("自動車") || name.includes("工業")) {
        industry = "製造業 (Manufacturing)";
        rating = "中 (Medium)";
        description = "工業製造、世界的なニッチ市場でのシェアに注目が必要です。";
    }

    return { industry, rating, description };
}

/**
 * Calculate Probability of Rise (2-week horizon)
 * @param {object} data - { retracement, credit_ratio, oscillation, prev_day_ratio }
 * @returns {number} Probability 0-100
 */
function calculateProbability(data) {
    let prob = 50;

    // 1. Retracement (Ideal: -5% to -15%)
    // Input is expected to be decimal (e.g. -0.15)
    const ret = data.retracement;

    if (ret >= -0.15 && ret <= -0.05) {
        prob += 25;
        if (ret >= -0.12 && ret <= -0.08) {
            prob += 5;
        }
    } else if (ret >= -0.20 && ret < -0.15) {
        prob += 10; // Deep adjustment
    } else if (ret > -0.05 && ret <= 0) {
        prob -= 5; // Too shallow
    } else {
        prob -= 15; // Too deep (>20%) or positive
    }

    // 2. Credit Ratio (Lower is better)
    const credit = data.credit_ratio;
    if (credit > 0 && credit <= 1.0) {
        prob += 20;
    } else if (credit <= 2.0) {
        prob += 10;
    } else if (credit <= 4.0) {
        prob += 0;
    } else {
        prob -= 10;
    }

    // 3. Oscillation (Shrinking is better)
    const osc = data.oscillation;
    if (osc < 0.02) {
        prob += 15;
    } else if (osc < 0.03) {
        prob += 10;
    } else if (osc > 0.05) {
        prob -= 10;
    }

    // 4. Prev Day Ratio (Near 0 is better)
    const p_ratio = Math.abs(data.prev_day_ratio);
    if (p_ratio < 0.5) {
        prob += 10;
    } else if (p_ratio < 1.0) {
        prob += 5;
    } else if (p_ratio > 3.0) {
        prob -= 5;
    }

    return Math.min(Math.max(prob, 1), 99);
}

/**
 * Generate Logic Summary
 * @param {object} data 
 * @param {number} prob 
 * @returns {string}
 */
function generateLogic(data, prob) {
    const parts = [];
    const retPct = (data.retracement * 100).toFixed(1);

    // Retracement logic
    if (data.retracement >= -0.15 && data.retracement <= -0.05) {
        parts.push(`絶好の押し目(${retPct}%)`);
    } else if (data.retracement < -0.15) {
        parts.push(`売られすぎ反発期待(${retPct}%)`);
    } else {
        parts.push(`健全な調整(${retPct}%)`);
    }

    // Credit logic
    if (data.credit_ratio < 1.0) {
        parts.push(`空売り枯渇(倍率${data.credit_ratio.toFixed(2)})`);
    } else if (data.credit_ratio < 2.0) {
        parts.push(`需給改善`);
    }

    // Oscillation logic
    if (data.oscillation < 0.02) {
        parts.push(`極限の出来高縮小`);
    }

    return parts.join(" + ");
}

// ------------------------------
// 3. UI & File Handling
// ------------------------------

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const loadingSection = document.getElementById('loading-section');
const resultsSection = document.getElementById('results-section');
const tableBody = document.getElementById('table-body');
const searchInput = document.getElementById('search-input');
const downloadBtn = document.getElementById('download-btn');
const errorMessage = document.getElementById('error-message');

// Global data storage
let currentData = [];

// Drag & Drop Events
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--primary-color)';
    dropZone.style.backgroundColor = 'rgba(26, 115, 232, 0.05)';
});

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#ccc';
    dropZone.style.backgroundColor = 'transparent';
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#ccc';
    dropZone.style.backgroundColor = 'transparent';
    const files = e.dataTransfer.files;
    if (files.length) handleFile(files[0]);
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) handleFile(e.target.files[0]);
});

// Test Data Handling
const testFileBtn = document.getElementById('test-file-btn');
if (testFileBtn) {
    testFileBtn.addEventListener('click', loadTestData);
}

function loadTestData() {
    // Reset UI
    errorMessage.style.display = 'none';
    loadingSection.style.display = 'flex';
    resultsSection.style.display = 'none';

    // Simulate async loading
    setTimeout(() => {
        try {
            if (typeof TEST_FILE_BASE64 === 'undefined') {
                throw new Error("テストデータが見つかりません。test_data.jsが読み込まれているか確認してください。");
            }

            // Decode Base64
            const binaryString = atob(TEST_FILE_BASE64);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }

            // Parse Workbook
            const workbook = XLSX.read(bytes, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            processData(jsonData);

        } catch (err) {
            console.error(err);
            errorMessage.textContent = "テストデータの読み込みに失敗しました: " + err.message;
            errorMessage.style.display = 'block';
            loadingSection.style.display = 'none';
        }
    }, 300);
}

function handleFile(file) {
    // Reset UI
    errorMessage.style.display = 'none';
    loadingSection.style.display = 'flex';
    resultsSection.style.display = 'none';

    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assume first sheet
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            // Convert to JSON (array of arrays) to access by index
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            if (jsonData.length < 2) {
                throw new Error("ファイルの内容が空か、形式が正しくありません");
            }

            processData(jsonData);

        } catch (err) {
            console.error(err);
            errorMessage.textContent = "ファイル解析エラー: " + err.message;
            errorMessage.style.display = 'block';
            loadingSection.style.display = 'none';
        }
    };

    reader.readAsArrayBuffer(file);
}

function processData(rows) {
    const results = [];
    const processedCodes = new Set();

    // Indices based on Python script
    // 1: Code, 3: Name, 4: Price, 5: PrevRatio, 7: Retracement, 9: CreditRatio, 10: Oscillation, 11: Volume

    // Skip header (row 0)
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (!row || row.length < 10) continue; // Skip empty/short rows

        const code = row[1];
        const name = row[3];

        if (!code || !name) continue;

        // Deduplication
        const codeStr = String(code).trim().replace('.0', '');
        if (processedCodes.has(codeStr)) continue;
        processedCodes.add(codeStr);

        // Extract & Parse Values
        const price = parseFloat(row[4]) || 0;
        const prevRatio = parseFloat(row[5]) || 0;
        const retracement = parseFloat(row[7]) || 0; // Usually decimal like -0.15
        const creditRatio = parseFloat(row[9]) || 99;
        const oscillation = parseFloat(row[10]) || 0.05;

        // Data Object
        const data = {
            retracement,
            credit_ratio: creditRatio,
            prev_day_ratio: prevRatio,
            oscillation,
            price
        };

        // Filter Logic (Optional - keep lenient like Python script)
        // Python: if not (-0.30 <= retracement <= -0.02) continue
        if (retracement < -0.30 || retracement > -0.02) continue;

        // Calculate
        const prob = calculateProbability(data);
        const moat = getMoatInfo(codeStr, name);
        const logic = generateLogic(data, prob);

        results.push({
            code: codeStr,
            name: name,
            price: price,
            prob: prob,
            moat: moat,
            logic: logic,
            raw: data
        });
    }

    // Sort by Probability (Desc)
    results.sort((a, b) => b.prob - a.prob);

    currentData = results;
    displayResults(results);
    updateMetrics(results);

    loadingSection.style.display = 'none';
    resultsSection.style.display = 'block';
}

function displayResults(data) {
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');

        // Style probability
        let probClass = '';
        if (item.prob >= 80) probClass = 'prob-high';
        else if (item.prob >= 60) probClass = 'prob-medium';
        else probClass = 'prob-low';

        // Style Moat
        let moatClass = '';
        if (item.moat.rating.includes('High') || item.moat.rating.includes('Very High')) moatClass = 'moat-high';

        row.innerHTML = `
            <td>${item.code}</td>
            <td class="stock-name" onclick="showDetail('${item.code}')">${item.name}</td>
            <td>¥${item.price.toLocaleString()}</td>
            <td class="${probClass}">${item.prob}%</td>
            <td class="${moatClass}">${item.moat.rating}</td>
            <td>${item.moat.industry}</td>
            <td class="logic-cell">${item.logic}</td>
        `;
        tableBody.appendChild(row);
    });
}

function updateMetrics(data) {
    document.getElementById('metric-total').textContent = data.length;
    document.getElementById('metric-high-prob').textContent = data.filter(d => d.prob >= 70).length;
    document.getElementById('metric-high-moat').textContent = data.filter(d => d.moat.rating.includes('High')).length;
}

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = currentData.filter(item =>
        item.code.toLowerCase().includes(term) ||
        item.name.toLowerCase().includes(term) ||
        item.moat.industry.toLowerCase().includes(term)
    );
    displayResults(filtered);
});

// Download Functionality
downloadBtn.addEventListener('click', () => {
    if (!currentData.length) return;

    const headers = ["コード", "銘柄名", "現在値", "上昇確率", "Moat評価", "業種", "AIロジック", "Moat分析"];
    const rows = currentData.map(d => [
        d.code, d.name, d.price, d.prob, d.moat.rating, d.moat.industry, d.logic, d.moat.description
    ]);

    const csvContent = [
        headers.join(','),
        ...rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "JP_Stock_AI_Analysis.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Modal Logic
const modal = document.getElementById('detail-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-modal');

window.showDetail = function (code) {
    const item = currentData.find(d => d.code === code);
    if (!item) return;

    modalBody.innerHTML = `
            <h2>${item.name} (${item.code})</h2>
            <div class="detail-grid">
                <div class="detail-item">
                    <label>業種</label>
                    <span>${item.moat.industry}</span>
                </div>
                <div class="detail-item">
                    <label>Moat評価</label>
                    <span class="badge ${item.moat.rating.includes('High') ? 'badge-high' : ''}">${item.moat.rating}</span>
                </div>
                <div class="detail-item">
                    <label>上昇確率</label>
                    <span>${item.prob}%</span>
                </div>
                <div class="detail-item">
                    <label>現在値</label>
                    <span>¥${item.price.toLocaleString()}</span>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>🛡️ Moat分析</h3>
                <p>${item.moat.description}</p>
            </div>
            
            <div class="detail-section">
                <h3>📊 定量指標</h3>
                <ul>
                    <li><strong>最大ドローダウン:</strong> ${(item.raw.retracement * 100).toFixed(2)}%</li>
                    <li><strong>信用倍率:</strong> ${item.raw.credit_ratio.toFixed(2)}</li>
                    <li><strong>変動幅:</strong> ${(item.raw.oscillation * 100).toFixed(2)}%</li>
                    <li><strong>前日比:</strong> ${item.raw.prev_day_ratio.toFixed(2)}%</li>
                </ul>
            </div>
        `;

    modal.style.display = 'block';
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = 'none';
}

// Sorting
document.querySelectorAll('th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
        const key = th.dataset.sort;
        const isAsc = th.classList.contains('asc');

        // Reset others
        document.querySelectorAll('th').forEach(t => t.classList.remove('asc', 'desc'));

        // Toggle
        th.classList.toggle('asc', !isAsc);
        th.classList.toggle('desc', isAsc);

        const sorted = [...currentData].sort((a, b) => {
            let valA = key === 'moat' ? a.moat.rating : a[key];
            let valB = key === 'moat' ? b.moat.rating : b[key];

            if (typeof valA === 'string') valA = valA.toLowerCase();
            if (typeof valB === 'string') valB = valB.toLowerCase();

            if (valA < valB) return isAsc ? -1 : 1;
            if (valA > valB) return isAsc ? 1 : -1;
            return 0;
        });

        displayResults(sorted);
    });
});
