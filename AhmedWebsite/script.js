let currentLanguage = "en";

const newsData = [
  {
    id: 1,
    title: "Breaking: Global Climate Summit Reaches Historic Agreement",
    ar: "عاجل: قمة المناخ العالمية تتوصل إلى اتفاق تاريخي على الحد من الانبعاثات",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    credit: "Reuters",
    creditLink: "reuters.com",
    date: "2 hours ago",
    category: "Environment",
    excerpt:
      "World leaders announce binding climate commitments with unprecedented funding for green energy and environmental protection initiatives globally.",
  },
  {
    id: 2,
    title: "Breakthrough: Advanced AI Redefines Industry Standards",
    ar: "اختراق تاريخي: تقنية الذكاء الاصطناعي المتقدمة تعيد تعريف معايير الصناعة العالمية",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=600&h=400&fit=crop",
    credit: "TechCrunch",
    creditLink: "techcrunch.com",
    date: "4 hours ago",
    category: "Technology",
    excerpt:
      "Leading technology innovators unveil revolutionary AI systems achieving unprecedented accuracy and efficiency across multiple industrial sectors and applications.",
  },
  {
    id: 3,
    title: "Markets Surge on Positive Economic Data and Corporate Earnings",
    ar: "الأسواق المالية ترتفع بقوة وسط بيانات اقتصادية إيجابية وأرباح قياسية للشركات العملاقة",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
    credit: "Bloomberg",
    creditLink: "bloomberg.com",
    date: "1 hour ago",
    category: "Business",
    excerpt:
      "Stock markets worldwide rally as robust economic indicators and record corporate earnings fuel investor confidence across all major trading indices.",
  },
  {
    id: 4,
    title: "Championship Finals Conclude with Record-Breaking Performance",
    ar: "نهائيات البطولة الكبرى تختتم بأداء قياسي تاريخي لم يشهده العالم من قبل",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    credit: "ESPN",
    creditLink: "espn.com",
    date: "3 hours ago",
    category: "Sports",
    excerpt:
      "Elite athletes from worldwide deliver extraordinary performances, breaking multiple records and creating unforgettable moments that will be remembered throughout sporting history.",
  },
  {
    id: 5,
    title: "Government Unveils Comprehensive Healthcare Reform Initiative",
    ar: "الحكومة تكشف عن مبادرة إصلاح صحي شاملة لتحسين الخدمات الطبية والوصول العادل",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    credit: "BBC News",
    creditLink: "bbc.com",
    date: "5 hours ago",
    category: "Politics",
    excerpt:
      "Government announces sweeping healthcare reforms with significant investment in public health infrastructure and universal accessibility programs.",
  },
  {
    id: 6,
    title: "International Space Program Achieves Landmark Mission Success",
    ar: "برنامج الفضاء الدولي يحقق نجاحاً تاريخياً في مهمة استكشافية ثورية غير مسبوقة",
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
    credit: "CNN",
    creditLink: "cnn.com",
    date: "6 hours ago",
    category: "Science",
    excerpt:
      "Global space agencies successfully accomplish groundbreaking mission with unprecedented international collaboration and technological innovation in space exploration.",
  },
  {
    id: 7,
    title: "Global Cultural Festival Celebrates Artistic Diversity and Heritage",
    ar: "مهرجان ثقافي عالمي يحتفي بتنوع الفنون والتراث الحضاري من مختلف أنحاء العالم",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    credit: "Al Jazeera",
    creditLink: "aljazeera.com",
    date: "7 hours ago",
    category: "Culture",
    excerpt:
      "Leading cultural figures and world leaders converge to celebrate artistic expression, cultural diversity, and international heritage on the global platform.",
  },
  {
    id: 8,
    title: "Revolutionary EdTech Platform Democratizes Access to Quality Education",
    ar: "منصة تعليمية تقنية ثورية تضع التعليم الجودة في متناول ملايين الطلاب حول العالم",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
    credit: "Sky News",
    creditLink: "skynews.com",
    date: "8 hours ago",
    category: "Education",
    excerpt:
      "Cutting-edge educational technology platform launches globally, providing accessible quality learning resources to millions of students across all economic backgrounds.",
  },
];

const newsAgencies = [
  {
    name: "BBC News",
    en: "BBC News",
    ar: "بي بي سي نيوز",
    stories: "156",
    reach: "2.5M",
  },
  {
    name: "Reuters",
    en: "Reuters",
    ar: "رويترز",
    stories: "203",
    reach: "3.1M",
  },
  {
    name: "AP News",
    en: "AP News",
    ar: "أسوشيتد برس",
    stories: "189",
    reach: "2.8M",
  },
  { name: "CNN", en: "CNN", ar: "سي إن إن", stories: "234", reach: "4.2M" },
  {
    name: "Al Jazeera",
    en: "Al Jazeera",
    ar: "الجزيرة",
    stories: "178",
    reach: "2.2M",
  },
  {
    name: "Sky News",
    en: "Sky News",
    ar: "سكاي نيوز",
    stories: "145",
    reach: "1.9M",
  },
  {
    name: "France 24",
    en: "France 24",
    ar: "فرانس 24",
    stories: "167",
    reach: "2.1M",
  },
  {
    name: "DW News",
    en: "DW News",
    ar: "دويتشه فيله",
    stories: "192",
    reach: "2.7M",
  },
  {
    name: "RT News",
    en: "RT News",
    ar: "آر تي نيوز",
    stories: "156",
    reach: "1.8M",
  },
  {
    name: "Bloomberg",
    en: "Bloomberg",
    ar: "بلومبيرج",
    stories: "201",
    reach: "3.3M",
  },
  {
    name: "CNBC",
    en: "CNBC",
    ar: "سي إن بي سي",
    stories: "173",
    reach: "2.4M",
  },
  {
    name: "Fox News",
    en: "Fox News",
    ar: "فوكس نيوز",
    stories: "215",
    reach: "3.8M",
  },
];

const trendingData = [
  {
    id: 1,
    title: "Epic Gaming Moments",
    ar: "لحظات ألعاب رائعة",
    creator: "ProGamer",
    type: "video",
    emoji: "🎮",
    views: "2.5M",
    duration: "12:34",
  },
  {
    id: 2,
    title: "Chill Vibes Playlist",
    ar: "قائمة تشغيل هادئة",
    creator: "SoundWave",
    type: "music",
    emoji: "🎵",
    views: "1.8M",
    duration: "45:20",
  },
  {
    id: 3,
    title: "Tech Podcast Episode 42",
    ar: "حلقة البودكاست التقنية 42",
    creator: "TechTalk",
    type: "podcast",
    emoji: "🎙️",
    views: "890K",
    duration: "1:23:45",
  },
  {
    id: 4,
    title: "Sunset Time-lapse",
    ar: "فيديو الغروب السريع",
    creator: "NatureVibes",
    type: "video",
    emoji: "🌅",
    views: "3.2M",
    duration: "5:42",
  },
  {
    id: 5,
    title: "Lo-Fi Study Beats",
    ar: "نبضات الدراسة الهادئة",
    creator: "ChillBeats",
    type: "music",
    emoji: "🎧",
    views: "5.1M",
    duration: "120:00",
  },
  {
    id: 6,
    title: "Web Dev Podcast",
    ar: "بودكاست تطوير الويب",
    creator: "CodeCast",
    type: "podcast",
    emoji: "💻",
    views: "456K",
    duration: "58:30",
  },
  {
    id: 7,
    title: "Travel Vlog Japan",
    ar: "فيديو السفر إلى اليابان",
    creator: "WanderLust",
    type: "video",
    emoji: "✈️",
    views: "2.9M",
    duration: "22:15",
  },
  {
    id: 8,
    title: "Indie Music Release",
    ar: "إصدار موسيقى مستقلة",
    creator: "ArtistLife",
    type: "music",
    emoji: "🎸",
    views: "745K",
    duration: "3:45",
  },
  {
    id: 9,
    title: "Marketing Strategy Talk",
    ar: "محادثة استراتيجية التسويق",
    creator: "BizGrowth",
    type: "podcast",
    emoji: "📊",
    views: "567K",
    duration: "45:20",
  },
  {
    id: 10,
    title: "DIY Home Makeover",
    ar: "إعادة تصميم المنزل",
    creator: "HomeDesign",
    type: "video",
    emoji: "🏠",
    views: "1.2M",
    duration: "18:50",
  },
  {
    id: 11,
    title: "Electronic Dance Mix",
    ar: "مزيج الرقص الإلكتروني",
    creator: "DJ Night",
    type: "music",
    emoji: "🔊",
    views: "3.4M",
    duration: "90:00",
  },
  {
    id: 12,
    title: "AI Future Discussion",
    ar: "نقاش مستقبل الذكاء الاصطناعي",
    creator: "FutureTech",
    type: "podcast",
    emoji: "🤖",
    views: "621K",
    duration: "52:15",
  },
];

const featuredData = [
  {
    id: 1,
    title: "Breaking News",
    ar: "أخبار عاجلة",
    source: "BBC",
    category: "breaking",
    emoji: "🚨",
    date: "2 hours ago",
    desc: "Breaking news story from BBC...",
  },
  {
    id: 2,
    title: "Political Summit",
    ar: "قمة سياسية",
    source: "Reuters",
    category: "politics",
    emoji: "🏛️",
    date: "4 hours ago",
    desc: "World leaders discuss important issues...",
  },
  {
    id: 3,
    title: "Market Analysis",
    ar: "تحليل السوق",
    source: "Bloomberg",
    category: "business",
    emoji: "📈",
    date: "1 hour ago",
    desc: "Latest market trends and analysis...",
  },
  {
    id: 4,
    title: "AI Breakthrough",
    ar: "اختراق في الذكاء الاصطناعي",
    source: "TechNews",
    category: "tech",
    emoji: "🤖",
    date: "6 hours ago",
    desc: "New developments in AI technology...",
  },
  {
    id: 5,
    title: "Sports Championship",
    ar: "بطولة رياضية",
    source: "ESPN",
    category: "sports",
    emoji: "⚽",
    date: "3 hours ago",
    desc: "Championship finals wrap up...",
  },
  {
    id: 6,
    title: "Tech Innovations",
    ar: "الابتكارات التكنولوجية",
    source: "CNBC",
    category: "tech",
    emoji: "💻",
    date: "5 hours ago",
    desc: "Latest tech innovations unveiled...",
  },
  {
    id: 7,
    title: "Economic Report",
    ar: "التقرير الاقتصادي",
    source: "Bloomberg",
    category: "business",
    emoji: "💰",
    date: "2 hours ago",
    desc: "Economic outlook for next quarter...",
  },
  {
    id: 8,
    title: "Government Summit",
    ar: "قمة حكومية",
    source: "Al Jazeera",
    category: "politics",
    emoji: "🤝",
    date: "1 hour ago",
    desc: "Government officials meet to discuss policies...",
  },
  {
    id: 9,
    title: "Climate Update",
    ar: "تحديث المناخ",
    source: "Sky News",
    category: "breaking",
    emoji: "🌍",
    date: "7 hours ago",
    desc: "Climate report shows positive progress...",
  },
  {
    id: 10,
    title: "World Cup Finals",
    ar: "نهائيات كأس العالم",
    source: "ESPN",
    category: "sports",
    emoji: "🏆",
    date: "4 hours ago",
    desc: "Exciting finals for world championship...",
  },
  {
    id: 11,
    title: "Quantum Computing",
    ar: "الحوسبة الكمية",
    source: "TechNews",
    category: "tech",
    emoji: "⚛️",
    date: "8 hours ago",
    desc: "Quantum computing breakthrough announced...",
  },
  {
    id: 12,
    title: "Trade Agreement",
    ar: "اتفاقية تجارية",
    source: "Reuters",
    category: "politics",
    emoji: "📋",
    date: "3 hours ago",
    desc: "New international trade agreement signed...",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  initializeLanguage();
  initializeNavigation();
  initializeModals();
  initializeNews();
  initializeTrending();
  initializeAnalyzer();
  initializeArticles();
  initializeStudio();
});

function initializeLanguage() {
  const langToggle = document.getElementById("language-toggle");
  const html = document.documentElement;

  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);

  langToggle.addEventListener("click", () => {
    const newLang = currentLanguage === "en" ? "ar" : "en";
    setLanguage(newLang);
  });
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);

  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";

  const allElements = document.querySelectorAll("[data-en][data-ar]");
  allElements.forEach((el) => {
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      const placeholderAttr = `data-${lang}-placeholder`;
      if (el.hasAttribute(placeholderAttr)) {
        el.placeholder = el.getAttribute(placeholderAttr);
      }
    } else {
      el.textContent = el.getAttribute(`data-${lang}`);
    }
  });

  updateLanguageToggleText();

  document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
}

function updateLanguageToggleText() {
  const toggle = document.getElementById("language-toggle");
  const langText = toggle.querySelector(".lang-text");
  langText.textContent = currentLanguage === "en" ? "العربية" : "English";
}

function initializeNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");
  const aboutLink = document.querySelector(".about-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const pageId = e.target.getAttribute("data-page");

      pages.forEach((page) => page.classList.remove("active"));
      navLinks.forEach((l) => l.classList.remove("active"));

      document.getElementById(pageId).classList.add("active");
      e.target.classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  if (aboutLink) {
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      pages.forEach((page) => page.classList.remove("active"));
      navLinks.forEach((l) => l.classList.remove("active"));
      document.getElementById("about").classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  navLinks[0].classList.add("active");
}

function initializeModals() {
  const signinTriggers = document.querySelectorAll("#signin-trigger");
  const modal = document.getElementById("signin-modal");
  const closeBtn = document.querySelector(".modal-close");
  const signinForm = document.querySelector(".signin-form");

  signinTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      modal.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message =
      currentLanguage === "en"
        ? "Welcome to MediaHub! Sign in successful."
        : "مرحبا بك في ميديا هب! تم تسجيل الدخول بنجاح.";
    alert(message);
    modal.classList.remove("active");
    signinForm.reset();
  });
}

function initializeNews() {
  const newsGrid = document.getElementById("news-grid");

  newsGrid.innerHTML = "";
  newsData.forEach((article, index) => {
    const card = document.createElement("div");
    card.className = "news-card";
    const title = currentLanguage === "ar" ? article.ar : article.title;

    card.innerHTML = `
            <div class="news-image-wrapper">
                <img src="${article.image}" alt="${title}" class="news-image">
                <div class="news-overlay"></div>
                <div class="news-category">${article.category}</div>
            </div>
            <div class="news-content">
                <div class="news-title">${title}</div>
                <p class="news-excerpt">${article.excerpt}</p>
                <div class="news-footer">
                    <span class="news-date">${article.date}</span>
                    <div class="news-credit">
                        <span class="credit-label">${
                          currentLanguage === "ar" ? "المصدر:" : "Via:"
                        }</span>
                        <a href="https://${
                          article.creditLink
                        }" target="_blank" class="credit-link">${
      article.credit
    }</a>
                    </div>
                </div>
            </div>
        `;

    card.style.animationDelay = `${index * 0.05}s`;
    newsGrid.appendChild(card);
  });
}

function initializeTrending() {
  const trendingGrid = document.getElementById("trending-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchBox = document.getElementById("trending-search");

  function renderTrending(data) {
    trendingGrid.innerHTML = "";
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "media-card";
      const title = currentLanguage === "ar" ? item.ar : item.title;

      card.innerHTML = `
                <div class="media-thumbnail">
                    ${item.emoji}
                </div>
                <div class="media-info">
                    <div class="media-title">${title}</div>
                    <div class="media-creator">${item.creator}</div>
                    <div class="media-stats">
                        <span>${item.views}</span>
                        <span>${item.duration}</span>
                    </div>
                </div>
            `;
      trendingGrid.appendChild(card);
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      if (filter === "all") {
        renderTrending(trendingData);
      } else {
        renderTrending(trendingData.filter((item) => item.type === filter));
      }
    });
  });

  searchBox.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const activeFilter = document
      .querySelector(".filter-btn.active")
      .getAttribute("data-filter");

    let filtered = trendingData;
    if (activeFilter !== "all") {
      filtered = filtered.filter((item) => item.type === activeFilter);
    }

    filtered = filtered.filter((item) => {
      const title = currentLanguage === "ar" ? item.ar : item.title;
      return (
        title.toLowerCase().includes(searchTerm) ||
        item.creator.toLowerCase().includes(searchTerm)
      );
    });

    renderTrending(filtered);
  });

  renderTrending(trendingData);
}

function initializeAnalyzer() {
  const analyzerTabs = document.querySelectorAll(".analyzer-tab");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const analyzeBtns = document.querySelectorAll(".analyze-btn");
  const linkInput = document.getElementById("link-input");
  const videoInput = document.getElementById("video-input");
  const analyzerResults = document.getElementById("analyzer-results");

  analyzerTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabName = tab.getAttribute("data-tab");

      analyzerTabs.forEach((t) => t.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(`${tabName}-tab`).classList.add("active");
    });
  });

  analyzeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const activeTab = document.querySelector(".tab-pane.active");
      const isLink = activeTab.id === "link-tab";
      const inputValue = isLink ? linkInput.value : videoInput.value;

      if (!inputValue) {
        const message =
          currentLanguage === "ar"
            ? "يرجى إدراج رابط أو تحميل فيديو أولاً"
            : "Please paste a link or upload a video first";
        alert(message);
        return;
      }

      analyzerResults.innerHTML = generateAnalysisResults();
    });
  });
}

function generateAnalysisResults() {
  const credibility = Math.floor(Math.random() * 40) + 60;
  const authenticity = Math.floor(Math.random() * 35) + 65;

  const labels =
    currentLanguage === "ar"
      ? {
          type: "نوع المحتوى",
          credibility: "درجة المصداقية",
          authenticity: "الأصالة",
          verified: "تم التحقق منه",
          valid: "صالح ✓",
        }
      : {
          type: "Content Type",
          credibility: "Credibility Score",
          authenticity: "Authenticity",
          verified: "Verified",
          valid: "Valid ✓",
        };

  return `
        <div class="result-card">
            <div class="result-item">
                <span class="result-label">${labels.type}:</span>
                <span class="result-value">Video/Media</span>
            </div>
            <div class="result-item">
                <span class="result-label">${labels.credibility}:</span>
                <span class="result-value">${credibility}%</span>
            </div>
            <div class="credibility-meter">
                <div class="credibility-bar" style="width: ${credibility}%"></div>
            </div>
        </div>
        <div class="result-card">
            <div class="result-item">
                <span class="result-label">${labels.authenticity}:</span>
                <span class="result-value">${authenticity}%</span>
            </div>
            <div class="credibility-meter">
                <div class="credibility-bar" style="width: ${authenticity}%"></div>
            </div>
        </div>
    `;
}

function initializeArticles() {
  const articlesGrid = document.getElementById("articles-grid");
  const searchBox = document.getElementById("article-search");
  const categorySelect = document.getElementById("article-category");

  function renderArticles(data) {
    articlesGrid.innerHTML = "";
    data.forEach((article, index) => {
      const card = document.createElement("div");
      card.className = "article-card";
      const title = currentLanguage === "ar" ? article.ar : article.title;

      card.innerHTML = `
                <div class="article-thumbnail">
                    ${article.emoji}
                </div>
                <div class="article-info">
                    <span class="article-category">${article.category.toUpperCase()}</span>
                    <div class="article-title">${title}</div>
                    <div class="article-source">${article.source}</div>
                    <div class="article-description">${article.desc}</div>
                    <div class="article-date">${article.date}</div>
                </div>
            `;
      card.style.animationDelay = `${index * 0.05}s`;
      articlesGrid.appendChild(card);
    });
  }

  function filterArticles() {
    let filtered = featuredData;
    const searchTerm = searchBox.value.toLowerCase();
    const category = categorySelect.value;

    if (searchTerm) {
      filtered = filtered.filter((article) => {
        const title = currentLanguage === "ar" ? article.ar : article.title;
        return title.toLowerCase().includes(searchTerm);
      });
    }

    if (category !== "all") {
      filtered = filtered.filter((article) => article.category === category);
    }

    renderArticles(filtered);
  }

  searchBox.addEventListener("input", filterArticles);
  categorySelect.addEventListener("change", filterArticles);

  renderArticles(featuredData);
}

function initializeStudio() {
  const uploadForm = document.querySelector(".upload-form");
  const publishBtn = document.querySelector(".publish-btn");

  if (publishBtn) {
    publishBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const message =
        currentLanguage === "ar"
          ? "تم نشر المحتوى بنجاح على جميع المنصات!"
          : "Content published successfully across all platforms!";
      alert(message);
    });
  }
}
