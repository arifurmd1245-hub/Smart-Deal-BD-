const products = [
    {
        id: 1,
        name: "Smart Product 01",
        price: 499,
        description: "Interesting product description goes here.",
        image: "images/images%20(3).jpeg",
        video: "",
        buyLink: ""
    },

    {
        id: 2,
        name: "Smart Product 02",
        price: 799,
        description: "Interesting product description goes here.",
        image: "images/images%20(2).jpeg",
        video: "",
        buyLink: ""
    }
];

function showProducts() {
    const productList = document.getElementById("product-list");

    if (!productList) return;

    productList.innerHTML = "";

    products.forEach(function(product) {

        const card = document.createElement("div");
        card.className = "product";

        card.innerHTML = `
            <div class="image">
                ${product.image
                    ? `<img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`
                    : "Product Image"
                }
            </div>

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <div class="price">৳ ${product.price}</div>

            <button onclick="viewProduct(${product.id})">
                View Deal
            </button>
        `;

        productList.appendChild(card);
    });
}

function viewProduct(productId) {
    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (!product) return;

    window.location.href = "product.html?id=" + product.id;
}

showProducts();
