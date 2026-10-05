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

function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
}

function showProductDetails() {

    const productId = getProductId();

    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (!product) {
        document.getElementById("product-name").textContent =
            "Product not found";

        return;
    }

    document.getElementById("product-image").src = product.image;

    document.getElementById("product-name").textContent =
        product.name;

    document.getElementById("product-price").textContent =
        "৳ " + product.price;

    document.getElementById("product-description").textContent =
        product.description;

    const buyButton = document.getElementById("buy-button");

    if (product.buyLink) {
        buyButton.href = product.buyLink;
        buyButton.style.display = "inline-block";
    } else {
        buyButton.style.display = "none";
    }
}

showProductDetails();
