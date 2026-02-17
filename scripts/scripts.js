

// for home page
const loadData = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => disPlayShortData(data));
};
// load products details
const loadDetails = async(id)=>{
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json();
    displayDetails(data);
}
// Load categories from API
const loadCategory = () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => displayCategory(data));
};
// removing active button
const removActive =()=>{
    const removeActiveBtn = document.querySelectorAll('.category-btn');
    removeActiveBtn.forEach((btn)=>{
        btn.classList.remove('active')
    })
}
// showing all products
const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            removActive();
            const allBtn = document.getElementById('all-btn'); // correct ID
            allBtn.classList.add('active');
            displayProducts(data)
        });
};


// showing category products
const loadProductsByCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {
            removActive();
            const clickBtn = document.getElementById(`category-btn-${category}`)
            clickBtn.classList.add('active');
            displayProducts(data)
        });
};



// display category buttons
const displayCategory = (categories) => {

    const div = document.getElementById('btn-category');
    div.innerHTML = "";

    const allBtn = document.createElement('button');
    allBtn.id='all-btn'
    allBtn.className = "btn btn-outline btn-primary category-btn";
    allBtn.innerText = "All";
    allBtn.onclick = () => loadProducts(); 
    div.append(allBtn);
    // Capitalize first letter of a string
const upperCase =(a) => a.charAt(0).toUpperCase() + a.slice(1);

    categories.forEach((category) => {
        const button = document.createElement('button');
        button.id= `category-btn-${category}`
        button.className = "btn btn-outline btn-primary category-btn";
        button.innerText = upperCase(category);
        button.onclick =() => loadProductsByCategory(category);
        div.append(button);
    });
};



// displaying home page cards
const disPlayShortData = (products) => {
  products.slice(0, 3).forEach((product) => {
    const div = document.getElementById("trendin-contents");
    const card = document.createElement('div');
    card.innerHTML = `
  <div class="card bg-base-100 w-96 shadow-sm">
    
    <figure class="w-52 h-52 mx-auto p-4">
      <img 
        src="${product.image}" 
        alt="${product.title}" 
        class="h-full object-contain"
      />
    </figure>

    <div class="card-body">
      <div class="flex justify-between items-center">
        <div class="badge badge-soft badge-primary capitalize">
          ${product.category}
        </div>

        <div class="flex items-center gap-1 text-sm">
          <i class="fa-solid fa-star text-yellow-500"></i>
          <span>${product.rating.rate}</span>
          <span class="text-gray-400">(${product.rating.count})</span>
        </div>
      </div>

      <h2 class="card-title text-base">
        ${product.title.slice(0, 40)}...
      </h2>
      <p class="text-lg font-semibold">
        $${product.price}
      </p>

      <!-- Buttons -->
      <div class="card-actions justify-between mt-3">
        <button class="btn btn-outline btn-sm"><i class="fa-regular fa-eye"></i> Details</button>
        <button class="btn btn-primary btn-sm"><i class="fa-solid fa-cart-shopping"></i
            > Add</button>
      </div>

    </div>
  </div>
`;

    div.append(card);
  });
};

// displaying producs page data
const displayProducts = (products) => {
    const div = document.getElementById("all-products");
    div.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement('div');
    card.innerHTML = `
  <div class="card bg-base-100 w-96 shadow-sm">
    
    <figure class="w-52 h-52 mx-auto p-4">
      <img 
        src="${product.image}" 
        alt="${product.title}" 
        class="h-full object-contain"
      />
    </figure>

    <div class="card-body">
      <div class="flex justify-between items-center">
        <div class="badge badge-soft badge-primary capitalize">
          ${product.category}
        </div>

        <div class="flex items-center gap-1 text-sm">
          <i class="fa-solid fa-star text-yellow-500"></i>
          <span>${product.rating.rate}</span>
          <span class="text-gray-400">(${product.rating.count})</span>
        </div>
      </div>

      <h2 class="card-title text-base">
        ${product.title.slice(0, 40)}...
      </h2>
      <p class="text-lg font-semibold">
        $${product.price}
      </p>

      <!-- Buttons -->
      <div class="card-actions justify-between mt-3">
        <button onclick="loadDetails(${product.id})" class="btn btn-outline btn-sm"><i class="fa-regular fa-eye"></i> Details</button>
        <button class="btn btn-primary btn-sm"><i class="fa-solid fa-cart-shopping"></i
            > Add</button>
      </div>

    </div>
  </div>
`;

    div.append(card);
  });
};

const displayDetails = (details)=>{
    const div = document.getElementById('details-contents');
    div.innerHTML = `
        <div class="hero bg-base-200">
  <div class="hero-content flex-col gap-8">
    <img
      src="${details.image}"
      alt="${details.title}"
      class="w-full h-64 object-contain rounded-lg shadow"
    />
    <div class="flex-1 space-y-4">
      <h1 class="text-3xl font-bold">${details.title}</h1>
      <div class="flex items-center gap-4">
        <span class="badge badge-primary capitalize">${details.category}</span>
        <span class="text-2xl font-semibold text-green-600">$${details.price}</span>
      </div>
      <p class="text-gray-700">${details.description}</p>
      <div class="flex items-center gap-2 text-sm">
        <i class="fa-solid fa-star text-yellow-500"></i>
        <span>${details.rating.rate}</span>
        <span class="text-gray-400">(${details.rating.count} reviews)</span>
      </div>
    </div>
  </div>
</div>

    `
    document.getElementById('my_modal_1').showModal();
}


loadData();
loadProducts()
loadCategory();
