/* =====================================================
   I LOVE CAFÉ - CARLISLE
   Menu data + rendering + basket (quantity steppers)
   ===================================================== */

/* ---------- 1. MENU DATA (exactly as on the printed menu) ---------- */
const MENU = {
  breakfast: {
    items: [
      {
        name: 'Full Cumbrian',
        tags: 'GFA',
        price: 12.95,
        desc: 'Cumberland sausage, back bacon, hashbrown, tomato, mushroom and baked beans with a choice of eggs (poached, fried or scrambled) and sourdough toast.',
        addons: [{ name: 'Add black pudding', price: 1.50 }]
      },
      {
        name: 'Veggie breakfast',
        tags: 'VGA & GFA',
        price: 11.95,
        desc: 'Vegan sausages, roast tomato, mushroom, hashbrown, baked beans, choice of egg (poached, fried or scrambled) and sourdough toast.'
      },
      {
        name: 'Avocado on sourdough toast',
        tags: 'VGA & GFA',
        price: 9.50,
        desc: 'Sliced avocado, roasted tomato, chilli jam, pickled red onion and poached eggs served on sourdough toast.'
      },
      {
        name: 'Eggs benedict',
        tags: 'GFA',
        price: 9.50,
        desc: 'Poached eggs and Cumbrian ham served on sourdough toast with hollandaise sauce.'
      },
      {
        name: 'Eggs florentine',
        tags: 'GFA',
        price: 9.75,
        desc: 'Poached eggs, smoked salmon and spinach served on sourdough toast with hollandaise sauce.'
      },
      {
        name: 'Sausage or bacon roll',
        tags: 'GFA & VGA',
        price: 6.25,
        desc: 'Served in a brioche roll.'
      },
      {
        name: 'Waffles',
        price: 8.95,
        desc: 'Served with streaky bacon and maple syrup.'
      },
      {
        name: 'Mini breakfast',
        price: 7.95,
        desc: 'Back bacon, hashbrown, beans, choice of egg (poached, fried or scrambled) served with sourdough toast.'
      }
    ]
  },

  extras: {
    items: [
      { name: 'Cumberland sausage', price: 2.25 },
      { name: 'Back bacon', price: 2.25 },
      { name: 'Fried, poached or scrambled egg', price: 1.25 },
      { name: 'Black pudding', price: 1.75 },
      { name: 'Roast tomatoes', price: 1.50 },
      { name: 'Baked beans', price: 1.25 },
      { name: 'Hashbrown', price: 1.25 },
      { name: 'Sourdough toast', price: 1.75 }
    ]
  },

  cakes: {
    notes: [
      'See our cabinet for today\u2019s selection.',
      'Can be served warm with custard, pouring cream or ice cream for an extra charge.'
    ],
    sticker: { name: 'Dog ice cream', price: 2.50 }
  },

  kids: {
    items: [
      { name: 'Cheese or ham sandwich', tags: 'VGA & GFA', price: null, desc: 'Served with crisps.' },
      { name: 'Cheese and ham toastie', tags: 'GFA', price: 4.50, desc: 'Served with crisps.' },
      { name: 'Chicken goujons and fries', price: 5.50 },
      { name: 'Beans on toast', tags: 'VGA & GFA', price: 4.25 },
      { name: 'Loaded fries or hashbrowns', price: 5.50, desc: 'Topped with mac and cheese.' }
    ]
  },

  lunch: {
    items: [
      {
        sub: 'Soup',
        name: 'Homemade soup',
        tags: 'VGA & GFA',
        price: 6.50,
        desc: 'See our specials board for our soup of the day. Served with toasted sourdough and butter, or a cheese scone and butter.'
      },
      {
        sub: 'Salads',
        name: 'Greek salad',
        tags: 'GFA & VGA',
        price: 9.95,
        desc: 'Mixed lettuce, Greek olives, feta, tomatoes, cucumber, croutons and dressing.'
      },
      {
        name: 'Halloumi and chilli salad',
        tags: 'GFA',
        price: 10.50,
        desc: 'Mixed lettuce, fried halloumi cheese, tomatoes, cucumber, croutons and chilli dressing.'
      },
      {
        sub: 'Sandwiches & toasties',
        name: 'Tuna toastie',
        tags: 'GFA & VGA',
        price: 8.95,
        desc: 'Tuna and red onion mayonnaise, mature cheddar cheese served on white or brown bread with a salad garnish and coleslaw.'
      },
      {
        name: 'Ham and cheese toastie',
        tags: 'GFA & VGA',
        price: 8.95,
        desc: 'Cumbrian ham and mature cheddar cheese served on white or brown bread with a salad garnish and coleslaw.'
      },
      {
        name: 'Coronation chicken open sandwich',
        tags: 'GFA & VGA',
        price: 9.50,
        desc: 'Chicken, lightly curried mayonnaise and sultanas served on toasted sourdough with a salad garnish and coleslaw.'
      },
      {
        name: 'Smoked salmon and avocado open sandwich',
        tags: 'GFA',
        price: 10.50,
        desc: 'Sliced avocado, smoked salmon, cherry tomato, pickled red onions and rocket served on toasted sourdough with a salad garnish and coleslaw.'
      },
      {
        name: 'Crispy chicken sandwich',
        price: 9.95,
        desc: 'Crispy chicken goujons, rocket, cheese, mayonnaise and chilli jam served in a brioche roll with a salad garnish and coleslaw.'
      },
      {
        sub: 'Loaded',
        name: 'Loaded fries or hashbrowns',
        tags: 'GFA',
        price: 9.95,
        desc: 'Topped with cheese and bacon bits, or Parmesan, Caesar dressing and bacon bits.'
      }
    ]
  },

  bowls: {
    items: [
      {
        name: 'Yogurt berry bowl',
        tags: 'V',
        price: 6.95,
        desc: 'Natural yogurt topped with mixed berries, granola and a drizzle of honey.'
      },
      {
        name: 'Tropical yogurt bowl',
        tags: 'V',
        price: 6.95,
        desc: 'Natural yogurt topped with banana, mango, kiwi, coconut flakes and honey.'
      }
    ],
    script: 'Good food, feel good'
  },

  hot: {
    items: [
      { name: 'Americano', price: 3.20 },
      { name: 'Double espresso', price: 2.75 },
      { name: 'Cortado', price: 3.35 },
      { name: 'Cappuccino', price: 3.50 },
      { name: 'Latte', price: 3.50 },
      { name: 'Flat white', price: 3.50 },
      { name: 'Mocha', price: 3.90 },
      { name: 'Matcha latte', price: 3.90 },
      { name: 'Hot chocy', price: 4.10 },
      { name: 'White hot chocy', price: 4.10 },
      { name: 'Dirty chai', price: 4.10 },
      { name: 'Breakfast tea', price: 2.90 },
      {
        name: 'Speciality tea',
        price: 3.00,
        desc: 'Mixed berry, peppermint, green, earl grey, decaf.'
      }
    ],
    footNote: 'Extra shot 70p &nbsp;|&nbsp; Syrup 70p'
  },

  cold: {
    items: [
      {
        name: 'Milkshakes',
        tags: 'VGA',
        price: 4.60,
        desc: 'Vanilla, strawberry, raspberry, chocolate, banana, salted caramel.'
      },
      { name: 'Iced latte', price: 3.50 },
      {
        name: 'Fizzy',
        price: 3.00,
        desc: 'Coke, diet coke, coke zero, sprite, fanta lemon, vimto.'
      }
    ]
  },

  sides: {
    items: [
      { name: 'Skin on fries', price: 3.25 },
      { name: 'Homemade coleslaw', price: 2.50 },
      { name: 'Halloumi fries with sweet chilli dip', price: 4.95 },
      { name: 'Chunky homemade slaw', price: 2.50 },
      { name: 'Sweet potato crisps', price: 3.25 }
    ]
  }
};


/* ---------- 2. HELPERS ---------- */
const money = n => '\u00A3' + n.toFixed(2);

/* every orderable line, looked up by its basket key */
const CATALOG = {};
(function buildCatalog() {
  Object.keys(MENU).forEach(cat => {
    const section = MENU[cat];
    (section.items || []).forEach(item => {
      const key = cat + ':' + item.name;
      CATALOG[key] = { name: item.name, price: item.price };
      (item.addons || []).forEach(addon => {
        const akey = key + ' \u00B7 ' + addon.name;
        CATALOG[akey] = { name: item.name + ' \u2013 ' + addon.name, price: addon.price };
      });
    });
    if (section.sticker) {
      const key = cat + ':' + section.sticker.name;
      CATALOG[key] = { name: section.sticker.name, price: section.sticker.price };
    }
  });
})();


/* ---------- 3. BASKET STATE (saved in the browser) ---------- */
const BASKET_KEY = 'ilovecafe-basket';
const basket = JSON.parse(localStorage.getItem(BASKET_KEY) || '{}');

function saveBasket() {
  localStorage.setItem(BASKET_KEY, JSON.stringify(basket));
}

function basketCount() {
  return Object.values(basket).reduce((sum, qty) => sum + qty, 0);
}

function basketTotal() {
  return Object.keys(basket).reduce((sum, key) => {
    const line = CATALOG[key];
    return line ? sum + line.price * basket[key] : sum;
  }, 0);
}


/* ---------- 4. RENDERING THE MENU ---------- */
function stepperHTML(key) {
  const name = CATALOG[key].name;
  return `
    <div class="menu-item__stepper" data-key="${key}">
      <button type="button" class="menu-item__step" data-step="-1" aria-label="Remove one ${name}">\u2212</button>
      <span class="menu-item__count">0</span>
      <button type="button" class="menu-item__step" data-step="1" aria-label="Add one ${name}">+</button>
    </div>`;
}

function itemHTML(cat, item) {
  const key = cat + ':' + item.name;
  const hasPrice = item.price !== null && item.price !== undefined;

  const sub = item.sub ? `<div class="menu-group-title">${item.sub}</div>` : '';
  const tags = item.tags ? ` <span class="menu-item__tags">(${item.tags})</span>` : '';
  const price = hasPrice ? `<span class="menu-item__price">${money(item.price)}</span>` : '';
  const stepper = hasPrice ? stepperHTML(key) : '';
  const desc = item.desc ? `<span class="menu-item__description">${item.desc}</span>` : '';

  const addons = (item.addons || []).map(addon => {
    const akey = key + ' \u00B7 ' + addon.name;
    return `
      <div class="menu-addon">
        <span class="menu-addon__name">${addon.name}</span>
        <span class="menu-addon__price">${money(addon.price)}</span>
        ${stepperHTML(akey)}
      </div>`;
  }).join('');

  return `
    ${sub}
    <div class="menu-item${hasPrice ? '' : ' menu-item--no-price'}">
      <span class="menu-item__name">${item.name}${tags}</span>
      ${price}
      ${stepper}
      ${desc}
      ${addons}
    </div>`;
}

function renderMenu() {
  document.querySelectorAll('.menu-items').forEach(container => {
    const cat = container.dataset.category;
    const section = MENU[cat];
    if (!section) return;

    let html = '';

    if (section.notes) {
      html += section.notes.map(n => `<div class="menu-block__note">${n}</div>`).join('');
    }

    if (section.items) {
      html += section.items.map(item => itemHTML(cat, item)).join('');
    }

    if (section.script) {
      html += `<div class="menu-block__script">${section.script}</div>`;
    }

    if (section.footNote) {
      html += `<span class="menu-block__time menu-block__time--foot">${section.footNote}</span>`;
    }

    if (section.sticker) {
      const key = cat + ':' + section.sticker.name;
      html += `
        <div class="menu-sticker">
          <span class="menu-sticker__name">${section.sticker.name}</span>
          <span class="menu-sticker__price">${money(section.sticker.price)}</span>
          ${stepperHTML(key)}
        </div>`;
    }

    container.innerHTML = html;
  });
}


/* ---------- 5. BASKET DRAWER (built by this script) ---------- */
function buildBasket() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="basket-overlay" id="basketOverlay"></div>
    <aside class="basket" id="basketDrawer" role="dialog" aria-modal="true" aria-label="Basket" inert>
      <div class="basket__header">
        <h2 class="basket__title">Basket</h2>
        <button class="basket__close" id="closeBasket" aria-label="Close basket">&times;</button>
      </div>
      <div class="basket__items" id="basketItems"></div>
      <div class="basket__total"><span>Total</span><span id="basketTotal">${money(0)}</span></div>
      <form class="checkout-form checkout-form--open" id="checkoutForm">
        <label class="visually-hidden" for="orderName">Your name</label><input class="checkout-form__input" id="orderName" type="text" name="name" placeholder="Your name" autocomplete="name" required>
        <label class="visually-hidden" for="orderNote">Anything we should know?</label><input class="checkout-form__input" id="orderNote" type="text" name="note" placeholder="Anything we should know?">
        <button class="button" type="submit">Place order</button>
        <p class="checkout-form__demo">Demo only: no order is actually sent.</p>
      </form>
    </aside>
    <div class="message-toast" id="messageToast" role="status" aria-live="polite"></div>`);

  $('#openBasket').on('click', openBasket);
  $('#closeBasket').on('click', closeBasket);
  $('#basketOverlay').on('click', closeBasket);

  $('#checkoutForm').on('submit', function (event) {
    event.preventDefault();
    if (basketCount() === 0) {
      showToast('Your basket is empty');
      return;
    }
    Object.keys(basket).forEach(key => delete basket[key]);
    saveBasket();
    refreshAll();
    closeBasket();
    showToast('Thanks! (Demo: no real order was sent)');
  });
}

let basketOpener = null;

function openBasket() {
  basketOpener = document.activeElement;
  const drawer = document.getElementById('basketDrawer');
  drawer.removeAttribute('inert');
  drawer.classList.add('basket--open');
  $('#basketOverlay').addClass('basket-overlay--open');
  document.getElementById('closeBasket').focus();
}

function closeBasket() {
  const drawer = document.getElementById('basketDrawer');
  drawer.classList.remove('basket--open');
  drawer.setAttribute('inert', '');
  $('#basketOverlay').removeClass('basket-overlay--open');
  if (basketOpener) basketOpener.focus();
}

function renderBasketLines() {
  const $items = $('#basketItems');
  const keys = Object.keys(basket).filter(key => basket[key] > 0);

  if (!keys.length) {
    $items.html('<div class="basket__empty">Your basket is empty \u2665</div>');
  } else {
    $items.html(keys.map(key => {
      const line = CATALOG[key];
      return `
        <div class="basket-line">
          <span class="basket-line__name">${line.name}</span>
          <button class="basket-line__button" data-key="${key}" data-step="-1" aria-label="Remove one ${line.name}">\u2212</button>
          <span class="basket-line__count">${basket[key]}</span>
          <button class="basket-line__button basket-line__button--remove" data-key="${key}" data-step="1" aria-label="Add one ${line.name}">+</button>
          <span class="basket-line__price">${money(line.price * basket[key])}</span>
        </div>`;
    }).join(''));
  }

  $('#basketTotal').text(money(basketTotal()));
}


/* ---------- 6. STEPPER LOGIC (works everywhere) ---------- */
function changeQty(key, step) {
  const current = basket[key] || 0;
  const next = current + step;
  if (next < 0) return;
  if (step > 0) {
    basket[key] = next;
    const line = CATALOG[key];
    showToast(`Added ${line.name}`);
  } else {
    if (next === 0) delete basket[key];
    else basket[key] = next;
  }
  saveBasket();
  refreshAll();
}

function refreshAll() {
  /* every stepper on the page shows its own quantity */
  document.querySelectorAll('.menu-item__stepper').forEach($el => {
    const count = basket[$el.dataset.key] || 0;
    $el.querySelector('.menu-item__count').textContent = count;
    $el.dataset.qty = count;
  });
  $('#basketCount').text(basketCount());
  renderBasketLines();
}

function showToast(message) {
  const $toast = $('#messageToast');
  $toast.text(message).addClass('message-toast--show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => $toast.removeClass('message-toast--show'), 2000);
}


/* ---------- 6b. HOME PAGE EXTRAS ---------- */
const FAVOURITES = [
  { key: 'breakfast:Full Cumbrian', emoji: '\uD83C\uDF73', colour: 'yellow', desc: 'Sausage, bacon, hashbrown, eggs your way and sourdough toast.' },
  { key: 'breakfast:Avocado on sourdough toast', emoji: '\uD83E\uDD51', colour: 'green', desc: 'Avocado, roast tomato, chilli jam and poached eggs.' },
  { key: 'lunch:Halloumi and chilli salad', emoji: '\uD83E\uDD57', colour: 'blue', desc: 'Fried halloumi, crisp salad and a chilli dressing.' },
  { key: 'cakes:Dog ice cream', emoji: '\uD83C\uDF66', colour: 'pink', desc: 'Because your best friend deserves a treat too.' }
];

function renderHighlights() {
  const el = document.getElementById('highlights');
  if (!el) return;
  el.innerHTML = FAVOURITES.map(f => {
    const line = CATALOG[f.key];
    return `
      <article class="highlight-card highlight-card--${f.colour}">
        <div class="highlight-card__emoji" aria-hidden="true">${f.emoji}</div>
        <h3 class="highlight-card__title">${line.name}</h3>
        <p class="highlight-card__description">${f.desc}</p>
        <div class="highlight-card__price">${money(line.price)}</div>
        <button type="button" class="button highlight-card__add" data-key="${f.key}" aria-label="Add ${line.name} to basket">Add to basket</button>
      </article>`;
  }).join('');
}

function startSlider() {
  const slides = document.querySelectorAll('.gallery-slider__slide');
  if (slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('gallery-slider__slide--active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('gallery-slider__slide--active');
  }, 4000);
}

/* open Tuesday to Saturday, 9:00 to 16:00 (UK time) */
function showOpenStatus() {
  const el = document.getElementById('openStatus');
  if (!el) return;
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
  const get = type => parts.find(p => p.type === type).value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  const mins = (Number(get('hour')) % 24) * 60 + Number(get('minute'));
  const openDay = day >= 2 && day <= 6;
  if (openDay && mins >= 540 && mins < 960) {
    el.textContent = 'Open now until 4pm';
    el.classList.add('hero__status--open');
    return;
  }
  const next = (openDay && mins < 540) ? 'today' : (day >= 1 && day <= 5) ? 'tomorrow' : 'Tuesday';
  el.textContent = `Closed, opens ${next} at 9am`;
  el.classList.add('hero__status--closed');
}


/* ---------- 7. WIRE EVERYTHING UP ---------- */
$(function () {
  renderMenu();
  renderHighlights();
  startSlider();
  showOpenStatus();
  buildBasket();
  refreshAll();

  /* one click handler for every - and + button (menu, add-ons, sticker, basket) */
  $(document).on('click', '.menu-item__step, .basket-line__button', function () {
    const $stepper = $(this).closest('[data-key]');
    changeQty($stepper.data('key'), Number($(this).data('step')));
  });

  /* "Add to basket" buttons on the home page favourites */
  $(document).on('click', '.highlight-card__add', function () {
    changeQty($(this).data('key'), 1);
  });

  /* burger menu on mobile */
  $('#burgerButton').on('click', function () {
    const open = $('#navLinksLeft').toggleClass('navbar__links--open').hasClass('navbar__links--open');
    this.setAttribute('aria-expanded', open);
  });

  /* basket drawer: Escape closes it and Tab stays inside it */
  document.addEventListener('keydown', e => {
    const drawer = document.getElementById('basketDrawer');
    if (!drawer.classList.contains('basket--open')) return;
    if (e.key === 'Escape') closeBasket();
    if (e.key === 'Tab') {
      const items = drawer.querySelectorAll('button, input');
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
});