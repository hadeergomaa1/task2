async function basicFetch() {
  const output = document.getElementById("basicOutput");
  output.innerHTML = "Loading...";
  try {
    console.log("Fetching products from DummyJSON...");

    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    console.log(data);
    console.log(data.products);

    // أول 5 منتجات
    output.innerHTML = "";
    data.products.slice(0, 5).forEach(product => {
      output.innerHTML += `
        <div>
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <strong>Price: $${product.price}</strong>
        </div>
      `;
    });

  } catch (error) {
    console.error(error);
    output.innerHTML = "Something went wrong!";
  }
}

// استدعاء الفانكشن
basicFetch();
