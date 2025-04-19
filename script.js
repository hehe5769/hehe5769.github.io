// 可以添加粒子背景或交互效果
// 示例：控制台显示问候
console.log("ようこそ、ネオ・テックへ！");

// EmailJSの初期化
(function () {

    emailjs.init('_6p4VdkpehfWYdLvz');  // ここに自分のEmailJSのUser IDを入力
})();

// フォーム送信処理
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // ページのリロードを防ぐ

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // メール送信
    var templateParams = {
        name: name,
        notes: message,
        email: email,
    };

    emailjs.send('service_ix1wtar', 'template_50hy1he', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('メッセージが送信されました！');
            window.location.href = "index.html"; // メッセージ送信後にリダイレクト
        },
        (error) => {
            console.log('FAILED...', error);
            alert('メッセージの送信に失敗しました。もう一度お試しください。');
        },
    );


});


