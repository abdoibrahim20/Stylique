const STORAGE_KEYS = {
    cart: "luxury-outfit-cart",
    theme: "luxury-outfit-theme",
    builder: "luxury-outfit-builder"
};

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

const products = [
    {
        id: "obsidian-turtleneck",
        name: "Obsidian Turtleneck",
        category: "clothing",
        builderSlot: "top",
        price: 189,
        image: "https://images.unsplash.com/photo-1758535768411-13b8802d6731?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
        photoPage: "https://unsplash.com/photos/man-in-turtleneck-and-sunglasses-adjusts-collar-kBlJWz0g5rA",
        alt: "Man in a black turtleneck looking away in a studio portrait",
        description: "A streamlined black knit built for confident layering, evening tailoring, and sharp minimalist dressing.",
        details: ["Fine knit silhouette", "Structured neckline", "Luxury everyday layering"],
        collection: "Noir Atelier",
        mood: "tailored",
        tones: ["black", "charcoal"],
        fit: "slim"
    },
    {
        id: "ivory-reserve-blazer",
        name: "Ivory Reserve Blazer",
        category: "clothing",
        builderSlot: "top",
        price: 264,
        image: "https://images.unsplash.com/photo-1743664611666-1260f13b88f4?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
        photoPage: "https://unsplash.com/photos/grayscale-photo-of-woman-in-white-blazer-u-e22vtyTDI",
        alt: "Woman wearing a white blazer in golden natural light",
        description: "A bright tailored statement that lifts monochrome wardrobes with editorial polish and clean structure.",
        details: ["Tailored lapel line", "Editorial outer layer", "Pairs with dark foundations"],
        collection: "Lumiere City",
        mood: "tailored",
        tones: ["white", "ivory"],
        fit: "structured"
    },
    {
        id: "midnight-column-trousers",
        name: "Midnight Column Trousers",
        category: "clothing",
        builderSlot: "bottom",
        price: 172,
        image: "https://images.unsplash.com/photo-1725610147248-4f20f7b13999?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
        photoPage: "https://unsplash.com/photos/a-person-in-a-black-shirt-and-black-pants-uT2Jm6It2UE",
        alt: "Woman in a black top and black pants in an editorial portrait",
        description: "Clean black trousers with a sleek vertical line, designed to create instant balance beneath elevated tops.",
        details: ["Sharp dark base", "Easy formal pairing", "Refined drape"],
        collection: "Noir Atelier",
        mood: "tailored",
        tones: ["black"],
        fit: "elongated"
    },
    {
        id: "cairo-tailored-pants",
        name: "Cairo Tailored Pants",
        category: "clothing",
        builderSlot: "bottom",
        price: 158,
        image: "https://images.unsplash.com/photo-1568253743410-07dfe800b2df?auto=format&fit=crop&fm=jpg&ixlib=rb-4.0.3&q=80&w=1200",
        photoPage: "https://unsplash.com/photos/womens-black-pants-yz2QedafgsU",
        alt: "Fashion model wearing black tailored pants in a studio lookbook",
        description: "Refined black tailoring inspired by studio lookbooks, cut to keep silhouettes clean and versatile.",
        details: ["Premium lookbook finish", "Balanced structure", "Works with ivory and black tops"],
        collection: "Lumiere City",
        mood: "tailored",
        tones: ["black"],
        fit: "structured"
    },
    {
        id: "monarch-leather-loafers",
        name: "Monarch Leather Loafers",
        category: "shoes",
        builderSlot: "shoes",
        price: 214,
        image: "https://images.unsplash.com/photo-1592168105166-19724e1bf5cd?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
        photoPage: "https://unsplash.com/photos/person-wearing-black-pants-and-black-leather-shoes-vLOfQLis494",
        alt: "Black leather shoes paired with black trousers on a staircase",
        description: "Polished black footwear with a sharp formal edge for luxury tailoring and after-dark dressing.",
        details: ["Glossy black finish", "Elegant formality", "Designed for tailored looks"],
        collection: "Noir Atelier",
        mood: "formal",
        tones: ["black"],
        fit: "sleek"
    },
    {
        id: "urbane-stride-sneakers",
        name: "Urbane Stride Sneakers",
        category: "shoes",
        builderSlot: "shoes",
        price: 196,
        image: "https://images.unsplash.com/photo-1715001750230-49462535892f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
        photoPage: "https://unsplash.com/photos/a-black-and-white-sneaker-with-green-accents-o1SxLkA5L2M",
        alt: "Black and white sneaker with green accents photographed against a plain background",
        description: "A fashion-forward sneaker choice that relaxes tailoring while keeping the outfit deliberate and modern.",
        details: ["Monochrome sports edge", "City-ready contrast", "Lightweight styling anchor"],
        collection: "Lumiere City",
        mood: "modern",
        tones: ["black", "white", "green"],
        fit: "sport-luxe"
    },
    {
        id: "chrono-noir-watch",
        name: "Chrono Noir Watch",
        category: "accessories",
        builderSlot: null,
        price: 248,
        image: "https://images.unsplash.com/photo-1763299213167-0c5ebc1e6d96?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
        photoPage: "https://unsplash.com/photos/black-luxury-chronograph-watch-with-rubber-strap-lUx_aUajm78",
        alt: "Black luxury watch resting on a reflective red surface",
        description: "A dark statement timepiece with bold contrast and premium presence for finishing strong looks.",
        details: ["Black strap profile", "Bold dial contrast", "Luxury accessory energy"],
        collection: "Noir Atelier",
        mood: "refined",
        tones: ["black", "silver"],
        fit: "precision"
    },
    {
        id: "atelier-holdall",
        name: "Atelier Holdall",
        category: "accessories",
        builderSlot: null,
        price: 286,
        image: "https://images.unsplash.com/photo-1758542988969-39a10168b2ce?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
        photoPage: "https://unsplash.com/photos/black-duffle-bag-on-a-floor-RYv-YvLqB6Y",
        alt: "Black leather holdall bag resting near a white wall",
        description: "A sculpted black carry piece that adds travel-ready sophistication to monochrome dressing.",
        details: ["Minimal black body", "Clean carry profile", "Luxury travel finish"],
        collection: "Noir Atelier",
        mood: "refined",
        tones: ["black"],
        fit: "structured"
    },
    {
        id: "signature-tote",
        name: "Signature Tote",
        category: "accessories",
        builderSlot: null,
        price: 154,
        image: "https://images.unsplash.com/photo-1546938576-04917ec516ee?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
        photoPage: "https://unsplash.com/photos/black-tote-bag-9aZC_v4mLwE",
        alt: "Black tote bag with white monogram placed on a light floor",
        description: "A graphic black tote that introduces a softer everyday note without losing the premium mood.",
        details: ["Clean monochrome contrast", "Everyday luxury carry", "Understated visual signature"],
        collection: "Lumiere City",
        mood: "modern",
        tones: ["black", "white"],
        fit: "versatile"
    }
];

const categoryConfig = [
    {
        key: "clothing",
        title: "Clothing",
        description: "Tailored foundations, sharp tops, and refined bottoms built for complete looks.",
        image: "https://images.unsplash.com/photo-1743664611666-1260f13b88f4?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200"
    },
    {
        key: "shoes",
        title: "Shoes",
        description: "Luxury loafers and sport-luxe sneakers that anchor every outfit with confidence.",
        image: "https://images.unsplash.com/photo-1715001750230-49462535892f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200"
    },
    {
        key: "accessories",
        title: "Accessories",
        description: "Timepieces and carry pieces chosen to finish premium wardrobes without clutter.",
        image: "https://images.unsplash.com/photo-1763299213167-0c5ebc1e6d96?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200"
    }
];

const featuredIds = [
    "obsidian-turtleneck",
    "ivory-reserve-blazer",
    "monarch-leather-loafers",
    "chrono-noir-watch"
];

const builderSlots = ["top", "bottom", "shoes"];

const state = {
    shopFilter: "all",
    searchTerm: "",
    cart: loadStorage(STORAGE_KEYS.cart, []),
    theme: loadStorage(STORAGE_KEYS.theme, "dark"),
    builderSelection: sanitizeBuilderSelection(loadStorage(STORAGE_KEYS.builder, {})),
    currentProductId: featuredIds[0]
};

const elements = {
    body: document.body,
    loadingScreen: document.getElementById("loading-screen"),
    siteHeader: document.querySelector(".site-header"),
    menuToggle: document.getElementById("menu-toggle"),
    navLinks: [...document.querySelectorAll("[data-nav-route]")],
    themeToggle: document.getElementById("theme-toggle"),
    cartToggle: document.getElementById("cart-toggle"),
    cartCount: document.getElementById("cart-count"),
    cartDrawer: document.getElementById("cart-drawer"),
    cartItems: document.getElementById("cart-items"),
    cartSubtotal: document.getElementById("cart-subtotal"),
    cartClose: document.getElementById("cart-close"),
    cartCheckout: document.getElementById("cart-checkout"),
    drawerBackdrop: document.getElementById("drawer-backdrop"),
    featuredProducts: document.getElementById("featured-products"),
    homeCategories: document.getElementById("home-categories"),
    shopSearch: document.getElementById("shop-search"),
    shopProducts: document.getElementById("shop-products"),
    shopResultsCount: document.getElementById("shop-results-count"),
    productDetail: document.getElementById("product-detail"),
    builderOptions: {
        top: document.getElementById("builder-top-options"),
        bottom: document.getElementById("builder-bottom-options"),
        shoes: document.getElementById("builder-shoes-options")
    },
    builderPreview: document.getElementById("builder-preview"),
    builderSummary: document.getElementById("builder-summary"),
    builderSuggestions: document.getElementById("builder-suggestions"),
    builderAddOutfit: document.getElementById("builder-add-outfit"),
    builderReset: document.getElementById("builder-reset"),
    checkoutSummary: document.getElementById("checkout-summary"),
    checkoutForm: document.getElementById("checkout-form"),
    checkoutFeedback: document.getElementById("checkout-feedback"),
    contactForm: document.getElementById("contact-form"),
    contactFeedback: document.getElementById("contact-feedback"),
    toastStack: document.getElementById("toast-stack"),
    pages: [...document.querySelectorAll(".page")]
};

initialize();

function initialize() {
    applyTheme();
    renderHome();
    renderShop();
    renderProductDetail(state.currentProductId);
    renderBuilder();
    renderCart();
    renderCheckoutSummary();
    bindEvents();
    handleRoute();
    refreshRevealNodes();
    window.setTimeout(() => {
        elements.loadingScreen.classList.add("is-hidden");
    }, 850);
}

function bindEvents() {
    window.addEventListener("hashchange", handleRoute);

    elements.menuToggle.addEventListener("click", () => {
        const isOpen = elements.siteHeader.classList.toggle("nav-open");
        elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    elements.themeToggle.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        saveStorage(STORAGE_KEYS.theme, state.theme);
        applyTheme();
        showToast(`Theme switched to ${state.theme === "dark" ? "Noir" : "Ivory"} mode.`);
    });

    elements.cartToggle.addEventListener("click", openCartDrawer);
    elements.cartClose.addEventListener("click", closeCartDrawer);
    elements.drawerBackdrop.addEventListener("click", closeCartDrawer);

    elements.cartCheckout.addEventListener("click", () => {
        closeCartDrawer();
        navigateTo("checkout");
    });

    elements.shopSearch.addEventListener("input", (event) => {
        state.searchTerm = event.target.value.trim().toLowerCase();
        renderShop();
    });

    document.addEventListener("click", handleDocumentClick);
    elements.checkoutForm.addEventListener("submit", handleCheckoutSubmit);
    elements.contactForm.addEventListener("submit", handleContactSubmit);
    elements.builderAddOutfit.addEventListener("click", addResolvedOutfitToCart);
    elements.builderReset.addEventListener("click", () => {
        state.builderSelection = {};
        saveStorage(STORAGE_KEYS.builder, state.builderSelection);
        renderBuilder();
        showToast("Outfit builder reset. Start with a fresh selection.");
    });
}

function handleDocumentClick(event) {
    const routeTrigger = event.target.closest("[data-route]");
    if (routeTrigger) {
        navigateTo(routeTrigger.dataset.route);
        return;
    }

    const categoryLink = event.target.closest("[data-category-link]");
    if (categoryLink) {
        state.shopFilter = categoryLink.dataset.categoryLink;
        updateShopFilterButtons();
        renderShop();
        navigateTo("shop");
        return;
    }

    const filterButton = event.target.closest("[data-shop-filter]");
    if (filterButton) {
        state.shopFilter = filterButton.dataset.shopFilter;
        updateShopFilterButtons();
        renderShop();
        return;
    }

    const detailButton = event.target.closest("[data-open-product]");
    if (detailButton) {
        const productId = detailButton.dataset.openProduct;
        state.currentProductId = productId;
        renderProductDetail(productId);
        navigateTo(`product/${productId}`);
        return;
    }

    const addButton = event.target.closest("[data-add-product]");
    if (addButton) {
        addProductToCart(addButton.dataset.addProduct, 1);
        return;
    }

    const removeButton = event.target.closest("[data-remove-product]");
    if (removeButton) {
        removeProductFromCart(removeButton.dataset.removeProduct);
        return;
    }

    const decreaseButton = event.target.closest("[data-decrease-product]");
    if (decreaseButton) {
        updateCartQuantity(decreaseButton.dataset.decreaseProduct, -1);
        return;
    }

    const increaseButton = event.target.closest("[data-increase-product]");
    if (increaseButton) {
        updateCartQuantity(increaseButton.dataset.increaseProduct, 1);
        return;
    }

    const builderButton = event.target.closest("[data-builder-select]");
    if (builderButton) {
        const productId = builderButton.dataset.builderSelect;
        const product = findProduct(productId);
        if (!product || !product.builderSlot) return;
        state.builderSelection[product.builderSlot] = productId;
        saveStorage(STORAGE_KEYS.builder, state.builderSelection);
        renderBuilder();
    }
}

function handleRoute() {
    const hash = window.location.hash.replace(/^#/, "") || "home";
    let page = hash;

    if (hash.startsWith("product/")) {
        page = "product";
        const productId = hash.split("/")[1];
        if (findProduct(productId)) {
            state.currentProductId = productId;
            renderProductDetail(productId);
        } else {
            navigateTo("shop");
            return;
        }
    }

    const validPages = new Set(["home", "shop", "product", "builder", "checkout", "about", "contact", "privacy", "terms"]);
    if (!validPages.has(page)) {
        navigateTo("home");
        return;
    }

    elements.pages.forEach((section) => {
        section.classList.toggle("is-active", section.dataset.page === page);
    });

    elements.navLinks.forEach((link) => {
        const isActive = page === "product" ? link.dataset.navRoute === "shop" : link.dataset.navRoute === page;
        link.classList.toggle("is-active", isActive);
    });

    elements.siteHeader.classList.remove("nav-open");
    elements.menuToggle.setAttribute("aria-expanded", "false");
    updateDocumentTitle(page);
    refreshRevealNodes();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
    elements.featuredProducts.innerHTML = featuredIds.map((id) => createProductCard(findProduct(id))).join("");
    elements.homeCategories.innerHTML = categoryConfig
        .map((category) => `
        <article class="category-card panel" data-reveal>
          <img src="${category.image}" alt="${category.title} category" loading="lazy">
          <div class="category-card-content">
            <p class="eyebrow">Category</p>
            <h3>${category.title}</h3>
            <p>${category.description}</p>
            <button class="button button-secondary" type="button" data-category-link="${category.key}">Explore ${category.title}</button>
          </div>
        </article>
      `).join("");
}

function renderShop() {
    const filteredProducts = getFilteredProducts();
    updateShopFilterButtons();
    elements.shopResultsCount.textContent = `${filteredProducts.length} item${filteredProducts.length === 1 ? "" : "s"} available`;

    if (!filteredProducts.length) {
        elements.shopProducts.innerHTML = `
      <div class="empty-state">
        <p class="eyebrow">No results</p>
        <h3>No pieces match that search.</h3>
        <p>Try a different keyword or switch categories to reveal more of the collection.</p>
      </div>`;
        return;
    }

    elements.shopProducts.innerHTML = filteredProducts.map(createProductCard).join("");
}

function renderProductDetail(productId) {
    const product = findProduct(productId);
    if (!product) return;

    const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 2);

    elements.productDetail.innerHTML = `
    <div class="detail-grid">
      <div class="detail-media" data-reveal>
        <img src="${product.image}" alt="${product.alt}" loading="lazy">
      </div>
      <div class="detail-content">
        <p class="eyebrow">${capitalize(product.category)} / ${product.collection}</p>
        <h2>${product.name}</h2>
        <p class="hero-text">${product.description}</p>
        <div class="product-meta">
          <span>${product.mood}</span>
          <span>${product.fit}</span>
          <span>${product.tones.join(" / ")}</span>
        </div>
        <div class="product-body-top">
          <div>
            <p class="subtle-text">Premium styling piece</p>
            <strong class="product-price">${formatPrice(product.price)}</strong>
          </div>
        </div>
        <div class="detail-actions">
          <button class="button" type="button" data-add-product="${product.id}">Add to Cart</button>
          <button class="button button-secondary" type="button" data-route="shop">Back to Shop</button>
          ${product.builderSlot ? `<button class="button button-secondary" type="button" data-route="builder">Use in Builder</button>` : ""}
        </div>
        <ul class="detail-list">
          ${product.details.map((detail) => `<li>${detail}</li>`).join("")}
        </ul>
        <p class="detail-credit">
          Real editorial image sourced from <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>.
        </p>
      </div>
    </div>
    ${related.length ? `
      <section class="section-header compact-header">
        <div>
          <p class="eyebrow">Related pieces</p>
          <h3>Complete the category.</h3>
        </div>
      </section>
      <div class="product-grid">${related.map(createProductCard).join("")}</div>
    ` : ""}`;
}

function renderBuilder() {
    builderSlots.forEach((slot) => {
        const slotProducts = products.filter((product) => product.builderSlot === slot);
        elements.builderOptions[slot].innerHTML = slotProducts
            .map((product) => createBuilderOption(product, state.builderSelection[slot] === product.id))
            .join("");
    });

    const resolvedSelection = resolveBuilderSelection();
    const selectedProducts = builderSlots.map((slot) => findProduct(resolvedSelection[slot])).filter(Boolean);
    const accessorySuggestions = getAccessorySuggestions(selectedProducts);

    elements.builderPreview.innerHTML = selectedProducts
        .map((product) => `
        <article class="lookboard-card" data-reveal>
          <img src="${product.image}" alt="${product.alt}" loading="lazy">
          <div class="lookboard-card-copy">
            <strong>${product.name}</strong>
            <span>${capitalize(product.builderSlot)} / ${formatPrice(product.price)}</span>
          </div>
        </article>`).join("");

    elements.builderSummary.innerHTML = `
    <strong>${selectedProducts.map((product) => product.name).join(" + ")}</strong>
    <p>${createBuilderSummary(selectedProducts)}</p>`;

    elements.builderSuggestions.innerHTML = accessorySuggestions
        .map((product) => `
        <article class="suggestion-card" data-reveal>
          <img src="${product.image}" alt="${product.alt}" loading="lazy">
          <div class="suggestion-card-body">
            <strong>${product.name}</strong>
            <p>${product.description}</p>
            <button class="button button-secondary" type="button" data-add-product="${product.id}">Add ${formatPrice(product.price)}</button>
          </div>
        </article>`).join("");
}

function renderCart() {
    elements.cartItems.innerHTML = state.cart
        .map((entry) => {
            const product = findProduct(entry.id);
            if (!product) return "";
            return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.alt}" loading="lazy">
          <div class="cart-item-copy">
            <strong>${product.name}</strong>
            <p>${formatPrice(product.price)} each</p>
            <div class="quantity-controls">
              <button type="button" aria-label="Decrease quantity" data-decrease-product="${product.id}">-</button>
              <span>${entry.quantity}</span>
              <button type="button" aria-label="Increase quantity" data-increase-product="${product.id}">+</button>
            </div>
            <button class="remove-item" type="button" data-remove-product="${product.id}">Remove</button>
          </div>
          <strong>${formatPrice(product.price * entry.quantity)}</strong>
        </article>`;
        }).join("");

    if (!state.cart.length) {
        elements.cartItems.innerHTML = `
      <div class="empty-state">
        <p class="eyebrow">Cart is empty</p>
        <h3>No pieces added yet.</h3>
        <p>Browse the collection or build an outfit to start your order.</p>
      </div>`;
    }

    elements.cartSubtotal.textContent = formatPrice(getCartSubtotal());
    elements.cartCount.textContent = String(getCartCount());
    renderCheckoutSummary();
}

function renderCheckoutSummary() {
    if (!state.cart.length) {
        elements.checkoutSummary.innerHTML = `
      <div class="empty-state">
        <p class="eyebrow">Awaiting selection</p>
        <h3>Your summary is empty.</h3>
        <p>Add products from the shop or outfit builder to populate this checkout view.</p>
      </div>`;
        return;
    }

    elements.checkoutSummary.innerHTML = `
    <div class="checkout-summary-list">
      ${state.cart.map((entry) => {
        const product = findProduct(entry.id);
        if (!product) return "";
        return `
            <article class="summary-item">
              <img src="${product.image}" alt="${product.alt}" loading="lazy">
              <div>
                <strong>${product.name}</strong>
                <p class="subtle-text">Qty ${entry.quantity}</p>
              </div>
              <strong>${formatPrice(product.price * entry.quantity)}</strong>
            </article>`;
    }).join("")}
    </div>
    <div class="summary-total">
      <span>Total</span>
      <strong>${formatPrice(getCartSubtotal())}</strong>
    </div>`;
}

function addProductToCart(productId, quantity) {
    const product = findProduct(productId);
    if (!product) return;
    addProductSilently(productId, quantity);
    saveStorage(STORAGE_KEYS.cart, state.cart);
    renderCart();
    showToast(`${product.name} added to cart.`);
}

function addProductSilently(productId, quantity) {
    const entry = state.cart.find((item) => item.id === productId);
    if (entry) {
        entry.quantity += quantity;
    } else {
        state.cart.push({ id: productId, quantity });
    }
    state.cart = state.cart.filter((item) => item.quantity > 0);
}

function removeProductFromCart(productId) {
    const product = findProduct(productId);
    state.cart = state.cart.filter((entry) => entry.id !== productId);
    saveStorage(STORAGE_KEYS.cart, state.cart);
    renderCart();
    if (product) showToast(`${product.name} removed from cart.`);
}

function updateCartQuantity(productId, delta) {
    const entry = state.cart.find((item) => item.id === productId);
    if (!entry) return;
    entry.quantity += delta;
    state.cart = state.cart.filter((item) => item.quantity > 0);
    saveStorage(STORAGE_KEYS.cart, state.cart);
    renderCart();
}

function addResolvedOutfitToCart() {
    const resolvedSelection = resolveBuilderSelection();
    builderSlots.forEach((slot) => {
        if (resolvedSelection[slot]) addProductSilently(resolvedSelection[slot], 1);
    });
    saveStorage(STORAGE_KEYS.cart, state.cart);
    renderCart();
    showToast("Full outfit added to cart.");
}

function handleCheckoutSubmit(event) {
    event.preventDefault();
    if (!state.cart.length) {
        elements.checkoutFeedback.textContent = "Add products before placing a demo order.";
        return;
    }
    if (!elements.checkoutForm.reportValidity()) return;
    const orderNumber = `SQ-${String(Date.now()).slice(-6)}`;
    elements.checkoutFeedback.textContent = `Demo order ${orderNumber} is ready. No payment was processed.`;
    showToast(`Demo checkout completed — order ${orderNumber}.`);
}

function handleContactSubmit(event) {
    event.preventDefault();
    if (!elements.contactForm.reportValidity()) return;
    elements.contactFeedback.textContent = "Message captured. In a production build, this would be sent to client services.";
    elements.contactForm.reset();
    showToast("Contact message recorded.");
}

function getFilteredProducts() {
    return products.filter((product) => {
        const matchesCategory = state.shopFilter === "all" || product.category === state.shopFilter;
        const haystack = `${product.name} ${product.description} ${product.collection} ${product.category} ${product.mood}`.toLowerCase();
        const matchesSearch = !state.searchTerm || haystack.includes(state.searchTerm);
        return matchesCategory && matchesSearch;
    });
}

function createProductCard(product) {
    return `
    <article class="product-card panel" data-reveal>
      <button class="product-image-button" type="button" data-open-product="${product.id}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.alt}" loading="lazy">
          <span class="product-badge">${capitalize(product.category)}</span>
        </div>
      </button>
      <div class="product-body">
        <div class="product-body-top">
          <div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
          </div>
          <span class="product-price">${formatPrice(product.price)}</span>
        </div>
        <div class="product-meta">
          <span>${product.collection}</span>
          <span>${product.mood}</span>
        </div>
        <div class="product-actions">
          <button class="button button-secondary" type="button" data-open-product="${product.id}">Details</button>
          <button class="button" type="button" data-add-product="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>`;
}

function createBuilderOption(product, isSelected) {
    return `
    <button class="builder-option ${isSelected ? "is-selected" : ""}" type="button" data-builder-select="${product.id}">
      <img src="${product.image}" alt="${product.alt}" loading="lazy">
      <div>
        <span class="builder-option-name">${product.name}</span>
        <span class="builder-option-copy">${product.collection} / ${product.mood}</span>
      </div>
      <span class="builder-option-price">${formatPrice(product.price)}</span>
    </button>`;
}

function resolveBuilderSelection() {
    const resolved = { ...state.builderSelection };
    const selectedProducts = builderSlots.map((slot) => findProduct(resolved[slot])).filter(Boolean);

    builderSlots.forEach((slot) => {
        if (!resolved[slot]) {
            const candidate = products
                .filter((product) => product.builderSlot === slot)
                .sort((a, b) => scoreBuilderMatch(b, selectedProducts) - scoreBuilderMatch(a, selectedProducts))[0];
            if (candidate) {
                resolved[slot] = candidate.id;
                selectedProducts.push(candidate);
            }
        }
    });

    return resolved;
}

function scoreBuilderMatch(candidate, anchors) {
    if (!anchors.length) return candidate.collection === "Noir Atelier" ? 8 : 6;
    return anchors.reduce((score, anchor) => {
        let next = score;
        if (candidate.collection === anchor.collection) next += 4;
        if (candidate.mood === anchor.mood) next += 3;
        if (candidate.tones.some((tone) => anchor.tones.includes(tone))) next += 2;
        if (candidate.fit === anchor.fit) next += 1;
        return next;
    }, 0);
}

function getAccessorySuggestions(selectedProducts) {
    return products
        .filter((product) => product.category === "accessories")
        .sort((a, b) => scoreBuilderMatch(b, selectedProducts) - scoreBuilderMatch(a, selectedProducts))
        .slice(0, 2);
}

function createBuilderSummary(selectedProducts) {
    const [top, bottom, shoes] = selectedProducts;
    if (!top || !bottom || !shoes) return "Select your core pieces and the system will complete the look automatically.";
    return `This outfit pairs the ${top.name} with ${bottom.name} and ${shoes.name} for a ${top.collection === bottom.collection ? "cohesive" : "contrasting"} luxury silhouette. Matching accessories are suggested below.`;
}

function openCartDrawer() {
    elements.body.classList.add("drawer-open");
    elements.cartDrawer.setAttribute("aria-hidden", "false");
    elements.drawerBackdrop.hidden = false;
    elements.cartToggle.setAttribute("aria-expanded", "true");
}

function closeCartDrawer() {
    elements.body.classList.remove("drawer-open");
    elements.cartDrawer.setAttribute("aria-hidden", "true");
    elements.drawerBackdrop.hidden = true;
    elements.cartToggle.setAttribute("aria-expanded", "false");
}

function applyTheme() {
    elements.body.dataset.theme = state.theme;
    elements.themeToggle.textContent = state.theme === "dark" ? "Switch to Ivory" : "Switch to Noir";
}

function updateShopFilterButtons() {
    document.querySelectorAll("[data-shop-filter]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.shopFilter === state.shopFilter);
    });
}

function updateDocumentTitle(page) {
    const titles = {
        home: "Stylique | Luxury Outfit Builder & Fashion Store",
        shop: "Shop | Stylique",
        product: "Product Details | Stylique",
        builder: "Outfit Builder | Stylique",
        checkout: "Checkout | Stylique",
        about: "About | Stylique",
        contact: "Contact | Stylique",
        privacy: "Privacy Policy | Stylique",
        terms: "Terms of Service | Stylique"
    };
    document.title = titles[page] || titles.home;
}

function getCartSubtotal() {
    return state.cart.reduce((sum, entry) => {
        const product = findProduct(entry.id);
        return product ? sum + product.price * entry.quantity : sum;
    }, 0);
}

function getCartCount() {
    return state.cart.reduce((sum, entry) => sum + entry.quantity, 0);
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    elements.toastStack.appendChild(toast);
    window.setTimeout(() => toast.remove(), 3200);
}

function navigateTo(route) {
    window.location.hash = route;
}

function findProduct(productId) {
    return products.find((product) => product.id === productId);
}

function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatPrice(value) {
    return formatter.format(value);
}

function loadStorage(key, fallback) {
    try {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}

function saveStorage(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // Ignore localStorage failures in restricted environments.
    }
}

function sanitizeBuilderSelection(selection) {
    if (!selection || typeof selection !== "object") return {};
    const sanitized = {};
    builderSlots.forEach((slot) => {
        const product = findProduct(selection[slot]);
        if (product && product.builderSlot === slot) sanitized[slot] = product.id;
    });
    return sanitized;
}

function refreshRevealNodes() {
    document.querySelectorAll("[data-reveal]").forEach((node, index) => {
        node.classList.remove("is-visible");
        window.setTimeout(() => node.classList.add("is-visible"), Math.min(index * 40, 240));
    });
}