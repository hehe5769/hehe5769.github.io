const MOAT_INFO = {
    "7012": {
        "name": "川崎重工業",
        "industry": "Heavy Industry",
        "rating": "High",
        "description": "Defense/Hydrogen Tech"
    },
    "8058": {
        "name": "三菱商事",
        "industry": "Trading",
        "rating": "High",
        "description": "Energy/Metals"
    },
    "6758": {
        "name": "ソニーグループ",
        "industry": "Consumer Electronics",
        "rating": "High",
        "description": "全球独一无二的'技术+娱乐'综合体。在CMOS图像传感器领域拥有全球过半市场份额（核心技术壁垒）；同时拥有PlayStation游戏生态、索尼音乐、哥伦比亚电影等顶级内容资产。"
    },
    "7203": {
        "name": "トヨタ自動車",
        "industry": "Auto",
        "rating": "Very High",
        "description": "全球汽车销量冠军。拥有著名的'丰田生产方式'（TPS）和深厚的混合动力技术积累。其全产业链掌控能力、极高的品牌价值及全球销售服务网络构成了难以逾越的护城河。"
    },
    "8035": {
        "name": "東京エレクトロン",
        "industry": "Semiconductor",
        "rating": "Very High",
        "description": "亚洲最大、全球前三的半导体制造设备巨头。在涂胶显影机（Coater/Developer）领域拥有近90%的全球垄断份额。是EUV光刻工艺中不可或缺的核心设备供应商。"
    },
    "9984": {
        "name": "ソフトバンクＧ",
        "industry": "Investment",
        "rating": "High",
        "description": "全球最大的科技投资公司之一（愿景基金）。持有ARM（芯片架构垄断者）的控股权，是AI时代的幕后操盘手。其护城河在于孙正义的战略眼光及对全球核心科技资产的卡位。"
    },
    "6098": {
        "name": "リクルート",
        "industry": "Services",
        "rating": "High",
        "description": "全球领先的HR科技及生活服务平台。拥有全球最大的求职搜索引擎'Indeed'和'Glassdoor'。在日本国内拥有SUUMO（房产）、Jalan（旅游）、HotPepper（餐饮）等多个垂直领域的垄断级平台。"
    },
    "4568": {
        "name": "第一三共",
        "industry": "Pharma",
        "rating": "High",
        "description": "全球肿瘤药物领域的创新领导者。其ADC（抗体偶联药物）技术平台（如Enhertu）被认为是改变乳腺癌治疗格局的革命性突破，拥有极高的技术壁垒和未来的重磅炸弹药物潜力。"
    },
    "7984": {
        "name": "コクヨ",
        "industry": "Office Supplies",
        "rating": "Medium",
        "description": "日本国民级办公用品品牌，'Campus'笔记本伴随几代日本人成长。拥有极其强大的国内分销网络和品牌认知度。近年来通过收购香港文具巨头及拓展办公空间设计业务（Workplace Design），成功从单纯的文具商转型为办公生活方式服务商。"
    },
    "4967": {
        "name": "小林製薬",
        "industry": "Consumer Goods",
        "rating": "Medium",
        "description": "以'你没想到但很需要'（Niche）产品著称的日化巨头。擅长在细分蓝海市场（如退热贴、消臭元、洗眼液）建立绝对领导地位。虽然近期遭遇红曲事件风波，但其强大的品牌资产和遍布全球的细分产品线仍构成坚实的护城河。"
    },
    "7740": {
        "name": "タムロン",
        "industry": "Optical",
        "rating": "Medium",
        "description": "世界知名的综合光学镜头制造商。在单反/无反相机替换镜头领域与适马（Sigma）双寡头垄断。此外，在监控摄像头镜头、车载镜头及医疗光学领域也拥有全球领先的市场份额，是索尼等巨头的重要OEM合作伙伴。"
    },
    "7780": {
        "name": "メニコン",
        "industry": "Healthcare",
        "rating": "Medium",
        "description": "日本最大的隐形眼镜制造商，行业先驱。其独创的'Mels Plan'定额会员制模式（订阅制）极大地提高了用户粘性和经常性收入，构建了极强的商业模式护城河。在近视防控等新领域也处于领先地位。"
    },
    "6292": {
        "name": "カワタ",
        "industry": "Machinery",
        "rating": "Low-Medium",
        "description": "全球塑料成型周边辅助设备（输送、干燥、混合）的领军企业。在日本国内市场份额极高，且在中国及东南亚拥有强大的生产和销售网络。其技术壁垒在于高精度的物料处理能力，是注塑工厂不可或缺的配套环节。"
    },
    "3161": {
        "name": "アゼアス",
        "industry": "Apparel/Protection",
        "rating": "Low-Medium",
        "description": "日本防护服领域的隐形冠军。作为美国杜邦公司Tyvek（特卫强）防护服在日本的独家总代理，拥有极高的市场壁垒。业务覆盖医疗、工业及核电站防护，在特殊作业环境中具有不可替代的地位。"
    },
    "2354": {
        "name": "ＹＥＤＩＧＩＴＡＬ",
        "industry": "IT/IoT",
        "rating": "Low-Medium",
        "description": "安川电机集团旗下的数字化转型核心企业。专注于制造业IoT解决方案（安川电机工厂自动化经验的软件化）。在日本工业DX（数字化转型）领域具有独特的竞争优势，特别是其'MMCloud'物联网平台在中小制造企业中渗透率高。"
    },
    "7004": {
        "name": "カナデビア",
        "industry": "Engineering",
        "rating": "Medium",
        "description": "原日立造船。已转型为环境能源工程企业。在垃圾焚烧发电（Waste to Energy）领域拥有全球顶级的业绩和技术。在脱碳社会背景下，其环境工程技术构成了新的护城河。"
    },
    "6743": {
        "name": "大同信号",
        "industry": "Railroad",
        "rating": "Medium",
        "description": "日本铁路信号系统的核心供应商。主要服务于JR及各大私铁。由于铁路安全的高度敏感性和技术排他性，其业务具有极高的准入壁垒和长期稳定性（替换需求）。"
    },
    "3636": {
        "name": "三菱総合研究所",
        "industry": "Consulting/IT",
        "rating": "High",
        "description": "三菱集团的核心智库，日本顶尖的综合研究所之一。在政府政策制定、大型基础设施规划及金融IT系统领域拥有深厚的护城河。其业务模式结合了高端咨询（大脑）与IT解决方案（手脚），客户粘性极高，收益主要来自政府及大型金融机构的长期合同。"
    },
    "9983": {
        "name": "ファーストリテイリング",
        "industry": "Retail",
        "rating": "High",
        "description": "世界第三大服装零售商，优衣库（UNIQLO）母公司。拥有极致的供应链管理能力和面料研发壁垒（如HeatTech）。在全球范围内建立了强大的品牌认知和高效的SPA（自有品牌专业零售商）商业模式。"
    },
    "6861": {
        "name": "キーエンス",
        "industry": "Factory Automation",
        "rating": "Very High",
        "description": "全球工业自动化传感器与机器视觉的领导者。以其超高利润率（50%以上）和直销模式著称。护城河在于极强的产品企划能力和覆盖全球的高效销售顾问网络，而非单纯的制造工厂。"
    },
    "6501": {
        "name": "日立製作所",
        "industry": "Conglomerate",
        "rating": "High",
        "description": "IT/Social Infrastructure"
    },
    "6702": {
        "name": "富士通",
        "industry": "IT Services",
        "rating": "High",
        "description": "DX/Govt Contracts"
    },
    "7751": {
        "name": "キヤノン",
        "industry": "Optical/Office",
        "rating": "High",
        "description": "全球影像与办公设备巨头。相机市场份额全球第一，打印机引擎技术全球领先。近年来通过收购东芝医疗（现佳能医疗），在CT/MRI等医疗设备领域也建立了强大的护城河。拥有庞大的专利组合。"
    },
    "6902": {
        "name": "デンソー",
        "industry": "Auto Parts",
        "rating": "High",
        "description": "EV/AD Tech"
    },
    "4063": {
        "name": "信越化学工業",
        "industry": "Chemicals",
        "rating": "Very High",
        "description": "Silicon Wafer Global Share"
    },
    "6367": {
        "name": "ダイキン工業",
        "industry": "Machinery/HVAC",
        "rating": "Very High",
        "description": "全球最大的空调制造商。通过独特的'直销模式'和并购战略（如收购Goodman），在美、中、日、欧均占据领先地位。其变频技术和冷媒控制技术构成了核心技术壁垒。"
    },
    "4543": {
        "name": "テルモ",
        "industry": "Medical",
        "rating": "High",
        "description": "Catheter/Medical Tech"
    },
    "6954": {
        "name": "ファナック",
        "industry": "Robotics",
        "rating": "Very High",
        "description": "Industrial Robots/CNC"
    },
    "6981": {
        "name": "村田製作所",
        "industry": "Components",
        "rating": "High",
        "description": "MLCC/Filters"
    },
    "4503": {
        "name": "Astellas Pharma",
        "industry": "Pharma",
        "rating": "High",
        "description": "Oncology/Urology Drugs"
    },
    "4519": {
        "name": "Chugai",
        "industry": "Pharma",
        "rating": "High",
        "description": "Biotech/Roche Alliance"
    },
    "4578": {
        "name": "Otsuka",
        "industry": "Pharma",
        "rating": "Medium",
        "description": "CNS/Nutraceuticals (Pocari Sweat)"
    },
    "4507": {
        "name": "Shionogi",
        "industry": "Pharma",
        "rating": "Medium",
        "description": "Infectious Diseases/HIV"
    },
    "4523": {
        "name": "Eisai",
        "industry": "Pharma",
        "rating": "High",
        "description": "Neurology/Oncology (Alzheimer's)"
    },
    "7267": {
        "name": "本田技研",
        "industry": "Auto/Motorcycle",
        "rating": "High",
        "description": "全球最大的摩托车制造商（绝对垄断）和主要汽车厂商。摩托车业务提供了极其稳定的现金流。在小型喷气机（HondaJet）和动力产品领域也拥有世界级技术，是独特的'动力总成'综合企业。"
    },
    "7269": {
        "name": "スズキ",
        "industry": "Auto",
        "rating": "Medium",
        "description": "India Market Share/Small Cars"
    },
    "7270": {
        "name": "Subaru",
        "industry": "Auto",
        "rating": "High",
        "description": "AWD/Safety Tech (EyeSight)"
    },
    "7201": {
        "name": "Nissan Motor",
        "industry": "Auto",
        "rating": "Medium",
        "description": "EV Pioneer/Alliance with Renault"
    },
    "7202": {
        "name": "いすゞ自動車",
        "industry": "Auto",
        "rating": "Medium",
        "description": "Trucks/Diesel Engines"
    },
    "7205": {
        "name": "日野自動車",
        "industry": "Auto",
        "rating": "Low-Medium",
        "description": "Trucks/Toyota Group"
    },
    "7211": {
        "name": "三菱自動車",
        "industry": "Auto",
        "rating": "Low-Medium",
        "description": "ASEAN Market/PHEV"
    },
    "7272": {
        "name": "ヤマハ発動機",
        "industry": "Auto/Marine",
        "rating": "High",
        "description": "雅马哈发动机。全球第二大摩托车商，且在船外机（Outboard Motor）领域与水星海事双寡头垄断，拥有极高的利润率。在表面贴装机（SMT）和工业机器人领域也有很强的竞争力。"
    },
    "5108": {
        "name": "ブリヂストン",
        "industry": "Rubber",
        "rating": "High",
        "description": "Global Tire Share"
    },
    "5101": {
        "name": "横浜ゴム",
        "industry": "Rubber",
        "rating": "Medium",
        "description": "Tires"
    },
    "5201": {
        "name": "ＡＧＣ",
        "industry": "Glass",
        "rating": "High",
        "description": "Glass/Chemicals"
    },
    "5401": {
        "name": "日本製鉄",
        "industry": "Steel",
        "rating": "High",
        "description": "Global Steel Maker"
    },
    "5411": {
        "name": "ＪＦＥホールディングス",
        "industry": "Steel",
        "rating": "Medium",
        "description": "Domestic Steel"
    },
    "5406": {
        "name": "神戸製鋼所",
        "industry": "Steel",
        "rating": "Medium",
        "description": "Steel/Aluminum/Power"
    },
    "5713": {
        "name": "住友金属鉱山",
        "industry": "Mining",
        "rating": "High",
        "description": "Gold/Nickel/Materials"
    },
    "5711": {
        "name": "三菱マテリアル",
        "industry": "Materials",
        "rating": "Medium",
        "description": "综合有色金属巨头。在铜冶炼、水泥、硬质合金刀具及电子材料领域均有布局。其废家电回收及贵金属精炼技术世界领先，是循环经济的重要参与者。"
    },
    "5706": {
        "name": "三井金属鉱業",
        "industry": "Materials",
        "rating": "Medium",
        "description": "Zinc/Copper Foil"
    },
    "5802": {
        "name": "住友電気工業",
        "industry": "Wire/Cable",
        "rating": "High",
        "description": "Auto Harness/Fiber Optics"
    },
    "5803": {
        "name": "フジクラ",
        "industry": "Non-Ferrous/Cable",
        "rating": "Medium",
        "description": "全球领先的光纤光缆及FPC（柔性印刷电路板）制造商。在数据中心用高密度光缆领域拥有核心技术。随着AI和5G带来的数据流量爆发，其高端光连接解决方案具有极高的技术壁垒。"
    },
    "5801": {
        "name": "古河電気工業",
        "industry": "Wire/Cable",
        "rating": "Medium",
        "description": "Fiber Optics/Power"
    },
    "6301": {
        "name": "コマツ",
        "industry": "Machinery",
        "rating": "High",
        "description": "Construction Machinery/IoT"
    },
    "6305": {
        "name": "日立建機",
        "industry": "Machinery",
        "rating": "Medium",
        "description": "Construction Machinery"
    },
    "6326": {
        "name": "クボタ",
        "industry": "Machinery",
        "rating": "High",
        "description": "Agri/Water Machinery"
    },
    "6361": {
        "name": "荏原製作所",
        "industry": "Machinery",
        "rating": "Medium",
        "description": "Pumps/Semicon"
    },
    "6471": {
        "name": "日本精工",
        "industry": "Machinery",
        "rating": "Medium",
        "description": "Bearings"
    },
    "6472": {
        "name": "ＮＴＮ",
        "industry": "Machinery",
        "rating": "Low-Medium",
        "description": "Bearings"
    },
    "6473": {
        "name": "ジェイテクト",
        "industry": "Machinery",
        "rating": "Medium",
        "description": "Steering/Bearings"
    },
    "6503": {
        "name": "三菱電機",
        "industry": "Electric",
        "rating": "High",
        "description": "FA/Auto/Space"
    },
    "6504": {
        "name": "富士電機",
        "industry": "Electric",
        "rating": "Medium",
        "description": "Power Electronics"
    },
    "6506": {
        "name": "安川電機",
        "industry": "Factory Automation",
        "rating": "Very High",
        "description": "全球四大工业机器人家族之一。在AC伺服电机和变频器领域拥有世界第一的市场份额。其核心竞争力在于对'运动控制'（Motion Control）技术的极致掌握，是自动化产线的心脏。"
    },
    "6645": {
        "name": "オムロン",
        "industry": "Electric",
        "rating": "High",
        "description": "Sensing/Control"
    },
    "6701": {
        "name": "ＮＥＣ",
        "industry": "IT",
        "rating": "Medium",
        "description": "Public/Telecom/Biometrics"
    },
    "6724": {
        "name": "セイコーエプソン",
        "industry": "Electric",
        "rating": "Medium",
        "description": "Printers/Projectors"
    },
    "6752": {
        "name": "パナソニック",
        "industry": "Electric",
        "rating": "High",
        "description": "Batteries/Appliances"
    },
    "6753": {
        "name": "シャープ",
        "industry": "Electric",
        "rating": "Low-Medium",
        "description": "LCD/Appliances"
    },
    "6762": {
        "name": "ＴＤＫ",
        "industry": "Components",
        "rating": "High",
        "description": "Battery/Magnetic Heads"
    },
    "6770": {
        "name": "アルプスアルパイン",
        "industry": "Components",
        "rating": "Medium",
        "description": "Auto/Mobile"
    },
    "6841": {
        "name": "横河電機",
        "industry": "Electric",
        "rating": "Medium",
        "description": "Industrial Control"
    },
    "6920": {
        "name": "レーザーテック",
        "industry": "Semiconductor",
        "rating": "Very High",
        "description": "Mask Inspection Monopoly"
    },
    "6971": {
        "name": "京セラ",
        "industry": "Components",
        "rating": "High",
        "description": "Ceramic Packages"
    },
    "6976": {
        "name": "太陽誘電",
        "industry": "Components",
        "rating": "Medium",
        "description": "MLCC"
    },
    "6988": {
        "name": "日東電工",
        "industry": "Chemicals",
        "rating": "High",
        "description": "Optical Films/Tapes"
    },
    "7011": {
        "name": "三菱重工業",
        "industry": "Heavy Industry",
        "rating": "High",
        "description": "Defense/Gas Turbines/Space"
    },
    "7013": {
        "name": "ＩＨＩ",
        "industry": "Heavy Industry",
        "rating": "Medium",
        "description": "Jet Engines/Energy"
    },
    "7731": {
        "name": "ニコン",
        "industry": "Optical",
        "rating": "Medium",
        "description": "Cameras/Lithography"
    },
    "7733": {
        "name": "オリンパス",
        "industry": "Medical",
        "rating": "Very High",
        "description": "GI Endoscopes"
    },
    "7735": {
        "name": "ＳＣＲＥＥＮホールディングス",
        "industry": "Semiconductor",
        "rating": "Medium",
        "description": "Cleaning Equipment"
    },
    "7762": {
        "name": "シチズン時計",
        "industry": "Precision",
        "rating": "Medium",
        "description": "Watches/Parts"
    },
    "8001": {
        "name": "伊藤忠商事",
        "industry": "Trading",
        "rating": "High",
        "description": "Non-Resource/Consumer"
    },
    "8002": {
        "name": "丸紅",
        "industry": "Trading",
        "rating": "Medium",
        "description": "日本五大综合商社之一。在谷物（粮食）贸易领域拥有日本最强的实力，是全球主要的粮商之一。同时在海外电力IPP（独立发电商）业务上也具有世界级规模。"
    },
    "8015": {
        "name": "豊田通商",
        "industry": "Trading",
        "rating": "Medium",
        "description": "Auto/Africa"
    },
    "1605": {
        "name": "INPEX",
        "industry": "Energy",
        "rating": "High",
        "description": "National Oil & Gas Projects"
    },
    "1925": {
        "name": "大和ハウス工業",
        "industry": "Construction",
        "rating": "Medium",
        "description": "Industrial Logistics/Housing"
    },
    "1928": {
        "name": "積水ハウス",
        "industry": "Construction",
        "rating": "Medium",
        "description": "Housing/ESG Leader"
    },
    "2413": {
        "name": "エムスリー",
        "industry": "Services",
        "rating": "Very High",
        "description": "Medical Platform Monopoly"
    },
    "2502": {
        "name": "アサヒグループＨＤ",
        "industry": "Beverage",
        "rating": "High",
        "description": "Global Beer Brands"
    },
    "2503": {
        "name": "キリンＨＤ",
        "industry": "Beverage",
        "rating": "Medium",
        "description": "Fermentation Tech/Pharma"
    },
    "2801": {
        "name": "キッコーマン",
        "industry": "Food",
        "rating": "High",
        "description": "Soy Sauce Global Brand"
    },
    "2802": {
        "name": "味の素",
        "industry": "Food",
        "rating": "High",
        "description": "Umami/Semicon Materials"
    },
    "2914": {
        "name": "ＪＴ",
        "industry": "Food/Tobacco",
        "rating": "High",
        "description": "High Dividend/Global Tobacco"
    },
    "3382": {
        "name": "セブン＆アイ・ＨＤ",
        "industry": "Retail",
        "rating": "High",
        "description": "Global CVS Network"
    },
    "3405": {
        "name": "クラレ",
        "industry": "Chemicals",
        "rating": "High",
        "description": "Vinyl Acetate Monopoly"
    },
    "3407": {
        "name": "旭化成",
        "industry": "Chemicals",
        "rating": "Medium",
        "description": "Material/Homes/Health"
    },
    "4021": {
        "name": "Nissan Chemical",
        "industry": "Chemicals",
        "rating": "High",
        "description": "Agro/Performance Materials Niche Leader"
    },
    "4183": {
        "name": "Mitsui Chemicals",
        "industry": "Chemicals",
        "rating": "Medium",
        "description": "Mobility/Health Care/Food Packaging"
    },
    "4188": {
        "name": "三菱ケミカルグループ",
        "industry": "Chemicals",
        "rating": "Medium",
        "description": "Diversified Chemicals"
    },
    "4324": {
        "name": "電通グループ",
        "industry": "Services",
        "rating": "Medium",
        "description": "Global Ad Network"
    },
    "4452": {
        "name": "花王",
        "industry": "Consumer Goods",
        "rating": "High",
        "description": "日本最大的日化企业，拥有连续30多年分红增长的记录。旗下拥有Merries（纸尿裤）、Attack（洗衣液）、Bioré（护肤）等众多国民品牌。其护城河在于强大的研发能力（表面活性剂技术）和自建的高效物流销售网络。"
    },
    "4502": {
        "name": "武田薬品工業",
        "industry": "Pharma",
        "rating": "High",
        "description": "Global Pharma Giant"
    },
    "4506": {
        "name": "住友ファーマ",
        "industry": "Pharma",
        "rating": "Low-Medium",
        "description": "Patent Cliff Concerns"
    },
    "4661": {
        "name": "オリエンタルランド",
        "industry": "Services",
        "rating": "Very High",
        "description": "Disney Tokyo Monopoly"
    },
    "4689": {
        "name": "ＬＩＮＥヤフー",
        "industry": "IT/Services",
        "rating": "High",
        "description": "Super App Ecosystem"
    },
    "4704": {
        "name": "トレンドマイクロ",
        "industry": "IT/Security",
        "rating": "Medium",
        "description": "Cybersecurity"
    },
    "4751": {
        "name": "サイバーエージェント",
        "industry": "IT/Media",
        "rating": "Medium",
        "description": "AbemaTV/Games/Ads"
    },
    "4755": {
        "name": "楽天グループ",
        "industry": "IT/Services",
        "rating": "Low-Medium",
        "description": "Ecosystem vs Mobile Debt"
    },
    "4901": {
        "name": "Fujifilm",
        "industry": "Healthcare/Materials",
        "rating": "High",
        "description": "Bio CDMO/Medical Imaging"
    },
    "1808": {
        "name": "Haseko",
        "industry": "Construction",
        "rating": "Medium",
        "description": "Condominium Construction Leader"
    },
    "3086": {
        "name": "J. Front Retailing",
        "industry": "Retail",
        "rating": "Medium",
        "description": "Daimaru Matsuzakaya Dept Stores"
    },
    "8233": {
        "name": "Takashimaya",
        "industry": "Retail",
        "rating": "Medium",
        "description": "High-end Department Stores"
    },
    "4042": {
        "name": "Tosoh",
        "industry": "Chemicals",
        "rating": "Medium",
        "description": "Chlor-alkali/Specialty Materials"
    },
    "9143": {
        "name": "SG Holdings",
        "industry": "Logistics",
        "rating": "Medium",
        "description": "Sagawa Express Delivery"
    },
    "7741": {
        "name": "ＨＯＹＡ",
        "industry": "Precision",
        "rating": "Very High",
        "description": "EUV Blanks/Eyecare"
    },
    "7911": {
        "name": "Toppan",
        "industry": "Printing",
        "rating": "Medium",
        "description": "Information/Electronics Packaging"
    },
    "7912": {
        "name": "Dai Nippon Printing",
        "industry": "Printing",
        "rating": "Medium",
        "description": "Battery Pouches/Display Components"
    },
    "4911": {
        "name": "Shiseido",
        "industry": "Consumer Goods",
        "rating": "High",
        "description": "Global Beauty Brand"
    },
    "5019": {
        "name": "出光興産",
        "industry": "Energy",
        "rating": "Medium",
        "description": "Refining/OLED Materials"
    },
    "5332": {
        "name": "ＴＯＴＯ",
        "industry": "Housing",
        "rating": "High",
        "description": "Sanitary Ware Tech"
    },
    "6113": {
        "name": "アマダ",
        "industry": "Machinery",
        "rating": "Medium",
        "description": "Metal Processing Machinery"
    },
    "6146": {
        "name": "ディスコ",
        "industry": "Semiconductor",
        "rating": "Very High",
        "description": "Dicing/Grinding Monopoly"
    },
    "6178": {
        "name": "日本郵政",
        "industry": "Services",
        "rating": "High",
        "description": "Nationwide Network"
    },
    "6273": {
        "name": "ＳＭＣ",
        "industry": "Factory Automation",
        "rating": "Very High",
        "description": "Pneumatics Global Share"
    },
    "6383": {
        "name": "ダイフク",
        "industry": "Machinery",
        "rating": "High",
        "description": "Material Handling Systems"
    },
    "6479": {
        "name": "ミネベアミツミ",
        "industry": "Components",
        "rating": "High",
        "description": "Niche Precision Parts"
    },
    "6594": {
        "name": "ニデック",
        "industry": "Components",
        "rating": "High",
        "description": "Motors (EV/HDD)"
    },
    "6674": {
        "name": "ＧＳユアサ",
        "industry": "Electric",
        "rating": "Medium",
        "description": "Batteries (Auto/Industrial)"
    },
    "6857": {
        "name": "アドバンテスト",
        "industry": "Semiconductor",
        "rating": "Very High",
        "description": "全球半导体测试设备（ATE）双寡头之一（与Teradyne）。在SoC测试和存储器测试领域占据垄断地位。随着AI芯片（GPU）的复杂度提升，其高端测试设备的需求和技术壁垒日益增高。"
    },
    "7974": {
        "name": "任天堂",
        "industry": "Services",
        "rating": "Very High",
        "description": "IP/Console Ecosystem"
    },
    "8031": {
        "name": "三井物産",
        "industry": "Trading",
        "rating": "High",
        "description": "日本五大综合商社之一，资源与能源领域的王者。在铁矿石、液化天然气（LNG）等上游资源权益拥有量上居商社之首。近期积极转型，在医疗健康和食品领域也构建了强大的全球网络。"
    },
    "8053": {
        "name": "住友商事",
        "industry": "Trading",
        "rating": "Medium",
        "description": "Media/Cable TV"
    },
    "8306": {
        "name": "三菱ＵＦＪＦＧ",
        "industry": "Bank",
        "rating": "High",
        "description": "Global Systemically Important Bank"
    },
    "8316": {
        "name": "三井住友フィナンシャルＧ",
        "industry": "Bank",
        "rating": "High",
        "description": "日本三大金融集团之一，以高效率和高盈利能力著称。其海外业务占比高，特别是在飞机租赁（SMBC Aviation Capital）和项目融资领域具有全球竞争力。"
    },
    "8411": {
        "name": "みずほフィナンシャルＧ",
        "industry": "Bank",
        "rating": "High",
        "description": "日本三大金融集团之一。拥有唯一的'全都道府县'分行网络，且在银团贷款（Syndicated Loan）领域长期占据日本首位。虽然系统整合曾有波折，但其庞大的企业客户基础（旧兴银系）构成了深厚的护城河。"
    },
    "8591": {
        "name": "オリックス",
        "industry": "Financial",
        "rating": "High",
        "description": "Diversified Finance/Lease"
    },
    "8604": {
        "name": "野村ＨＤ",
        "industry": "Securities",
        "rating": "Medium",
        "description": "Global Investment Banking"
    },
    "8725": {
        "name": "ＭＳ＆ＡＤ",
        "industry": "Insurance",
        "rating": "High",
        "description": "Non-Life Insurance Leader"
    },
    "8766": {
        "name": "東京海上ＨＤ",
        "industry": "Insurance",
        "rating": "High",
        "description": "Global Insurance Brand"
    },
    "8801": {
        "name": "三井不動産",
        "industry": "Real Estate",
        "rating": "High",
        "description": "Top Developer"
    },
    "8802": {
        "name": "三菱地所",
        "industry": "Real Estate",
        "rating": "High",
        "description": "Marunouchi Landlord"
    },
    "8830": {
        "name": "住友不動産",
        "industry": "Real Estate",
        "rating": "High",
        "description": "Condo/Office Redevelopment"
    },
    "9020": {
        "name": "ＪＲ東日本",
        "industry": "Railroad",
        "rating": "Very High",
        "description": "Tokyo Metro Network"
    },
    "9021": {
        "name": "ＪＲ西日本",
        "industry": "Railroad",
        "rating": "High",
        "description": "Kansai Network"
    },
    "9022": {
        "name": "ＪＲ東海",
        "industry": "Railroad",
        "rating": "Very High",
        "description": "Shinkansen Cash Cow"
    },
    "9101": {
        "name": "日本郵船",
        "industry": "Shipping",
        "rating": "High",
        "description": "世界顶级的综合航运企业。作为日本最大的船公司，拥有庞大的集装箱船队（ONE联盟）、LNG运输船队及汽车运输船队。其全球物流网络和能源运输长协构成了极高的行业壁垒。"
    },
    "9104": {
        "name": "商船三井",
        "industry": "Shipping",
        "rating": "High",
        "description": "Energy Transport"
    },
    "9107": {
        "name": "川崎汽船",
        "industry": "Shipping",
        "rating": "Medium",
        "description": "Car Carriers"
    },
    "9201": {
        "name": "日本航空",
        "industry": "Air Transport",
        "rating": "Medium",
        "description": "Duopoly in Japan"
    },
    "9202": {
        "name": "ＡＮＡホールディングス",
        "industry": "Air Transport",
        "rating": "Medium",
        "description": "Duopoly in Japan"
    },
    "9432": {
        "name": "日本電信電話",
        "industry": "Telecom",
        "rating": "Very High",
        "description": "NTT集团控股公司，日本电信基础设施的绝对垄断者。拥有遍布全日本的光纤网络和通信局舍。通过旗下NTT Data、NTT Docomo等子公司，掌控了日本的通信、系统集成及移动互联命脉。"
    },
    "9433": {
        "name": "ＫＤＤＩ",
        "industry": "Telecom",
        "rating": "High",
        "description": "Mobile/Life Design"
    },
    "9434": {
        "name": "ソフトバンク",
        "industry": "Telecom",
        "rating": "High",
        "description": "Mobile/Yahoo/PayPay"
    },
    "9501": {
        "name": "東京電力ＨＤ",
        "industry": "Utility",
        "rating": "High",
        "description": "Regional Monopoly (Risk: Nuclear)"
    },
    "9503": {
        "name": "関西電力",
        "industry": "Utility",
        "rating": "High",
        "description": "Regional Monopoly"
    },
    "9531": {
        "name": "東京瓦斯",
        "industry": "Utility",
        "rating": "High",
        "description": "City Gas Monopoly"
    },
    "9532": {
        "name": "大阪瓦斯",
        "industry": "Utility",
        "rating": "High",
        "description": "City Gas Monopoly"
    },
    "9613": {
        "name": "ＮＴＴデータ",
        "industry": "IT Services",
        "rating": "High",
        "description": "Govt/Financial Systems"
    },
    "9735": {
        "name": "セコム",
        "industry": "Services",
        "rating": "High",
        "description": "Security Services Leader"
    },
    "9766": {
        "name": "コナミグループ",
        "industry": "Services",
        "rating": "Medium",
        "description": "Gaming/Sports Clubs"
    },
    "9843": {
        "name": "ニトリＨＤ",
        "industry": "Retail",
        "rating": "High",
        "description": "Furniture SPA Leader"
    },
    "3799": {
        "name": "キーウェアソリューションズ",
        "industry": "IT Services",
        "rating": "Low-Medium",
        "description": "专注于公共基础设施（如交通、医疗、防灾）的系统集成商。虽然规模不大，但与NEC、NTT等巨头有长期稳定的合作关系，在特定公共领域的系统开发中积累了丰富的行业Know-how，业绩稳定性强。"
    },
    "8951": {
        "name": "日本ビルファンド",
        "industry": "REIT",
        "rating": "High",
        "description": "日本最大的办公楼REIT（J-REIT），由三井不动产发起。持有资产包括东京市中心的顶级写字楼（如日比谷三井大厦等）。其护城河在于无可比拟的资产质量和三井不动产集团的运营支持，是日本房地产市场的风向标。"
    },
    "2695": {
        "name": "くら寿司",
        "industry": "Food/Retail",
        "rating": "Medium",
        "description": "日本四大回转寿司连锁之一，以'无添加'和'高科技自动化'著称。其拥有专利的抗菌寿司盖（Sendo-kun）和自动化回收系统构成了运营效率壁垒。目前正积极拓展美国和台湾市场，旨在成为全球化的'寿司麦当劳'。"
    },
    "6395": {
        "name": "タダノ",
        "industry": "Machinery",
        "rating": "Medium",
        "description": "全球知名的液压起重机制造商，与加藤制作所（Kato）并称日本双雄。在全路面起重机和越野轮胎起重机领域拥有极高的全球市场份额。通过收购德国Demag起重机业务，进一步强化了在欧洲及大型起重机市场的地位。"
    },
    "6363": {
        "name": "酉島製作所",
        "industry": "Machinery",
        "rating": "Medium",
        "description": "专注于泵类产品的全球化企业。在海水淡化泵、发电厂给水泵等高压/大型泵领域拥有世界级的技术实力和市场份额。中东地区是其主要利润来源地之一，售后服务网络遍布全球。"
    },
    "4318": {
        "name": "クイック",
        "industry": "Services",
        "rating": "Medium",
        "description": "专注于专业领域（建筑、医疗、制药）的人力资源服务商。在'Indeed'代理业务上也处于日本领先地位。其护城河在于深耕细分行业的专业人才数据库，与通用型招聘企业形成差异化竞争。"
    },
    "5541": {
        "name": "大平洋金属",
        "industry": "Steel/Mining",
        "rating": "Low-Medium",
        "description": "日本国内主要的镍铁（Ferronickel）生产商，不锈钢的主要原料供应商。虽然受制于资源价格波动，但其冶炼技术和与新日铁等不锈钢巨头的长期供应关系构成了其生存壁垒。"
    },
    "9028": {
        "name": "ゼロ",
        "industry": "Logistics",
        "rating": "Medium",
        "description": "日本最大的汽车物流企业，主要服务于日产汽车（Nissan），但也覆盖其他品牌及二手车物流。在整车运输网络、PDI（交车前检查）服务及二手车拍卖运输领域拥有压倒性的市场份额和基础设施。"
    },
    "3436": {
        "name": "ＳＵＭＣＯ",
        "industry": "Semiconductor",
        "rating": "High",
        "description": "全球第二大半导体硅片（Silicon Wafer）制造商，与信越化学共同垄断全球约60%的市场份额。在300mm高端晶圆领域拥有极高的技术壁垒和定价权，是半导体产业链最上游的核心资产。"
    },
    "3826": {
        "name": "システムインテグレータ",
        "industry": "IT/Software",
        "rating": "Low-Medium",
        "description": "独立的ERP软件包开发商。其'GRANDIT'是日本国内首个完全基于Web的ERP系统。此外在AI编程辅助工具和数据库开发工具（SI Object Browser）领域拥有特定的开发者社群壁垒。"
    },
    "6480": {
        "name": "日本トムソン",
        "industry": "Machinery",
        "rating": "Medium",
        "description": "品牌名'IKO'。日本第一家开发滚针轴承（Needle Bearing）的企业。在直线导轨和精密定位台领域拥有核心技术，广泛应用于半导体制造设备和工业机器人中。"
    },
    "8103": {
        "name": "明和産業",
        "industry": "Trading",
        "rating": "Low-Medium",
        "description": "隶属三菱集团的专业商社。深耕中国市场，在化工品、电池材料及建筑材料领域拥有独特的供应链网络。其护城河在于特定细分市场的渠道控制力。"
    },
    "9435": {
        "name": "光通信",
        "industry": "Services",
        "rating": "Medium",
        "description": "以极强的直销（地推）能力著称的办公自动化设备及保险销售商。拥有庞大的中小企业客户群（这也是其护城河）。近年来转型为'股票投资公司'，持有大量高分红、低估值上市公司的股份。"
    },
    "6848": {
        "name": "東亜ディーケーケー",
        "industry": "Precision Inst",
        "rating": "Medium",
        "description": "环境测量仪器的专业制造商。在水质分析仪、气体检测仪领域拥有日本领先的市场份额。随着环保法规日益严格，其高精度的测量技术成为工业排放监测的刚需。"
    },
    "1802": {
        "name": "大林組",
        "industry": "Construction",
        "rating": "High",
        "description": "日本五大超级承包商（Super General Contractor）之一。以建造世界最高塔（东京晴空塔）展现其技术实力。在超高层建筑、隧道挖掘及抗震技术方面拥有世界级的工程壁垒。"
    },
    "6302": {
        "name": "住友重機械工業",
        "industry": "Machinery",
        "rating": "Medium",
        "description": "住友集团的综合重机制造商。在减速机（动力传动）、注塑机及医疗用粒子加速器（癌症治疗）领域拥有核心技术。其护城河在于多元化的业务组合和特定细分市场的技术领先。"
    },
    "5122": {
        "name": "オカモト",
        "industry": "Rubber/Plastic",
        "rating": "Medium",
        "description": "全球知名的橡胶与塑料制品制造商。以安全套（0.01mm技术）闻名世界，同时在工业用薄膜、汽车内饰材料领域拥有隐形冠军地位。品牌认知度和材料加工技术是其护城河。"
    },
    "6866": {
        "name": "日置電機",
        "industry": "Precision Inst",
        "rating": "Medium",
        "description": "专注于电气测量仪器的隐形冠军。在电池测试仪（用于EV电池生产线）和功率分析仪领域拥有全球领先的技术。随着电动汽车和新能源产业的发展，其高精度测量设备成为行业标配。"
    },
    "6807": {
        "name": "日本航空電子工業",
        "industry": "Electronics",
        "rating": "Medium",
        "description": "NEC集团旗下的连接器巨头。在智能手机、汽车及航空航天领域的精密连接器市场拥有极高的份额。特别是在小型化、高频化连接器技术上具有深厚的积累。"
    },
    "7701": {
        "name": "島津製作所",
        "industry": "Precision Inst",
        "rating": "High",
        "description": "日本分析仪器的代名词，诺贝尔奖（田中耕一）辈出的企业。在质谱仪、色谱仪及医疗X光设备领域拥有世界级竞争力。其护城河在于长期的基础科学研发积累和极高的品牌信誉。"
    },
    "7611": {
        "name": "ハイデイ日高",
        "industry": "Food/Retail",
        "rating": "Low-Medium",
        "description": "主要在关东地区运营'日高屋'的中华料理连锁。以'车站前的一楼'为选址战略，构建了高效的中央厨房配送体系。其护城河在于极致的成本控制和高翻台率带来的价格竞争力。"
    },
    "6871": {
        "name": "日本マイクロニクス",
        "industry": "Semiconductor",
        "rating": "Medium",
        "description": "半导体晶圆测试探针卡（Probe Card）的领军企业。特别是用于存储芯片测试的探针卡市场份额全球领先。随着3D NAND等多层堆叠技术的发展，其高难度测试解决方案的需求持续增长。"
    },
    "1332": {
        "name": "ニッスイ",
        "industry": "Food/Marine",
        "rating": "Medium",
        "description": "原日本水产。全球第二大水产企业。拥有从捕捞、养殖到加工、销售的完整产业链。在EPA/DHA等功能性食品原料领域也拥有独特的供应链优势。"
    }
};

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
    let industry = "Unknown";
    let rating = "Medium";
    let description = "需要进一步研究以确定其具体护城河。";

    if (name.includes("ホールディングス") || name.includes("ＨＤ") || name.includes("Ｇ")) {
        industry = "Conglomerate";
        description = "控股公司结构，业务多元化。需关注其核心子公司的市场地位。";
    } else if (name.includes("銀行") || name.includes("ＦＧ")) {
        industry = "Bank";
        rating = "High";
        description = "大型金融集团，拥有庞大的客户基础和资金优势。";
    } else if (name.includes("電力")) {
        industry = "Utility";
        rating = "High";
        description = "区域垄断公用事业，现金流稳定。";
    } else if (name.includes("鉄道") || name.includes("電鉄")) {
        industry = "Railroad";
        rating = "High";
        description = "铁路运输，拥有不可复制的轨道资产和沿线地产。";
    } else if (name.includes("製薬") || name.includes("薬品")) {
        industry = "Pharma";
        rating = "High";
        description = "医药研发，拥有专利壁垒和研发管线。";
    } else if (name.includes("自動車") || name.includes("工業")) {
        industry = "Manufacturing";
        rating = "Medium";
        description = "工业制造，关注其在全球细分市场的份额。";
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
        parts.push(`黄金坑回调(${retPct}%)`);
    } else if (data.retracement < -0.15) {
        parts.push(`超跌反弹预期(${retPct}%)`);
    } else {
        parts.push(`良性调整(${retPct}%)`);
    }

    // Credit logic
    if (data.credit_ratio < 1.0) {
        parts.push(`空头衰竭(倍率${data.credit_ratio.toFixed(2)})`);
    } else if (data.credit_ratio < 2.0) {
        parts.push(`筹码沉淀`);
    }

    // Oscillation logic
    if (data.oscillation < 0.02) {
        parts.push(`极致缩量`);
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
                throw new Error("测试数据未找到，请确保 stock_dataTest.js 已加载");
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
            errorMessage.textContent = "加载测试数据失败: " + err.message;
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
                throw new Error("文件内容为空或格式不正确");
            }

            processData(jsonData);

        } catch (err) {
            console.error(err);
            errorMessage.textContent = "解析文件失败: " + err.message;
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
        if (item.moat.rating === 'Very High' || item.moat.rating === 'High') moatClass = 'moat-high';

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

    const headers = ["代码", "名称", "当前价格", "上升概率", "护城河评级", "行业", "AI逻辑", "护城河描述"];
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
                <label>行业</label>
                <span>${item.moat.industry}</span>
            </div>
            <div class="detail-item">
                <label>护城河评级</label>
                <span class="badge ${item.moat.rating.includes('High') ? 'badge-high' : ''}">${item.moat.rating}</span>
            </div>
            <div class="detail-item">
                <label>上升概率</label>
                <span>${item.prob}%</span>
            </div>
            <div class="detail-item">
                <label>当前价格</label>
                <span>¥${item.price.toLocaleString()}</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>🛡️ 护城河分析</h3>
            <p>${item.moat.description}</p>
        </div>
        
        <div class="detail-section">
            <h3>📊 量化指标</h3>
            <ul>
                <li><strong>最大回撤:</strong> ${(item.raw.retracement * 100).toFixed(2)}%</li>
                <li><strong>信用倍率:</strong> ${item.raw.credit_ratio.toFixed(2)}</li>
                <li><strong>震荡幅度:</strong> ${(item.raw.oscillation * 100).toFixed(2)}%</li>
                <li><strong>前日比率:</strong> ${item.raw.prev_day_ratio.toFixed(2)}%</li>
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
