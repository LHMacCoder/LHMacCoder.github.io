const LANGUAGE_OPTIONS = [
  ["en", "English"],
  ["zh-CN", "简体中文"],
  ["zh-TW", "繁體中文"],
  ["de", "Deutsch"],
  ["pt", "Português"],
  ["fr", "Français"],
  ["es", "Español"],
  ["ar", "العربية"],
  ["it", "Italiano"],
  ["ja", "日本語"],
  ["ko", "한국어"],
  ["tr", "Türkçe"],
  ["ru", "Русский"],
];

const TRANSLATIONS = {
  "zh-CN": {
    meta: {
      homeTitle: "Haomac Labs — 为你的 Mac 打造好用软件",
      homeDescription: "Haomac Labs 为 Mac 创造专注、可靠、精心设计的软件。",
      productTitle: "LaunchNest — Haomac Labs",
      productDescription: "LaunchNest，一款清晰、快速的原生 macOS 应用启动器。",
      privacyTitle: "隐私政策 — Haomac Labs",
    },
    common: {
      homeAria: "Haomac Labs 首页",
      homeBackAria: "返回 Haomac Labs 首页",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      navAria: "主导航",
      products: "产品",
      principles: "理念",
      about: "关于",
      contact: "联系我们",
      footerTagline: "Thoughtful software for your Mac.",
      footerContact: "联系",
      privacy: "隐私",
      language: "语言",
    },
    home: {
      eyebrow: "独立软件工作室 · 为 Mac 而生",
      heroTitle: "让日常工具<br />变得更好用。",
      heroIntro: "我们打造专注、可靠、精心设计的 Mac 应用，让复杂的事情变简单，让你的工作流更流畅。",
      explore: "探索我们的产品",
      meet: "认识 Haomac Labs",
      care: "Designed with care in China",
      scroll: "向下探索",
      productsEyebrow: "我们的产品",
      productsTitle: "一个不断成长的<br />好工具集合。",
      productsIntro: "每款产品都源于真实需求。我们删去不必要的复杂，把时间用在体验、性能与长期维护上。",
      principlesEyebrow: "我们的坚持",
      principlesTitle: "小团队，<br />高标准。",
      principlesIntro: "独立让我们能够保持专注：不追逐臃肿功能，只构建值得长期使用的软件。",
      cards: [
        ["专注，胜过堆砌", "每个功能都必须解决明确问题。做得少一点，但把每一点做好。"],
        ["尊重平台", "遵循 macOS 的习惯与性能标准，让应用自然融入你的电脑。"],
        ["长期用心维护", "软件不是一次性交付。我们持续倾听、改进，并保持可靠。"],
      ],
      aboutEyebrow: "关于 Haomac Labs",
      aboutTitle: "独立思考，<br />认真创造。",
      aboutText: "Haomac Labs 是一个独立开发者品牌，专注于创造简单、漂亮且真正实用的软件。我们相信，优秀的数字工具应当减少干扰，帮助人们把注意力留给重要的事。",
      newsletterEyebrow: "保持联系",
      newsletterTitle: "新品发布时，<br />我们告诉你。",
      emailLabel: "邮箱地址",
      emailPlaceholder: "你的邮箱地址",
      subscribe: "订阅动态",
      formStatus: "感谢关注。订阅服务接入后，我们会第一时间通知你。",
    },
    products: [
      ["LaunchNest", "Mac 应用启动器", "用清晰、快速的网格整理和启动你的所有应用。", "即将发布", "了解产品"],
      ["Next Utility", "正在构建", "又一款专注而贴心的 Mac 工具正在路上。", "开发中", "敬请期待"],
      ["Your Better Workflow", "未来产品", "我们持续探索能够消除重复、带来专注的新想法。", "探索中", "保持关注"],
    ],
    product: {
      back: "← 返回全部产品",
      iconAlt: "LaunchNest 图标",
      eyebrow: "原生 macOS 应用启动器",
      lead: "把所有应用安放在一个清晰、熟悉的空间里。快速找到，立即启动，继续专注。",
      notify: "获取发布通知",
      viewFeatures: "查看功能",
      featuresEyebrow: "核心功能",
      featuresTitle: "启动应用，<br />不打断思路。",
      featuresIntro: "LaunchNest 专注于一件事：让你更快地找到并打开 Mac 上的应用。",
      featureCards: [
        ["快速查找", "键入应用名称即可缩小范围，几秒内到达目标。"],
        ["清晰网格", "用直观的图标网格浏览应用，熟悉且没有多余干扰。"],
        ["原生体验", "为 macOS 打造，轻巧、快速，并自然融入系统。"],
      ],
      galleryEyebrow: "功能一览",
      galleryTitle: "不只是启动，<br />更懂得整理。",
      galleryIntro: "从快速查找到分组整理，每个动作都直接、自然，并且随时可以撤回或重新安排。",
      gallery: [
        ["01 · 快速查找", "搜索 App", "输入关键词，即时过滤应用。无需翻页，也不用离开当前工作流。"],
        ["02 · 自由排列", "拖拽排序 App", "按照自己的使用习惯重新排列应用，让常用工具始终处于顺手的位置。"],
        ["03 · 批量操作", "拖拽多选 App", "一次选中多个应用，减少重复操作，更快完成整理。"],
        ["04 · 智能分组", "拖拽合并 App 分组", "把相关应用拖到一起即可建立分组，让大型应用库依然保持清晰。"],
        ["05 · 个性命名", "修改 App 分组命名", "为每个分组起一个容易识别的名称，建立属于自己的分类方式。"],
        ["06 · 详细了解", "预览 App 信息", "查看应用版本、大小和修改时间，也可以从信息面板直接打开。"],
        ["07 · 随叫随到", "设置打开快捷键", "定义顺手的全局快捷键，在任何场景快速唤起 LaunchNest。"],
      ],
      ctaEyebrow: "即将发布",
      ctaTitle: "准备好让应用<br />井然有序了吗？",
      ctaButton: "联系支持",
    },
    privacy: {
      back: "← 返回 Haomac Labs",
      eyebrow: "隐私政策",
      title: "尊重你的隐私。",
      p1: "Haomac Labs 不会出售你的个人信息。当前网站不会创建账户，也不会在服务器上保存订阅表单中输入的邮箱。",
      p2: "当你通过电子邮件联系我们时，我们只会使用你提供的信息来回复并处理相关支持请求。",
      p3: "随着产品和服务更新，本政策可能相应调整。如有疑问，请联系 <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>。",
      date: "更新日期：2026 年 6 月 5 日",
    },
  },
  en: {
    meta: { homeTitle: "Haomac Labs — Thoughtful software for your Mac", homeDescription: "Haomac Labs creates focused, reliable, thoughtfully designed software for Mac.", productTitle: "LaunchNest — Haomac Labs", productDescription: "LaunchNest is a clear, fast, native macOS app launcher.", privacyTitle: "Privacy Policy — Haomac Labs" },
    common: { homeAria: "Haomac Labs home", homeBackAria: "Back to Haomac Labs home", openMenu: "Open menu", closeMenu: "Close menu", navAria: "Primary navigation", products: "Products", principles: "Principles", about: "About", contact: "Contact us", footerTagline: "Thoughtful software for your Mac.", footerContact: "Contact", privacy: "Privacy", language: "Language" },
    home: { eyebrow: "Independent software studio · Born for Mac", heroTitle: "Making everyday tools<br />feel better.", heroIntro: "We build focused, reliable, carefully designed Mac apps that simplify complex tasks and keep your workflow moving.", explore: "Explore our products", meet: "Meet Haomac Labs", care: "Designed with care in China", scroll: "Explore below", productsEyebrow: "Our products", productsTitle: "A growing set of<br />useful tools.", productsIntro: "Every product starts from a real need. We remove unnecessary complexity and invest in experience, performance, and long-term care.", principlesEyebrow: "What we value", principlesTitle: "Small team,<br />high standards.", principlesIntro: "Independence keeps us focused: we do not chase bloated feature lists, only software worth using for years.", cards: [["Focus over clutter", "Every feature must solve a clear problem. Do a little less, and do each piece well."], ["Respect the platform", "We follow macOS habits and performance expectations so each app feels native to your computer."], ["Care for the long run", "Software is not a one-time delivery. We listen, improve, and keep it dependable."]], aboutEyebrow: "About Haomac Labs", aboutTitle: "Independent thinking,<br />careful craft.", aboutText: "Haomac Labs is an independent developer brand focused on creating simple, beautiful, genuinely useful software. We believe great digital tools should reduce distraction and help people keep attention on what matters.", newsletterEyebrow: "Stay in touch", newsletterTitle: "When new products launch,<br />we will let you know.", emailLabel: "Email address", emailPlaceholder: "Your email address", subscribe: "Subscribe", formStatus: "Thanks for following along. Once subscriptions are connected, we will notify you first." },
    products: [["LaunchNest", "Mac app launcher", "Organize and launch all your apps in a clear, fast grid.", "Coming soon", "Learn more"], ["Next Utility", "In progress", "Another focused, considerate Mac tool is on the way.", "Building", "Stay tuned"], ["Your Better Workflow", "Future products", "We keep exploring new ideas that reduce repetition and bring focus.", "Exploring", "Follow along"]],
    product: { back: "← Back to all products", iconAlt: "LaunchNest icon", eyebrow: "Native macOS app launcher", lead: "Put every app in one clear, familiar space. Find it fast, launch it instantly, and stay focused.", notify: "Get launch updates", viewFeatures: "View features", featuresEyebrow: "Core features", featuresTitle: "Launch apps<br />without losing your train of thought.", featuresIntro: "LaunchNest focuses on one thing: helping you find and open Mac apps faster.", featureCards: [["Fast search", "Type an app name to narrow the grid and reach your target in seconds."], ["Clear grid", "Browse apps in a familiar icon grid with no extra noise."], ["Native feel", "Built for macOS: lightweight, quick, and naturally integrated."]], galleryEyebrow: "Feature tour", galleryTitle: "More than launch.<br />Made to organize.", galleryIntro: "From fast search to groups, every action is direct, natural, and easy to undo or rearrange.", gallery: [["01 · Fast search", "Search apps", "Enter a keyword and filter apps instantly, without paging around or leaving your flow."], ["02 · Free arrangement", "Drag to reorder apps", "Arrange apps around your habits so favorite tools stay within reach."], ["03 · Batch actions", "Drag-select multiple apps", "Select several apps at once and finish organizing with fewer repeated actions."], ["04 · Smart grouping", "Drag apps into groups", "Drop related apps together to create groups and keep large libraries clear."], ["05 · Personal naming", "Rename app groups", "Give each group a recognizable name and build your own categories."], ["06 · More detail", "Preview app info", "Check version, size, and modified time, or open directly from the info panel."], ["07 · Always ready", "Set an open shortcut", "Define a comfortable global shortcut and summon LaunchNest from anywhere."]], ctaEyebrow: "Coming soon", ctaTitle: "Ready to bring order<br />to your apps?", ctaButton: "Contact support" },
    privacy: { back: "← Back to Haomac Labs", eyebrow: "Privacy policy", title: "We respect your privacy.", p1: "Haomac Labs does not sell your personal information. This website currently does not create accounts or store email addresses entered in the subscription form on a server.", p2: "When you contact us by email, we only use the information you provide to reply and handle the related support request.", p3: "As products and services change, this policy may be updated. Questions? Contact <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>.", date: "Updated: June 5, 2026" },
  },
};

const LANGUAGE_ALIASES = { zh: "zh-CN", "zh-Hans": "zh-CN", "zh-Hant": "zh-TW", "pt-BR": "pt", "pt-PT": "pt" };

function cloneFrom(base, overrides) {
  return { ...base, ...overrides, meta: { ...base.meta, ...overrides.meta }, common: { ...base.common, ...overrides.common }, home: { ...base.home, ...overrides.home }, product: { ...base.product, ...overrides.product }, privacy: { ...base.privacy, ...overrides.privacy } };
}

TRANSLATIONS["zh-TW"] = cloneFrom(TRANSLATIONS["zh-CN"], {
  meta: { homeTitle: "Haomac Labs — 為你的 Mac 打造好用軟體", homeDescription: "Haomac Labs 為 Mac 創造專注、可靠、精心設計的軟體。", productDescription: "LaunchNest，一款清晰、快速的原生 macOS 應用啟動器。", privacyTitle: "隱私權政策 — Haomac Labs" },
  common: { homeAria: "Haomac Labs 首頁", homeBackAria: "返回 Haomac Labs 首頁", openMenu: "開啟選單", closeMenu: "關閉選單", navAria: "主導覽", products: "產品", principles: "理念", about: "關於", contact: "聯絡我們", footerContact: "聯絡", privacy: "隱私", language: "語言" },
  home: { eyebrow: "獨立軟體工作室 · 為 Mac 而生", heroTitle: "讓日常工具<br />變得更好用。", heroIntro: "我們打造專注、可靠、精心設計的 Mac 應用，讓複雜的事情變簡單，讓你的工作流程更流暢。", scroll: "向下探索", productsEyebrow: "我們的產品", productsTitle: "一個不斷成長的<br />好工具集合。", productsIntro: "每款產品都源於真實需求。我們刪去不必要的複雜，把時間用在體驗、效能與長期維護上。", principlesEyebrow: "我們的堅持", principlesTitle: "小團隊，<br />高標準。", principlesIntro: "獨立讓我們能夠保持專注：不追逐臃腫功能，只構建值得長期使用的軟體。", cards: [["專注，勝過堆砌", "每個功能都必須解決明確問題。做得少一點，但把每一點做好。"], ["尊重平台", "遵循 macOS 的習慣與效能標準，讓應用自然融入你的電腦。"], ["長期用心維護", "軟體不是一次性交付。我們持續傾聽、改進，並保持可靠。"]], aboutEyebrow: "關於 Haomac Labs", aboutTitle: "獨立思考，<br />認真創造。", aboutText: "Haomac Labs 是一個獨立開發者品牌，專注於創造簡單、漂亮且真正實用的軟體。我們相信，優秀的數位工具應當減少干擾，幫助人們把注意力留給重要的事。", newsletterEyebrow: "保持聯繫", newsletterTitle: "新品發佈時，<br />我們告訴你。", emailLabel: "電子郵件地址", emailPlaceholder: "你的電子郵件地址", subscribe: "訂閱動態", formStatus: "感謝關注。訂閱服務接入後，我們會第一時間通知你。" },
  products: [["LaunchNest", "Mac 應用啟動器", "用清晰、快速的網格整理和啟動你的所有應用。", "即將發佈", "了解產品"], ["Next Utility", "正在構建", "又一款專注而貼心的 Mac 工具正在路上。", "開發中", "敬請期待"], ["Your Better Workflow", "未來產品", "我們持續探索能夠消除重複、帶來專注的新想法。", "探索中", "保持關注"]],
  product: { back: "← 返回全部產品", iconAlt: "LaunchNest 圖示", eyebrow: "原生 macOS 應用啟動器", lead: "把所有應用安放在一個清晰、熟悉的空間裡。快速找到，立即啟動，繼續專注。", notify: "取得發佈通知", viewFeatures: "查看功能", featuresEyebrow: "核心功能", featuresTitle: "啟動應用，<br />不打斷思路。", featuresIntro: "LaunchNest 專注於一件事：讓你更快地找到並開啟 Mac 上的應用。", featureCards: [["快速查找", "鍵入應用名稱即可縮小範圍，幾秒內到達目標。"], ["清晰網格", "用直觀的圖示網格瀏覽應用，熟悉且沒有多餘干擾。"], ["原生體驗", "為 macOS 打造，輕巧、快速，並自然融入系統。"]], galleryEyebrow: "功能一覽", galleryTitle: "不只是啟動，<br />更懂得整理。", galleryIntro: "從快速查找到分組整理，每個動作都直接、自然，並且隨時可以撤回或重新安排。", gallery: [["01 · 快速查找", "搜尋 App", "輸入關鍵字，即時過濾應用。無需翻頁，也不用離開目前工作流程。"], ["02 · 自由排列", "拖曳排序 App", "按照自己的使用習慣重新排列應用，讓常用工具始終處於順手的位置。"], ["03 · 批次操作", "拖曳多選 App", "一次選中多個應用，減少重複操作，更快完成整理。"], ["04 · 智慧分組", "拖曳合併 App 分組", "把相關應用拖到一起即可建立分組，讓大型應用庫依然保持清晰。"], ["05 · 個性命名", "修改 App 分組命名", "為每個分組起一個容易識別的名稱，建立屬於自己的分類方式。"], ["06 · 詳細了解", "預覽 App 資訊", "查看應用版本、大小和修改時間，也可以從資訊面板直接開啟。"], ["07 · 隨叫隨到", "設定開啟快捷鍵", "定義順手的全域快捷鍵，在任何場景快速喚起 LaunchNest。"]], ctaEyebrow: "即將發佈", ctaTitle: "準備好讓應用<br />井然有序了嗎？", ctaButton: "聯絡支援" },
  privacy: { back: "← 返回 Haomac Labs", eyebrow: "隱私權政策", title: "尊重你的隱私。", p1: "Haomac Labs 不會出售你的個人資訊。當前網站不會建立帳戶，也不會在伺服器上保存訂閱表單中輸入的電子郵件。", p2: "當你透過電子郵件聯絡我們時，我們只會使用你提供的資訊來回覆並處理相關支援請求。", p3: "隨著產品和服務更新，本政策可能相應調整。如有疑問，請聯絡 <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>。", date: "更新日期：2026 年 6 月 5 日" },
});

const LOCALIZED = {
  de: ["Deutsch", "Unabhängiges Softwarestudio · Für den Mac gemacht", "Alltagswerkzeuge<br />fühlen sich besser an.", "Wir entwickeln fokussierte, zuverlässige und sorgfältig gestaltete Mac-Apps, die Komplexität reduzieren und deinen Workflow in Bewegung halten.", "Produkte entdecken", "Haomac Labs kennenlernen", "Unsere Produkte", "Ein wachsendes Set<br />nützlicher Werkzeuge.", "Jedes Produkt beginnt mit einem echten Bedarf. Wir entfernen unnötige Komplexität und investieren in Erlebnis, Leistung und langfristige Pflege.", "Unsere Haltung", "Kleines Team,<br />hohe Standards.", "Unabhängigkeit hält uns fokussiert: keine aufgeblähten Funktionen, sondern Software, die man lange gern nutzt.", "Kontakt", "Datenschutz"],
  pt: ["Português", "Estúdio independente de software · Nascido para Mac", "Ferramentas do dia a dia<br />mais agradáveis.", "Criamos apps para Mac focados, confiáveis e bem desenhados, que simplificam tarefas complexas e mantêm seu fluxo de trabalho fluindo.", "Explorar produtos", "Conheça a Haomac Labs", "Nossos produtos", "Um conjunto crescente<br />de ferramentas úteis.", "Cada produto nasce de uma necessidade real. Removemos complexidade desnecessária e investimos em experiência, desempenho e cuidado contínuo.", "O que valorizamos", "Equipe pequena,<br />padrões altos.", "A independência nos mantém focados: nada de recursos inchados, só software que vale usar por muito tempo.", "Contato", "Privacidade"],
  fr: ["Français", "Studio logiciel indépendant · Pensé pour Mac", "Des outils quotidiens<br />plus agréables.", "Nous créons des apps Mac ciblées, fiables et soigneusement conçues pour simplifier les tâches complexes et fluidifier votre travail.", "Découvrir nos produits", "Découvrir Haomac Labs", "Nos produits", "Une collection croissante<br />d’outils utiles.", "Chaque produit part d’un besoin réel. Nous retirons la complexité inutile et investissons dans l’expérience, la performance et le suivi durable.", "Nos principes", "Petite équipe,<br />exigence élevée.", "L’indépendance nous garde concentrés : pas de fonctionnalités gonflées, seulement des logiciels faits pour durer.", "Contact", "Confidentialité"],
  es: ["Español", "Estudio de software independiente · Nacido para Mac", "Herramientas diarias<br />que se sienten mejor.", "Creamos apps para Mac enfocadas, fiables y cuidadosamente diseñadas que simplifican lo complejo y mantienen tu flujo de trabajo en marcha.", "Explorar productos", "Conoce Haomac Labs", "Nuestros productos", "Un conjunto creciente<br />de herramientas útiles.", "Cada producto nace de una necesidad real. Quitamos complejidad innecesaria e invertimos en experiencia, rendimiento y cuidado a largo plazo.", "Lo que cuidamos", "Equipo pequeño,<br />estándares altos.", "La independencia nos mantiene enfocados: sin funciones infladas, solo software que vale la pena usar durante años.", "Contacto", "Privacidad"],
  ar: ["العربية", "استوديو برمجيات مستقل · صُمم للماك", "أدوات يومية<br />أكثر سلاسة.", "نطوّر تطبيقات ماك مركزة وموثوقة ومصممة بعناية لتبسيط المهام المعقدة والحفاظ على انسياب عملك.", "استكشف منتجاتنا", "تعرّف على Haomac Labs", "منتجاتنا", "مجموعة متنامية<br />من الأدوات المفيدة.", "يبدأ كل منتج من حاجة حقيقية. نحذف التعقيد غير الضروري ونستثمر في التجربة والأداء والرعاية طويلة الأمد.", "ما نؤمن به", "فريق صغير،<br />معايير عالية.", "الاستقلال يبقينا مركزين: لا نطارد مزايا متضخمة، بل نبني برمجيات تستحق الاستخدام لسنوات.", "تواصل معنا", "الخصوصية"],
  it: ["Italiano", "Studio software indipendente · Nato per Mac", "Strumenti quotidiani<br />più piacevoli.", "Creiamo app Mac focalizzate, affidabili e curate, che semplificano le attività complesse e rendono più fluido il lavoro.", "Esplora i prodotti", "Scopri Haomac Labs", "I nostri prodotti", "Una raccolta crescente<br />di strumenti utili.", "Ogni prodotto nasce da un bisogno reale. Eliminiamo la complessità inutile e investiamo in esperienza, prestazioni e cura nel tempo.", "I nostri principi", "Piccolo team,<br />standard elevati.", "L’indipendenza ci mantiene concentrati: niente funzioni gonfie, solo software che vale la pena usare a lungo.", "Contatto", "Privacy"],
  ja: ["日本語", "独立系ソフトウェアスタジオ · Mac のために", "毎日のツールを<br />もっと心地よく。", "私たちは、複雑な作業をシンプルにし、ワークフローをなめらかに保つ、集中できて信頼性の高い Mac アプリを丁寧に作っています。", "製品を見る", "Haomac Labs について", "製品", "成長し続ける<br />便利なツール群。", "すべての製品は本当のニーズから始まります。不要な複雑さを取り除き、体験、性能、長期的な改善に時間を使います。", "大切にしていること", "小さなチーム、<br />高い基準。", "独立しているからこそ集中できます。機能を増やしすぎず、長く使う価値のあるソフトウェアだけを作ります。", "お問い合わせ", "プライバシー"],
  ko: ["한국어", "독립 소프트웨어 스튜디오 · Mac을 위해", "매일 쓰는 도구를<br />더 편하게.", "복잡한 일을 단순하게 만들고 작업 흐름을 부드럽게 이어 주는 집중력 있고 신뢰할 수 있는 Mac 앱을 세심하게 만듭니다.", "제품 살펴보기", "Haomac Labs 알아보기", "제품", "계속 성장하는<br />유용한 도구 모음.", "모든 제품은 실제 필요에서 출발합니다. 불필요한 복잡함을 덜어내고 경험, 성능, 장기적인 관리에 시간을 씁니다.", "우리의 원칙", "작은 팀,<br />높은 기준.", "독립성은 우리를 집중하게 합니다. 부풀린 기능보다 오래 쓸 가치가 있는 소프트웨어를 만듭니다.", "문의하기", "개인정보"],
  tr: ["Türkçe", "Bağımsız yazılım stüdyosu · Mac için doğdu", "Günlük araçlar<br />daha iyi hissettirsin.", "Karmaşık işleri sadeleştiren ve iş akışını akıcı tutan odaklı, güvenilir, özenle tasarlanmış Mac uygulamaları geliştiriyoruz.", "Ürünleri keşfet", "Haomac Labs ile tanış", "Ürünlerimiz", "Büyüyen bir<br />yararlı araç seti.", "Her ürün gerçek bir ihtiyaçtan doğar. Gereksiz karmaşıklığı çıkarır; deneyime, performansa ve uzun vadeli bakıma yatırım yaparız.", "Değer verdiklerimiz", "Küçük ekip,<br />yüksek standart.", "Bağımsızlık bizi odakta tutar: şişkin özellikler değil, yıllarca kullanılmaya değer yazılımlar.", "İletişim", "Gizlilik"],
  ru: ["Русский", "Независимая студия ПО · Для Mac", "Повседневные инструменты<br />становятся удобнее.", "Мы создаём сфокусированные, надёжные и тщательно продуманные приложения для Mac, которые упрощают сложные задачи и поддерживают ваш рабочий поток.", "Посмотреть продукты", "Познакомиться с Haomac Labs", "Наши продукты", "Растущий набор<br />полезных инструментов.", "Каждый продукт начинается с реальной потребности. Мы убираем лишнюю сложность и вкладываемся в опыт, производительность и долгую поддержку.", "Наши принципы", "Маленькая команда,<br />высокие стандарты.", "Независимость помогает нам держать фокус: не раздутые функции, а софт, которым хочется пользоваться годами.", "Связаться", "Конфиденциальность"],
};

const LOCALIZED_COMMON = {
  de: { products: "Produkte", principles: "Prinzipien", about: "Über uns", contact: "Kontakt", footerContact: "Kontakt", privacy: "Datenschutz", language: "Deutsch", openMenu: "Menü öffnen", navAria: "Hauptnavigation" },
  pt: { products: "Produtos", principles: "Princípios", about: "Sobre", contact: "Contato", footerContact: "Contato", privacy: "Privacidade", language: "Português", openMenu: "Abrir menu", navAria: "Navegação principal" },
  fr: { products: "Produits", principles: "Principes", about: "À propos", contact: "Contact", footerContact: "Contact", privacy: "Confidentialité", language: "Français", openMenu: "Ouvrir le menu", navAria: "Navigation principale" },
  es: { products: "Productos", principles: "Principios", about: "Acerca de", contact: "Contacto", footerContact: "Contacto", privacy: "Privacidad", language: "Español", openMenu: "Abrir menú", navAria: "Navegación principal" },
  ar: { products: "المنتجات", principles: "المبادئ", about: "حولنا", contact: "تواصل معنا", footerContact: "تواصل", privacy: "الخصوصية", language: "العربية", openMenu: "فتح القائمة", navAria: "التنقل الرئيسي" },
  it: { products: "Prodotti", principles: "Principi", about: "Chi siamo", contact: "Contatto", footerContact: "Contatto", privacy: "Privacy", language: "Italiano", openMenu: "Apri menu", navAria: "Navigazione principale" },
  ja: { products: "製品", principles: "理念", about: "概要", contact: "お問い合わせ", footerContact: "お問い合わせ", privacy: "プライバシー", language: "日本語", openMenu: "メニューを開く", navAria: "メインナビゲーション" },
  ko: { products: "제품", principles: "원칙", about: "소개", contact: "문의하기", footerContact: "문의", privacy: "개인정보", language: "한국어", openMenu: "메뉴 열기", navAria: "기본 탐색" },
  tr: { products: "Ürünler", principles: "İlkeler", about: "Hakkında", contact: "İletişim", footerContact: "İletişim", privacy: "Gizlilik", language: "Türkçe", openMenu: "Menüyü aç", navAria: "Ana gezinme" },
  ru: { products: "Продукты", principles: "Принципы", about: "О нас", contact: "Связаться", footerContact: "Связаться", privacy: "Конфиденциальность", language: "Русский", openMenu: "Открыть меню", navAria: "Основная навигация" },
};

const LOCALIZED_DETAILS = {
  de: {
    meta: { homeTitle: "Haomac Labs — Durchdachte Software für deinen Mac", homeDescription: "Haomac Labs entwickelt fokussierte, zuverlässige und sorgfältig gestaltete Software für Mac.", productDescription: "LaunchNest ist ein klarer, schneller nativer App-Launcher für macOS.", privacyTitle: "Datenschutz — Haomac Labs" },
    home: { cards: [["Fokus statt Ballast", "Jede Funktion muss ein klares Problem lösen. Lieber weniger tun und jedes Detail gut machen."], ["Die Plattform respektieren", "Wir folgen macOS-Gewohnheiten und Leistungsstandards, damit sich jede App natürlich anfühlt."], ["Langfristig pflegen", "Software ist keine einmalige Lieferung. Wir hören zu, verbessern und halten sie verlässlich."]], aboutEyebrow: "Über Haomac Labs", aboutTitle: "Unabhängig denken,<br />sorgfältig gestalten.", aboutText: "Haomac Labs ist eine unabhängige Entwickler-Marke für einfache, schöne und wirklich nützliche Software. Gute digitale Werkzeuge sollen Ablenkung reduzieren und den Blick auf das Wichtige richten.", newsletterEyebrow: "In Kontakt bleiben", newsletterTitle: "Wenn Neues erscheint,<br />melden wir uns.", emailLabel: "E-Mail-Adresse", emailPlaceholder: "Deine E-Mail-Adresse", subscribe: "Abonnieren", formStatus: "Danke fürs Interesse. Sobald der Newsletter verbunden ist, informieren wir dich zuerst." },
    products: [["LaunchNest", "Mac-App-Launcher", "Organisiere und starte alle Apps in einem klaren, schnellen Raster.", "Demnächst", "Mehr erfahren"], ["Next Utility", "In Arbeit", "Ein weiteres fokussiertes Mac-Werkzeug ist unterwegs.", "Entwicklung", "Dranbleiben"], ["Your Better Workflow", "Künftige Produkte", "Wir erkunden weiter Ideen, die Wiederholung reduzieren und Fokus bringen.", "Erkundung", "Folgen"]],
  },
  pt: {
    meta: { homeTitle: "Haomac Labs — Software bem pensada para seu Mac", homeDescription: "Haomac Labs cria software para Mac focado, confiável e cuidadosamente desenhado.", productDescription: "LaunchNest é um lançador de apps nativo para macOS, claro e rápido.", privacyTitle: "Política de privacidade — Haomac Labs" },
    home: { cards: [["Foco em vez de excesso", "Cada recurso precisa resolver um problema claro. Fazemos menos, mas fazemos bem."], ["Respeito à plataforma", "Seguimos os hábitos e padrões de desempenho do macOS para que o app pareça natural."], ["Cuidado de longo prazo", "Software não é uma entrega única. Ouvimos, melhoramos e mantemos tudo confiável."]], aboutEyebrow: "Sobre a Haomac Labs", aboutTitle: "Pensamento independente,<br />criação cuidadosa.", aboutText: "Haomac Labs é uma marca independente focada em criar software simples, bonito e realmente útil. Acreditamos que boas ferramentas digitais devem reduzir distrações e manter a atenção no que importa.", newsletterEyebrow: "Fique por perto", newsletterTitle: "Quando lançarmos novidades,<br />avisaremos você.", emailLabel: "Endereço de e-mail", emailPlaceholder: "Seu e-mail", subscribe: "Assinar", formStatus: "Obrigado por acompanhar. Assim que a assinatura estiver ativa, avisaremos você primeiro." },
    products: [["LaunchNest", "Lançador de apps para Mac", "Organize e abra todos os apps em uma grade clara e rápida.", "Em breve", "Saiba mais"], ["Next Utility", "Em construção", "Outra ferramenta focada para Mac está a caminho.", "Construindo", "Aguarde"], ["Your Better Workflow", "Produtos futuros", "Continuamos explorando ideias que reduzem repetição e trazem foco.", "Explorando", "Acompanhar"]],
  },
  fr: {
    meta: { homeTitle: "Haomac Labs — Des logiciels soignés pour votre Mac", homeDescription: "Haomac Labs crée des logiciels Mac ciblés, fiables et soigneusement conçus.", productDescription: "LaunchNest est un lanceur d’apps macOS natif, clair et rapide.", privacyTitle: "Politique de confidentialité — Haomac Labs" },
    home: { cards: [["Le focus plutôt que l’encombrement", "Chaque fonction doit résoudre un problème clair. Faire moins, mais mieux."], ["Respecter la plateforme", "Nous suivons les usages et exigences de performance de macOS pour une intégration naturelle."], ["Soigner dans la durée", "Un logiciel n’est pas livré une fois pour toutes. Nous écoutons, améliorons et gardons le cap."]], aboutEyebrow: "À propos de Haomac Labs", aboutTitle: "Pensée indépendante,<br />création attentive.", aboutText: "Haomac Labs est une marque indépendante dédiée aux logiciels simples, beaux et vraiment utiles. Nous pensons que les bons outils numériques doivent réduire les distractions et préserver l’attention.", newsletterEyebrow: "Rester en contact", newsletterTitle: "À chaque lancement,<br />nous vous prévenons.", emailLabel: "Adresse e-mail", emailPlaceholder: "Votre adresse e-mail", subscribe: "S’abonner", formStatus: "Merci de nous suivre. Dès que l’abonnement sera connecté, vous serez prévenu en premier." },
    products: [["LaunchNest", "Lanceur d’apps Mac", "Organisez et lancez toutes vos apps dans une grille claire et rapide.", "Bientôt", "En savoir plus"], ["Next Utility", "En construction", "Un autre outil Mac ciblé et attentionné arrive.", "En cours", "À suivre"], ["Your Better Workflow", "Produits futurs", "Nous explorons des idées qui réduisent la répétition et favorisent la concentration.", "Exploration", "Suivre"]],
  },
  es: {
    meta: { homeTitle: "Haomac Labs — Software bien pensado para tu Mac", homeDescription: "Haomac Labs crea software para Mac enfocado, fiable y cuidadosamente diseñado.", productDescription: "LaunchNest es un lanzador de apps nativo para macOS, claro y rápido.", privacyTitle: "Política de privacidad — Haomac Labs" },
    home: { cards: [["Foco antes que ruido", "Cada función debe resolver un problema claro. Hacemos menos, pero cuidamos cada parte."], ["Respetar la plataforma", "Seguimos los hábitos y estándares de macOS para que cada app se sienta natural."], ["Cuidado a largo plazo", "El software no se entrega una sola vez. Escuchamos, mejoramos y mantenemos la fiabilidad."]], aboutEyebrow: "Acerca de Haomac Labs", aboutTitle: "Pensamiento independiente,<br />creación cuidada.", aboutText: "Haomac Labs es una marca independiente centrada en crear software simple, bonito y realmente útil. Creemos que las buenas herramientas digitales reducen distracciones y ayudan a mantener la atención en lo importante.", newsletterEyebrow: "Mantente al tanto", newsletterTitle: "Cuando lancemos novedades,<br />te avisaremos.", emailLabel: "Correo electrónico", emailPlaceholder: "Tu correo electrónico", subscribe: "Suscribirse", formStatus: "Gracias por seguirnos. Cuando conectemos las suscripciones, te avisaremos primero." },
    products: [["LaunchNest", "Lanzador de apps para Mac", "Organiza y abre todas tus apps en una cuadrícula clara y rápida.", "Próximamente", "Más información"], ["Next Utility", "En desarrollo", "Otra herramienta enfocada para Mac está en camino.", "Construyendo", "Mantente atento"], ["Your Better Workflow", "Productos futuros", "Seguimos explorando ideas que reducen repetición y aportan foco.", "Explorando", "Seguir"]],
  },
  ar: {
    meta: { homeTitle: "Haomac Labs — برمجيات مدروسة للماك", homeDescription: "تطوّر Haomac Labs برمجيات ماك مركزة وموثوقة ومصممة بعناية.", productDescription: "LaunchNest مشغّل تطبيقات macOS أصلي وواضح وسريع.", privacyTitle: "سياسة الخصوصية — Haomac Labs" },
    home: { cards: [["التركيز قبل الازدحام", "كل ميزة يجب أن تحل مشكلة واضحة. نفعل أقل، لكن بعناية أكبر."], ["احترام المنصة", "نتبع عادات macOS ومعايير الأداء ليبدو كل تطبيق طبيعياً على جهازك."], ["رعاية طويلة الأمد", "البرمجيات ليست تسليماً لمرة واحدة. نستمع ونحسّن ونحافظ على الاعتمادية."]], aboutEyebrow: "حول Haomac Labs", aboutTitle: "تفكير مستقل،<br />وصناعة متقنة.", aboutText: "Haomac Labs علامة تطوير مستقلة تركز على إنشاء برمجيات بسيطة وجميلة ومفيدة فعلاً. نؤمن أن الأدوات الرقمية الجيدة تقلل التشتيت وتساعد الناس على التركيز على ما يهم.", newsletterEyebrow: "ابقَ على تواصل", newsletterTitle: "عند إطلاق منتجات جديدة،<br />سنخبرك.", emailLabel: "البريد الإلكتروني", emailPlaceholder: "بريدك الإلكتروني", subscribe: "اشترك", formStatus: "شكراً لمتابعتك. عند تفعيل الاشتراكات سنخبرك أولاً." },
    products: [["LaunchNest", "مشغّل تطبيقات ماك", "نظّم وافتح كل تطبيقاتك في شبكة واضحة وسريعة.", "قريباً", "اعرف المزيد"], ["Next Utility", "قيد البناء", "أداة ماك أخرى مركزة ومهتمة بالتفاصيل في الطريق.", "نبنيها", "ترقّب"], ["Your Better Workflow", "منتجات مستقبلية", "نواصل استكشاف أفكار تقلل التكرار وتزيد التركيز.", "استكشاف", "تابعنا"]],
  },
  it: {
    meta: { homeTitle: "Haomac Labs — Software curato per il tuo Mac", homeDescription: "Haomac Labs crea software Mac focalizzato, affidabile e progettato con cura.", productDescription: "LaunchNest è un launcher di app macOS nativo, chiaro e veloce.", privacyTitle: "Informativa sulla privacy — Haomac Labs" },
    home: { cards: [["Focus, non sovraccarico", "Ogni funzione deve risolvere un problema chiaro. Facciamo meno, ma meglio."], ["Rispetto per la piattaforma", "Seguiamo le abitudini e gli standard di macOS perché ogni app sembri naturale."], ["Cura nel tempo", "Il software non è una consegna unica. Ascoltiamo, miglioriamo e manteniamo affidabilità."]], aboutEyebrow: "Informazioni su Haomac Labs", aboutTitle: "Pensiero indipendente,<br />cura artigianale.", aboutText: "Haomac Labs è un marchio indipendente dedicato a software semplice, bello e davvero utile. Crediamo che gli strumenti digitali migliori riducano le distrazioni e aiutino a concentrarsi su ciò che conta.", newsletterEyebrow: "Restiamo in contatto", newsletterTitle: "Quando escono novità,<br />te lo diremo.", emailLabel: "Indirizzo email", emailPlaceholder: "La tua email", subscribe: "Iscriviti", formStatus: "Grazie per seguirci. Quando le iscrizioni saranno attive, ti avviseremo per primo." },
    products: [["LaunchNest", "Launcher app per Mac", "Organizza e avvia tutte le app in una griglia chiara e veloce.", "In arrivo", "Scopri di più"], ["Next Utility", "In sviluppo", "Un altro strumento Mac mirato e curato è in arrivo.", "Costruzione", "Resta aggiornato"], ["Your Better Workflow", "Prodotti futuri", "Continuiamo a esplorare idee che riducono ripetizioni e portano focus.", "Esplorazione", "Segui"]],
  },
  ja: {
    meta: { homeTitle: "Haomac Labs — Mac のための丁寧なソフトウェア", homeDescription: "Haomac Labs は、集中できて信頼性が高く、丁寧に設計された Mac ソフトウェアを作ります。", productDescription: "LaunchNest は、わかりやすく高速なネイティブ macOS アプリランチャーです。", privacyTitle: "プライバシーポリシー — Haomac Labs" },
    home: { cards: [["詰め込みより集中", "すべての機能は明確な問題を解決するためにあります。少なく作り、一つずつ丁寧に仕上げます。"], ["プラットフォームを尊重", "macOS の作法と性能基準に沿い、アプリが自然に馴染むようにします。"], ["長く使えるように手入れ", "ソフトウェアは一度きりの納品ではありません。耳を傾け、改善し、信頼性を保ちます。"]], aboutEyebrow: "Haomac Labs について", aboutTitle: "独立した思考と、<br />丁寧なものづくり。", aboutText: "Haomac Labs は、シンプルで美しく、本当に役立つソフトウェアを作る独立開発ブランドです。優れたデジタルツールは気を散らす要素を減らし、大切なことへ注意を戻してくれるべきだと考えています。", newsletterEyebrow: "最新情報を受け取る", newsletterTitle: "新しい製品が出たら、<br />お知らせします。", emailLabel: "メールアドレス", emailPlaceholder: "メールアドレス", subscribe: "登録する", formStatus: "ありがとうございます。購読機能がつながり次第、最初にお知らせします。" },
    products: [["LaunchNest", "Mac アプリランチャー", "すべてのアプリを、見やすく高速なグリッドで整理して起動できます。", "近日公開", "詳しく見る"], ["Next Utility", "開発中", "集中を助ける次の Mac ツールを準備しています。", "開発中", "お楽しみに"], ["Your Better Workflow", "今後の製品", "繰り返しを減らし、集中を生むアイデアを探り続けています。", "探索中", "フォローする"]],
  },
  ko: {
    meta: { homeTitle: "Haomac Labs — Mac을 위한 세심한 소프트웨어", homeDescription: "Haomac Labs는 집중력 있고 신뢰할 수 있으며 세심하게 설계된 Mac 소프트웨어를 만듭니다.", productDescription: "LaunchNest는 명확하고 빠른 네이티브 macOS 앱 런처입니다.", privacyTitle: "개인정보 처리방침 — Haomac Labs" },
    home: { cards: [["쌓기보다 집중", "모든 기능은 분명한 문제를 해결해야 합니다. 덜 만들고, 하나하나 더 잘 만듭니다."], ["플랫폼 존중", "macOS의 사용 방식과 성능 기준을 따라 앱이 자연스럽게 어울리도록 합니다."], ["오래 쓰도록 관리", "소프트웨어는 한 번의 납품이 아닙니다. 듣고, 개선하고, 신뢰성을 지킵니다."]], aboutEyebrow: "Haomac Labs 소개", aboutTitle: "독립적인 생각,<br />세심한 제작.", aboutText: "Haomac Labs는 단순하고 아름답고 실제로 유용한 소프트웨어를 만드는 독립 개발 브랜드입니다. 좋은 디지털 도구는 방해를 줄이고 중요한 일에 집중하도록 도와야 한다고 믿습니다.", newsletterEyebrow: "소식 받기", newsletterTitle: "새 제품이 출시되면,<br />알려드릴게요.", emailLabel: "이메일 주소", emailPlaceholder: "이메일 주소", subscribe: "구독하기", formStatus: "관심 가져 주셔서 감사합니다. 구독 기능이 연결되면 가장 먼저 알려드릴게요." },
    products: [["LaunchNest", "Mac 앱 런처", "명확하고 빠른 그리드에서 모든 앱을 정리하고 실행하세요.", "출시 예정", "자세히 보기"], ["Next Utility", "제작 중", "집중을 돕는 또 하나의 Mac 도구가 준비 중입니다.", "개발 중", "기대해 주세요"], ["Your Better Workflow", "향후 제품", "반복을 줄이고 집중을 만드는 아이디어를 계속 탐색합니다.", "탐색 중", "팔로우"]],
  },
  tr: {
    meta: { homeTitle: "Haomac Labs — Mac’iniz için özenli yazılımlar", homeDescription: "Haomac Labs, Mac için odaklı, güvenilir ve özenle tasarlanmış yazılımlar üretir.", productDescription: "LaunchNest açık, hızlı ve yerel bir macOS uygulama başlatıcısıdır.", privacyTitle: "Gizlilik politikası — Haomac Labs" },
    home: { cards: [["Kalabalık yerine odak", "Her özellik net bir sorunu çözmeli. Daha az yaparız, ama her parçayı iyi yaparız."], ["Platforma saygı", "Her uygulama doğal hissettirsin diye macOS alışkanlıklarını ve performans beklentilerini izleriz."], ["Uzun vadeli bakım", "Yazılım tek seferlik teslim değildir. Dinler, geliştirir ve güvenilir tutarız."]], aboutEyebrow: "Haomac Labs hakkında", aboutTitle: "Bağımsız düşünce,<br />özenli üretim.", aboutText: "Haomac Labs basit, güzel ve gerçekten kullanışlı yazılımlar üretmeye odaklanan bağımsız bir geliştirici markasıdır. İyi dijital araçların dikkat dağınıklığını azaltması ve önemli olana odaklanmayı kolaylaştırması gerektiğine inanıyoruz.", newsletterEyebrow: "İletişimde kal", newsletterTitle: "Yeni ürünler çıkınca,<br />haber vereceğiz.", emailLabel: "E-posta adresi", emailPlaceholder: "E-posta adresiniz", subscribe: "Abone ol", formStatus: "Takip ettiğiniz için teşekkürler. Abonelik bağlandığında ilk size haber vereceğiz." },
    products: [["LaunchNest", "Mac uygulama başlatıcı", "Tüm uygulamalarınızı açık ve hızlı bir ızgarada düzenleyip başlatın.", "Yakında", "Daha fazla bilgi"], ["Next Utility", "Yapımda", "Odaklı ve özenli bir Mac aracı daha yolda.", "Geliştiriliyor", "Takipte kal"], ["Your Better Workflow", "Gelecek ürünler", "Tekrarı azaltan ve odak getiren yeni fikirleri keşfetmeyi sürdürüyoruz.", "Keşif", "Takip et"]],
  },
  ru: {
    meta: { homeTitle: "Haomac Labs — Продуманное ПО для вашего Mac", homeDescription: "Haomac Labs создаёт сфокусированное, надёжное и тщательно спроектированное ПО для Mac.", productDescription: "LaunchNest — понятный, быстрый и нативный лаунчер приложений для macOS.", privacyTitle: "Политика конфиденциальности — Haomac Labs" },
    home: { cards: [["Фокус вместо шума", "Каждая функция должна решать понятную задачу. Мы делаем меньше, но лучше."], ["Уважать платформу", "Мы следуем привычкам macOS и стандартам производительности, чтобы приложения ощущались нативно."], ["Забота надолго", "Софт не заканчивается первой поставкой. Мы слушаем, улучшаем и сохраняем надёжность."]], aboutEyebrow: "О Haomac Labs", aboutTitle: "Независимое мышление,<br />внимательная работа.", aboutText: "Haomac Labs — независимый бренд разработчика, создающий простой, красивый и действительно полезный софт. Мы верим, что хорошие цифровые инструменты уменьшают отвлечения и помогают держать внимание на важном.", newsletterEyebrow: "Оставайтесь на связи", newsletterTitle: "Когда выйдут новинки,<br />мы сообщим.", emailLabel: "Адрес электронной почты", emailPlaceholder: "Ваш e-mail", subscribe: "Подписаться", formStatus: "Спасибо за интерес. Когда подписка будет подключена, мы сообщим вам первыми." },
    products: [["LaunchNest", "Лаунчер приложений Mac", "Организуйте и запускайте все приложения в понятной быстрой сетке.", "Скоро", "Подробнее"], ["Next Utility", "В разработке", "Ещё один сфокусированный инструмент для Mac уже в пути.", "Создаём", "Следите"], ["Your Better Workflow", "Будущие продукты", "Мы продолжаем искать идеи, которые убирают повторения и помогают фокусироваться.", "Исследуем", "Следить"]],
  },
};

const PRODUCT_DETAIL_OVERRIDES = {
  de: { back: "← Zurück zu allen Produkten", iconAlt: "LaunchNest-Symbol", eyebrow: "Nativer macOS-App-Launcher", lead: "Lege alle Apps an einem klaren, vertrauten Ort ab. Schnell finden, sofort starten, fokussiert bleiben.", notify: "Launch-Updates erhalten", viewFeatures: "Funktionen ansehen", featuresEyebrow: "Kernfunktionen", featuresTitle: "Apps starten,<br />ohne den Gedanken zu verlieren.", featuresIntro: "LaunchNest konzentriert sich auf eine Aufgabe: Mac-Apps schneller finden und öffnen.", featureCards: [["Schnelle Suche", "Tippe den App-Namen und erreiche dein Ziel in Sekunden."], ["Klares Raster", "Durchsuche Apps in einem vertrauten Icon-Raster ohne Ablenkung."], ["Natives Gefühl", "Für macOS gebaut: leicht, schnell und natürlich integriert."]], galleryEyebrow: "Funktionsübersicht", galleryTitle: "Mehr als Starten.<br />Zum Organisieren gemacht.", galleryIntro: "Von Suche bis Gruppen: jede Aktion ist direkt, natürlich und leicht neu anzuordnen.", ctaEyebrow: "Demnächst", ctaTitle: "Bereit für Ordnung<br />in deinen Apps?", ctaButton: "Support kontaktieren" },
  pt: { back: "← Voltar aos produtos", iconAlt: "Ícone do LaunchNest", eyebrow: "Lançador nativo para macOS", lead: "Coloque todos os apps em um espaço claro e familiar. Encontre rápido, abra na hora e mantenha o foco.", notify: "Receber novidades", viewFeatures: "Ver recursos", featuresEyebrow: "Recursos principais", featuresTitle: "Abra apps<br />sem perder o foco.", featuresIntro: "LaunchNest foca em uma coisa: ajudar você a encontrar e abrir apps do Mac mais rápido.", featureCards: [["Busca rápida", "Digite o nome do app e chegue ao destino em segundos."], ["Grade clara", "Navegue por ícones familiares sem ruído extra."], ["Experiência nativa", "Feito para macOS: leve, rápido e integrado."]], galleryEyebrow: "Tour de recursos", galleryTitle: "Mais que abrir.<br />Feito para organizar.", galleryIntro: "Da busca aos grupos, cada ação é direta, natural e fácil de reorganizar.", ctaEyebrow: "Em breve", ctaTitle: "Pronto para organizar<br />seus apps?", ctaButton: "Falar com suporte" },
  fr: { back: "← Retour aux produits", iconAlt: "Icône LaunchNest", eyebrow: "Lanceur d’apps macOS natif", lead: "Placez toutes vos apps dans un espace clair et familier. Trouvez vite, lancez aussitôt, restez concentré.", notify: "Recevoir les nouvelles", viewFeatures: "Voir les fonctions", featuresEyebrow: "Fonctions clés", featuresTitle: "Lancez vos apps<br />sans perdre le fil.", featuresIntro: "LaunchNest se concentre sur une chose : trouver et ouvrir vos apps Mac plus vite.", featureCards: [["Recherche rapide", "Tapez le nom d’une app pour atteindre la cible en quelques secondes."], ["Grille claire", "Parcourez vos apps dans une grille d’icônes familière, sans bruit."], ["Sensation native", "Conçu pour macOS : léger, rapide et naturellement intégré."]], galleryEyebrow: "Aperçu des fonctions", galleryTitle: "Plus qu’un lanceur.<br />Fait pour organiser.", galleryIntro: "De la recherche aux groupes, chaque action est directe, naturelle et facile à réorganiser.", ctaEyebrow: "Bientôt", ctaTitle: "Prêt à remettre de l’ordre<br />dans vos apps ?", ctaButton: "Contacter le support" },
  es: { back: "← Volver a productos", iconAlt: "Icono de LaunchNest", eyebrow: "Lanzador nativo para macOS", lead: "Pon todas tus apps en un espacio claro y familiar. Encuentra rápido, abre al instante y sigue concentrado.", notify: "Recibir novedades", viewFeatures: "Ver funciones", featuresEyebrow: "Funciones clave", featuresTitle: "Abre apps<br />sin perder el hilo.", featuresIntro: "LaunchNest se centra en una cosa: ayudarte a encontrar y abrir apps de Mac más rápido.", featureCards: [["Búsqueda rápida", "Escribe el nombre de una app y llega en segundos."], ["Cuadrícula clara", "Explora apps con iconos familiares y sin ruido extra."], ["Sensación nativa", "Hecho para macOS: ligero, rápido e integrado."]], galleryEyebrow: "Recorrido", galleryTitle: "Más que abrir.<br />Hecho para organizar.", galleryIntro: "De la búsqueda a los grupos, cada acción es directa, natural y fácil de reordenar.", ctaEyebrow: "Próximamente", ctaTitle: "¿Listo para ordenar<br />tus apps?", ctaButton: "Contactar soporte" },
  ar: { back: "← العودة إلى كل المنتجات", iconAlt: "أيقونة LaunchNest", eyebrow: "مشغّل تطبيقات macOS أصلي", lead: "ضع كل تطبيقاتك في مساحة واضحة ومألوفة. اعثر عليها بسرعة، شغّلها فوراً، وابقَ مركزاً.", notify: "احصل على أخبار الإطلاق", viewFeatures: "عرض الميزات", featuresEyebrow: "الميزات الأساسية", featuresTitle: "شغّل التطبيقات<br />دون قطع تركيزك.", featuresIntro: "يركز LaunchNest على شيء واحد: مساعدتك على إيجاد وفتح تطبيقات Mac بسرعة أكبر.", featureCards: [["بحث سريع", "اكتب اسم التطبيق لتصل إليه خلال ثوان."], ["شبكة واضحة", "تصفح التطبيقات في شبكة أيقونات مألوفة بلا ضجيج زائد."], ["إحساس أصلي", "مصمم لـ macOS: خفيف وسريع ومندمج بسلاسة."]], galleryEyebrow: "جولة الميزات", galleryTitle: "أكثر من تشغيل.<br />مصمم للتنظيم.", galleryIntro: "من البحث السريع إلى المجموعات، كل إجراء مباشر وطبيعي وسهل الترتيب.", ctaEyebrow: "قريباً", ctaTitle: "هل أنت مستعد لتنظيم<br />تطبيقاتك؟", ctaButton: "تواصل مع الدعم" },
  it: { back: "← Torna ai prodotti", iconAlt: "Icona LaunchNest", eyebrow: "Launcher nativo per macOS", lead: "Metti tutte le app in uno spazio chiaro e familiare. Trovale rapidamente, avviale subito e resta concentrato.", notify: "Ricevi aggiornamenti", viewFeatures: "Vedi funzioni", featuresEyebrow: "Funzioni principali", featuresTitle: "Avvia le app<br />senza perdere il filo.", featuresIntro: "LaunchNest si concentra su una cosa: trovare e aprire le app Mac più velocemente.", featureCards: [["Ricerca veloce", "Digita il nome dell’app e raggiungi l’obiettivo in pochi secondi."], ["Griglia chiara", "Sfoglia le app in una griglia familiare, senza rumore extra."], ["Esperienza nativa", "Creato per macOS: leggero, rapido e integrato."]], galleryEyebrow: "Panoramica", galleryTitle: "Più che avviare.<br />Fatto per organizzare.", galleryIntro: "Dalla ricerca ai gruppi, ogni azione è diretta, naturale e facile da riordinare.", ctaEyebrow: "In arrivo", ctaTitle: "Pronto a mettere ordine<br />nelle app?", ctaButton: "Contatta il supporto" },
  ja: { back: "← すべての製品へ戻る", iconAlt: "LaunchNest アイコン", eyebrow: "ネイティブ macOS アプリランチャー", lead: "すべてのアプリを、見やすく慣れた場所にまとめます。すばやく見つけて、すぐ起動し、集中を保てます。", notify: "リリース情報を受け取る", viewFeatures: "機能を見る", featuresEyebrow: "主な機能", featuresTitle: "流れを止めずに<br />アプリを起動。", featuresIntro: "LaunchNest は、Mac 上のアプリをより速く見つけて開くことに集中しています。", featureCards: [["高速検索", "アプリ名を入力するだけで候補を絞り込み、数秒で目的のアプリへ。"], ["見やすいグリッド", "余計なノイズのない、慣れたアイコングリッドでアプリを一覧できます。"], ["ネイティブな体験", "macOS のために作られた、軽くて速く自然に馴染む体験です。"]], galleryEyebrow: "機能一覧", galleryTitle: "起動だけでなく、<br />整理まで。", galleryIntro: "高速検索からグループ整理まで、すべての操作が直接的で自然に扱えます。", ctaEyebrow: "近日公開", ctaTitle: "アプリをすっきり<br />整理しませんか？", ctaButton: "サポートへ連絡" },
  ko: { back: "← 모든 제품으로 돌아가기", iconAlt: "LaunchNest 아이콘", eyebrow: "네이티브 macOS 앱 런처", lead: "모든 앱을 명확하고 익숙한 공간에 모아 두세요. 빠르게 찾고, 즉시 실행하고, 집중을 이어갑니다.", notify: "출시 소식 받기", viewFeatures: "기능 보기", featuresEyebrow: "핵심 기능", featuresTitle: "흐름을 끊지 않고<br />앱 실행.", featuresIntro: "LaunchNest는 Mac 앱을 더 빠르게 찾고 여는 일에 집중합니다.", featureCards: [["빠른 검색", "앱 이름을 입력해 몇 초 안에 원하는 앱에 도달하세요."], ["명확한 그리드", "불필요한 방해 없이 익숙한 아이콘 그리드로 앱을 둘러보세요."], ["네이티브 경험", "macOS를 위해 가볍고 빠르게, 자연스럽게 통합되었습니다."]], galleryEyebrow: "기능 둘러보기", galleryTitle: "실행을 넘어,<br />정리까지.", galleryIntro: "빠른 검색부터 그룹 정리까지 모든 동작이 직접적이고 자연스럽습니다.", ctaEyebrow: "출시 예정", ctaTitle: "앱을 깔끔하게<br />정리할 준비가 되었나요?", ctaButton: "지원 문의" },
  tr: { back: "← Tüm ürünlere dön", iconAlt: "LaunchNest simgesi", eyebrow: "Yerel macOS uygulama başlatıcı", lead: "Tüm uygulamaları açık ve tanıdık bir alana koyun. Hızlı bulun, anında başlatın, odakta kalın.", notify: "Lansman haberlerini al", viewFeatures: "Özellikleri gör", featuresEyebrow: "Temel özellikler", featuresTitle: "Düşünce akışını bozmadan<br />uygulama başlat.", featuresIntro: "LaunchNest tek şeye odaklanır: Mac uygulamalarını daha hızlı bulup açmak.", featureCards: [["Hızlı arama", "Uygulama adını yazın ve hedefe saniyeler içinde ulaşın."], ["Açık ızgara", "Uygulamaları tanıdık ikon ızgarasında, fazladan gürültü olmadan gezin."], ["Yerel his", "macOS için üretildi: hafif, hızlı ve doğal."]], galleryEyebrow: "Özellik turu", galleryTitle: "Başlatmaktan fazlası.<br />Düzenlemek için.", galleryIntro: "Hızlı aramadan gruplara kadar her eylem doğrudan, doğal ve kolayca yeniden düzenlenebilir.", ctaEyebrow: "Yakında", ctaTitle: "Uygulamalarınızı düzene<br />sokmaya hazır mısınız?", ctaButton: "Destekle iletişime geç" },
  ru: { back: "← Назад ко всем продуктам", iconAlt: "Значок LaunchNest", eyebrow: "Нативный лаунчер приложений macOS", lead: "Соберите все приложения в одном понятном месте. Быстро находите, мгновенно запускайте и сохраняйте фокус.", notify: "Получать новости запуска", viewFeatures: "Смотреть функции", featuresEyebrow: "Ключевые функции", featuresTitle: "Запускайте приложения,<br />не теряя ход мысли.", featuresIntro: "LaunchNest сосредоточен на одном: помочь быстрее находить и открывать приложения Mac.", featureCards: [["Быстрый поиск", "Введите название приложения и найдите нужное за секунды."], ["Понятная сетка", "Просматривайте приложения в привычной сетке иконок без лишнего шума."], ["Нативное ощущение", "Создано для macOS: лёгкое, быстрое и естественно встроенное."]], galleryEyebrow: "Обзор функций", galleryTitle: "Больше чем запуск.<br />Создано для порядка.", galleryIntro: "От быстрого поиска до групп: каждое действие прямое, естественное и легко меняется.", ctaEyebrow: "Скоро", ctaTitle: "Готовы навести порядок<br />в приложениях?", ctaButton: "Связаться с поддержкой" },
};

const SIMPLE_GALLERY_LABELS = {
  de: [["01 · Schnelle Suche", "Apps suchen"], ["02 · Frei anordnen", "Apps per Drag sortieren"], ["03 · Stapelaktionen", "Mehrere Apps auswählen"], ["04 · Intelligente Gruppen", "Apps in Gruppen ziehen"], ["05 · Eigene Namen", "Gruppen umbenennen"], ["06 · Mehr Details", "App-Infos ansehen"], ["07 · Immer bereit", "Tastenkürzel festlegen"]],
  pt: [["01 · Busca rápida", "Buscar apps"], ["02 · Organização livre", "Arrastar para reordenar"], ["03 · Ações em lote", "Selecionar vários apps"], ["04 · Grupos inteligentes", "Agrupar apps"], ["05 · Nomes pessoais", "Renomear grupos"], ["06 · Mais detalhes", "Prévia de informações"], ["07 · Sempre pronto", "Definir atalho"]],
  fr: [["01 · Recherche rapide", "Rechercher des apps"], ["02 · Agencement libre", "Réordonner les apps"], ["03 · Actions groupées", "Sélection multiple"], ["04 · Groupes intelligents", "Regrouper les apps"], ["05 · Noms personnels", "Renommer les groupes"], ["06 · Plus de détails", "Prévisualiser les infos"], ["07 · Toujours prêt", "Définir un raccourci"]],
  es: [["01 · Búsqueda rápida", "Buscar apps"], ["02 · Orden libre", "Arrastrar para ordenar"], ["03 · Acciones por lote", "Seleccionar varias apps"], ["04 · Grupos inteligentes", "Agrupar apps"], ["05 · Nombres propios", "Renombrar grupos"], ["06 · Más detalle", "Vista de información"], ["07 · Siempre listo", "Configurar atajo"]],
  ar: [["01 · بحث سريع", "البحث عن التطبيقات"], ["02 · ترتيب حر", "سحب لترتيب التطبيقات"], ["03 · إجراءات جماعية", "تحديد عدة تطبيقات"], ["04 · مجموعات ذكية", "تجميع التطبيقات"], ["05 · أسماء مخصصة", "إعادة تسمية المجموعات"], ["06 · تفاصيل أكثر", "معاينة معلومات التطبيق"], ["07 · جاهز دائماً", "تعيين اختصار"]],
  it: [["01 · Ricerca veloce", "Cerca app"], ["02 · Ordine libero", "Riordina app"], ["03 · Azioni in serie", "Seleziona più app"], ["04 · Gruppi intelligenti", "Raggruppa app"], ["05 · Nomi personali", "Rinomina gruppi"], ["06 · Più dettagli", "Anteprima info app"], ["07 · Sempre pronto", "Imposta scorciatoia"]],
  ja: [["01 · 高速検索", "アプリを検索"], ["02 · 自由に配置", "ドラッグで並べ替え"], ["03 · まとめて操作", "複数アプリを選択"], ["04 · スマートグループ", "アプリをグループ化"], ["05 · 名前をカスタム", "グループ名を変更"], ["06 · 詳細を確認", "アプリ情報をプレビュー"], ["07 · すぐ呼び出し", "ショートカットを設定"]],
  ko: [["01 · 빠른 검색", "앱 검색"], ["02 · 자유 배치", "드래그로 정렬"], ["03 · 일괄 작업", "여러 앱 선택"], ["04 · 스마트 그룹", "앱 그룹화"], ["05 · 사용자 이름", "그룹 이름 변경"], ["06 · 자세히 보기", "앱 정보 미리보기"], ["07 · 바로 호출", "단축키 설정"]],
  tr: [["01 · Hızlı arama", "Uygulama ara"], ["02 · Serbest düzen", "Sürükleyerek sırala"], ["03 · Toplu işlem", "Birden çok uygulama seç"], ["04 · Akıllı gruplar", "Uygulamaları grupla"], ["05 · Kişisel adlar", "Grupları yeniden adlandır"], ["06 · Daha fazla detay", "Uygulama bilgisini önizle"], ["07 · Her an hazır", "Kısayol ayarla"]],
  ru: [["01 · Быстрый поиск", "Искать приложения"], ["02 · Свободный порядок", "Перетаскивать приложения"], ["03 · Пакетные действия", "Выбирать несколько приложений"], ["04 · Умные группы", "Группировать приложения"], ["05 · Свои названия", "Переименовать группы"], ["06 · Больше деталей", "Просмотр информации"], ["07 · Всегда под рукой", "Настроить сочетание"]],
};

const PRIVACY_OVERRIDES = {
  de: { back: "← Zurück zu Haomac Labs", eyebrow: "Datenschutz", title: "Wir respektieren deine Privatsphäre.", p1: "Haomac Labs verkauft keine personenbezogenen Daten. Diese Website erstellt derzeit keine Konten und speichert E-Mail-Adressen aus dem Formular nicht auf einem Server.", p2: "Wenn du uns per E-Mail kontaktierst, verwenden wir deine Angaben nur zur Antwort und Bearbeitung der Support-Anfrage.", p3: "Wenn sich Produkte und Dienste ändern, kann diese Richtlinie aktualisiert werden. Fragen? Schreibe an <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>.", date: "Aktualisiert: 5. Juni 2026" },
  pt: { back: "← Voltar para Haomac Labs", eyebrow: "Política de privacidade", title: "Respeitamos sua privacidade.", p1: "A Haomac Labs não vende suas informações pessoais. Este site atualmente não cria contas nem salva em servidor os e-mails digitados no formulário.", p2: "Quando você nos contata por e-mail, usamos as informações apenas para responder e tratar a solicitação de suporte.", p3: "Conforme produtos e serviços evoluem, esta política pode ser atualizada. Dúvidas? Fale com <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>.", date: "Atualizado: 5 de junho de 2026" },
  fr: { back: "← Retour à Haomac Labs", eyebrow: "Politique de confidentialité", title: "Nous respectons votre vie privée.", p1: "Haomac Labs ne vend pas vos informations personnelles. Ce site ne crée actuellement pas de compte et ne stocke pas sur serveur les e-mails saisis dans le formulaire.", p2: "Lorsque vous nous contactez par e-mail, nous utilisons les informations fournies uniquement pour répondre et traiter la demande de support.", p3: "Cette politique peut évoluer avec nos produits et services. Questions ? Contactez <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>.", date: "Mis à jour : 5 juin 2026" },
  es: { back: "← Volver a Haomac Labs", eyebrow: "Política de privacidad", title: "Respetamos tu privacidad.", p1: "Haomac Labs no vende tu información personal. Este sitio actualmente no crea cuentas ni guarda en un servidor los correos del formulario.", p2: "Cuando nos contactas por correo, usamos la información solo para responder y gestionar la solicitud de soporte.", p3: "A medida que cambien los productos y servicios, esta política puede actualizarse. ¿Dudas? Contacta a <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>.", date: "Actualizado: 5 de junio de 2026" },
  ar: { back: "← العودة إلى Haomac Labs", eyebrow: "سياسة الخصوصية", title: "نحترم خصوصيتك.", p1: "لا تبيع Haomac Labs معلوماتك الشخصية. هذا الموقع لا ينشئ حسابات حالياً ولا يحفظ عناوين البريد المدخلة في نموذج الاشتراك على خادم.", p2: "عندما تتواصل معنا عبر البريد الإلكتروني، نستخدم المعلومات التي تقدمها فقط للرد ومعالجة طلب الدعم.", p3: "قد تُحدّث هذه السياسة مع تطور المنتجات والخدمات. للأسئلة، تواصل عبر <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>.", date: "آخر تحديث: 5 يونيو 2026" },
  it: { back: "← Torna a Haomac Labs", eyebrow: "Informativa sulla privacy", title: "Rispettiamo la tua privacy.", p1: "Haomac Labs non vende le tue informazioni personali. Questo sito al momento non crea account e non salva su server gli indirizzi email inseriti nel modulo.", p2: "Quando ci contatti via email, usiamo le informazioni solo per rispondere e gestire la richiesta di supporto.", p3: "Con l’evoluzione di prodotti e servizi, questa informativa può essere aggiornata. Domande? Scrivi a <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>.", date: "Aggiornato: 5 giugno 2026" },
  ja: { back: "← Haomac Labs へ戻る", eyebrow: "プライバシーポリシー", title: "プライバシーを尊重します。", p1: "Haomac Labs は個人情報を販売しません。現在このサイトではアカウントを作成せず、購読フォームに入力されたメールアドレスをサーバーに保存しません。", p2: "メールでお問い合わせいただいた場合、提供された情報は返信とサポート対応のためだけに使用します。", p3: "製品やサービスの更新に合わせて、本ポリシーは変更されることがあります。ご質問は <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a> までご連絡ください。", date: "更新日：2026年6月5日" },
  ko: { back: "← Haomac Labs로 돌아가기", eyebrow: "개인정보 처리방침", title: "개인정보를 존중합니다.", p1: "Haomac Labs는 개인 정보를 판매하지 않습니다. 현재 이 웹사이트는 계정을 만들지 않으며 구독 양식에 입력한 이메일을 서버에 저장하지 않습니다.", p2: "이메일로 문의하면 제공된 정보는 답변과 관련 지원 요청 처리에만 사용합니다.", p3: "제품과 서비스가 업데이트되면 본 정책도 조정될 수 있습니다. 문의는 <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>으로 보내주세요.", date: "업데이트: 2026년 6월 5일" },
  tr: { back: "← Haomac Labs’e dön", eyebrow: "Gizlilik politikası", title: "Gizliliğinize saygı duyuyoruz.", p1: "Haomac Labs kişisel bilgilerinizi satmaz. Bu site şu anda hesap oluşturmaz ve abonelik formuna girilen e-posta adreslerini sunucuda saklamaz.", p2: "Bize e-posta ile ulaştığınızda, verdiğiniz bilgileri yalnızca yanıtlamak ve ilgili destek talebini işlemek için kullanırız.", p3: "Ürün ve hizmetler değiştikçe bu politika güncellenebilir. Sorular için <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a> adresine yazın.", date: "Güncellendi: 5 Haziran 2026" },
  ru: { back: "← Назад к Haomac Labs", eyebrow: "Политика конфиденциальности", title: "Мы уважаем вашу приватность.", p1: "Haomac Labs не продаёт ваши персональные данные. Сейчас сайт не создаёт аккаунты и не сохраняет на сервере e-mail из формы подписки.", p2: "Когда вы пишете нам по электронной почте, мы используем предоставленную информацию только для ответа и обработки запроса поддержки.", p3: "По мере развития продуктов и сервисов эта политика может обновляться. Вопросы можно отправить на <a href=\"mailto:support@haomaclabs.com\">support@haomaclabs.com</a>.", date: "Обновлено: 5 июня 2026 г." },
};

Object.entries(LOCALIZED).forEach(([code, v]) => {
  const detail = LOCALIZED_DETAILS[code] || {};
  const product = PRODUCT_DETAIL_OVERRIDES[code] || {};
  if (SIMPLE_GALLERY_LABELS[code]) {
    product.gallery = SIMPLE_GALLERY_LABELS[code].map((item, index) => [
      item[0],
      item[1],
      product.galleryIntro || TRANSLATIONS.en.product.gallery[index][2],
    ]);
  }
  TRANSLATIONS[code] = cloneFrom(TRANSLATIONS.en, {
    ...detail,
    common: LOCALIZED_COMMON[code],
    home: { ...(detail.home || {}), eyebrow: v[1], heroTitle: v[2], heroIntro: v[3], explore: v[4], meet: v[5], productsEyebrow: v[6], productsTitle: v[7], productsIntro: v[8], principlesEyebrow: v[9], principlesTitle: v[10], principlesIntro: v[11] },
    products: detail.products || TRANSLATIONS.en.products,
    product,
    privacy: PRIVACY_OVERRIDES[code] || TRANSLATIONS.en.privacy,
  });
});

function getStoredLanguage() {
  const stored = localStorage.getItem("haomac-language");
  if (stored && TRANSLATIONS[stored]) return stored;
  const preferred = navigator.languages?.find((lang) => TRANSLATIONS[lang] || TRANSLATIONS[lang.split("-")[0]] || LANGUAGE_ALIASES[lang]);
  if (!preferred) return "zh-CN";
  return LANGUAGE_ALIASES[preferred] || (TRANSLATIONS[preferred] ? preferred : preferred.split("-")[0]);
}

function getTranslation(language = getStoredLanguage()) {
  return TRANSLATIONS[language] || TRANSLATIONS["zh-CN"];
}

function setText(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
}

function setHTML(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element && value !== undefined) element.innerHTML = value;
}

function setAttr(selector, attr, value, root = document) {
  const element = root.querySelector(selector);
  if (element && value !== undefined) element.setAttribute(attr, value);
}

function withArrow(text, arrow) {
  return `${text} <span>${arrow}</span>`;
}

function createLanguageSwitcher(language) {
  if (document.querySelector(".language-switcher")) return;
  const switcher = document.createElement("label");
  switcher.className = "language-switcher";
  switcher.innerHTML = `<span class="sr-only">${getTranslation(language).common.language}</span><select aria-label="${getTranslation(language).common.language}"></select>`;
  const select = switcher.querySelector("select");
  LANGUAGE_OPTIONS.forEach(([code, label]) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = label;
    select.append(option);
  });
  select.value = language;
  select.addEventListener("change", () => {
    localStorage.setItem("haomac-language", select.value);
    applyTranslations(select.value);
    window.dispatchEvent(new CustomEvent("haomac:languagechange", { detail: { language: select.value } }));
  });
  const nav = document.querySelector(".site-nav");
  if (nav) nav.append(switcher);
  else document.querySelector(".legal-content")?.prepend(switcher);
}

function applyCommon(t) {
  setAttr(".brand", "aria-label", document.body.classList.contains("product-page") ? t.common.homeBackAria : t.common.homeAria);
  setAttr(".menu-button", "aria-label", t.common.openMenu);
  setAttr(".site-nav", "aria-label", t.common.navAria);
  document.querySelectorAll(".site-nav a:not(.nav-pill)").forEach((link, index) => {
    link.textContent = [t.common.products, t.common.principles, t.common.about][index] || link.textContent;
  });
  setText(".nav-pill", t.common.contact);
  setText("footer p", t.common.footerTagline);
  document.querySelectorAll(".footer-links a").forEach((link, index) => {
    link.textContent = [t.common.products, t.common.footerContact, t.common.privacy][index] || link.textContent;
  });
}

function applyHome(t) {
  document.title = t.meta.homeTitle;
  setAttr("meta[name='description']", "content", t.meta.homeDescription);
  setText(".hero .eyebrow", t.home.eyebrow);
  setHTML(".hero h1", t.home.heroTitle);
  setText(".hero-intro", t.home.heroIntro);
  setHTML(".hero-actions .button", withArrow(t.home.explore, "↘"));
  setHTML(".hero-actions .text-link", withArrow(t.home.meet, "→"));
  setText(".hero-foot span:first-child", t.home.care);
  setHTML(".scroll-hint", `${t.home.scroll} <i></i>`);
  setText(".products-section .eyebrow", t.home.productsEyebrow);
  setHTML(".products-section h2", t.home.productsTitle);
  setText(".products-section .section-heading > p", t.home.productsIntro);
  setText(".principles-section .eyebrow", t.home.principlesEyebrow);
  setHTML(".principles-section h2", t.home.principlesTitle);
  setText(".principles-section .section-heading > p", t.home.principlesIntro);
  document.querySelectorAll(".principles-section .principle-card").forEach((card, index) => {
    setText("h3", t.home.cards[index][0], card);
    setText("p", t.home.cards[index][1], card);
  });
  setText(".about-copy .eyebrow", t.home.aboutEyebrow);
  setHTML(".about-copy h2", t.home.aboutTitle);
  setText(".about-copy > p:not(.eyebrow)", t.home.aboutText);
  setText(".newsletter-section .eyebrow", t.home.newsletterEyebrow);
  setHTML(".newsletter-section h2", t.home.newsletterTitle);
  setText(".newsletter-form label", t.home.emailLabel);
  setAttr("#email", "placeholder", t.home.emailPlaceholder);
  setHTML(".newsletter-form button", withArrow(t.home.subscribe, "→"));
}

function applyProductPage(t) {
  document.title = t.meta.productTitle;
  setAttr("meta[name='description']", "content", t.meta.productDescription);
  setText(".back-link", t.product.back);
  setAttr(".product-page-icon", "alt", t.product.iconAlt);
  setText(".product-hero .eyebrow", t.product.eyebrow);
  setText(".product-lead", t.product.lead);
  setHTML(".product-hero .button", withArrow(t.product.notify, "↗"));
  setHTML(".product-hero .text-link", withArrow(t.product.viewFeatures, "↓"));
  setText(".product-features .eyebrow", t.product.featuresEyebrow);
  setHTML(".product-features h2", t.product.featuresTitle);
  setText(".product-features .section-heading > p", t.product.featuresIntro);
  document.querySelectorAll(".product-features .principle-card").forEach((card, index) => {
    setText("h3", t.product.featureCards[index][0], card);
    setText("p", t.product.featureCards[index][1], card);
  });
  setText(".gallery-heading .eyebrow", t.product.galleryEyebrow);
  setHTML(".gallery-heading h2", t.product.galleryTitle);
  setText(".gallery-heading > p:last-child", t.product.galleryIntro);
  document.querySelectorAll(".screenshot-feature").forEach((card, index) => {
    const item = t.product.gallery[index];
    if (!item) return;
    setText(".screenshot-copy span", item[0], card);
    setText(".screenshot-copy h3", item[1], card);
    setText(".screenshot-copy p", item[2], card);
  });
  setText(".product-cta .eyebrow", t.product.ctaEyebrow);
  setHTML(".product-cta h2", t.product.ctaTitle);
  setHTML(".product-cta .button", withArrow(t.product.ctaButton, "↗"));
}

function applyPrivacy(t) {
  document.title = t.meta.privacyTitle;
  setText(".legal-content .back-link", t.privacy.back);
  setText(".legal-content .eyebrow", t.privacy.eyebrow);
  setText(".legal-content h1", t.privacy.title);
  const paragraphs = document.querySelectorAll(".legal-content > p:not(.eyebrow):not(.legal-date)");
  [t.privacy.p1, t.privacy.p2, t.privacy.p3].forEach((copy, index) => {
    if (paragraphs[index]) paragraphs[index].innerHTML = copy;
  });
  setText(".legal-date", t.privacy.date);
}

function applyTranslations(language = getStoredLanguage()) {
  const normalized = TRANSLATIONS[language] ? language : "zh-CN";
  const t = getTranslation(normalized);
  document.documentElement.lang = normalized;
  document.documentElement.dir = normalized === "ar" ? "rtl" : "ltr";
  createLanguageSwitcher(normalized);
  document.querySelectorAll(".language-switcher select").forEach((select) => {
    select.value = normalized;
    select.setAttribute("aria-label", t.common.language);
    select.previousElementSibling.textContent = t.common.language;
  });
  applyCommon(t);
  if (document.body.classList.contains("product-page")) applyProductPage(t);
  else if (document.body.classList.contains("legal-page")) applyPrivacy(t);
  else applyHome(t);
}

window.HaomacI18n = {
  languages: LANGUAGE_OPTIONS,
  getLanguage: getStoredLanguage,
  getTranslation,
  apply: applyTranslations,
};

document.addEventListener("DOMContentLoaded", () => applyTranslations());
