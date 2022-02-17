let kanapData = [];

//API REQUEST :
const fecthKanaps = async () => {
  await fetch('http://localhost:3000/api/products')
    .then((res) => res.json())
    .then((Allproducts) => {
      //affichage des produits:
      Allproducts.forEach(
        (product) =>
          (document.querySelector(
            '#items'
          ).innerHTML += `<a href="./product.html?id=${product._id}"/>
                <article>
                <img src="${product.imageUrl}" alt="${product.altTxt}">
                <h3 class="productName">${product.name}</h3>
                <p class="productDescription">${product.description}</p>
                </article>
            </a> `)
      );
    });
};

fecthKanaps();
