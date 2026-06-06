const products = [
  {
    name: "LaunchNest",
    category: "Mac 应用启动器",
    description: "用清晰、快速的网格整理和启动你的所有应用。",
    status: "即将发布",
    icon: "assets/launchnest-icon.png",
    link: "launch-nest.html",
    action: "了解产品",
  },
  {
    name: "Next Utility",
    category: "正在构建",
    description: "又一款专注而贴心的 Mac 工具正在路上。",
    status: "开发中",
    action: "敬请期待",
  },
  {
    name: "Your Better Workflow",
    category: "未来产品",
    description: "我们持续探索能够消除重复、带来专注的新想法。",
    status: "探索中",
    action: "保持关注",
  },
];

const productGrid = document.querySelector("#product-grid");
const productTemplate = document.querySelector("#product-card-template");

products.forEach((product, index) => {
  const fragment = productTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".product-card");
  const icon = fragment.querySelector(".product-icon");
  const link = fragment.querySelector(".product-link");

  if (product.icon) {
    icon.src = product.icon;
    icon.alt = `${product.name} 图标`;
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "placeholder-icon";
    placeholder.textContent = index === 1 ? "+" : "✦";
    icon.replaceWith(placeholder);
    card.classList.add("coming-soon");
  }

  fragment.querySelector(".product-status").textContent = product.status;
  fragment.querySelector(".product-category").textContent = product.category;
  fragment.querySelector(".product-name").textContent = product.name;
  fragment.querySelector(".product-description").textContent = product.description;
  fragment.querySelector(".product-link-text").textContent = product.action;
  link.href = product.link || "#about";
  productGrid.append(fragment);
});

const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.querySelector(".form-status").textContent = "感谢关注。订阅服务接入后，我们会第一时间通知你。";
    form.reset();
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();
