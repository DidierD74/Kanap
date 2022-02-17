let kanapData = [];

//API REQUEST :
const fecthKanaps = async () => {
  await fetch('http://localhost:3000/api/products')
    .then((res) => res.json())
    .then((Allproductdata) => (kanapData = Allproductdata));
  console.log(kanapData);
};
fecthKanaps();
