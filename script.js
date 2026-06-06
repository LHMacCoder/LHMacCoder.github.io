const productGrid = document.querySelector("#product-grid");
const productTemplate = document.querySelector("#product-card-template");

function getProducts() {
  const translation = window.HaomacI18n?.getTranslation();
  const translatedProducts = translation?.products || [];
  return translatedProducts.map(([name, category, description, status, action], index) => ({
    name,
    category,
    description,
    status,
    action,
    icon: index === 0 ? "assets/launchnest-icon.png" : "",
    link: index === 0 ? "launch-nest.html" : "#about",
  }));
}

function renderProducts() {
  productGrid.replaceChildren();

  getProducts().forEach((product, index) => {
    const fragment = productTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".product-card");
    const icon = fragment.querySelector(".product-icon");
    const link = fragment.querySelector(".product-link");

    card.classList.add("visible");

    if (product.icon) {
      icon.src = product.icon;
      icon.alt = product.name;
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
    link.href = product.link;
    productGrid.append(fragment);
  });
}

renderProducts();
window.addEventListener("haomac:languagechange", renderProducts);

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
    const translation = window.HaomacI18n?.getTranslation();
    form.querySelector(".form-status").textContent =
      translation?.home.formStatus || "感谢关注。订阅服务接入后，我们会第一时间通知你。";
    form.reset();
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();
