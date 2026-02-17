const loadCategory = () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => displayCategory(data));
};
// showing all products
const loadProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => displayProducts(data));
};
loadProducts()
// showing category products
const loadProductsByCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {

            displayProducts(data)
        });
};
loadCategory();

const displayCategory = (categories) => {

    const div = document.getElementById('btn-category');
    div.innerHTML = "";

    const allBtn = document.createElement('button');
    allBtn.className = "btn btn-outline btn-primary";
    allBtn.innerText = "All";
    allBtn.onclick = () => loadProducts(); 
    div.append(allBtn);
    // Capitalize first letter of a string
const upperCase =(a) => a.charAt(0).toUpperCase() + a.slice(1);

    categories.forEach((category) => {
        const button = document.createElement('button');
        button.className = "btn btn-primary";
        button.innerText = upperCase(category);
        button.onclick =() => loadProductsByCategory(category);
        div.append(button);
    });
};