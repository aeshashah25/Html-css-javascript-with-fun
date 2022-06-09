 let filterproducts = [...products]



 const displayproducts = () => {
     const container = document.querySelector(".products-container");
     if (filterproducts.length < 1) {
         container.innerHTML = "no products"
     } else {
         container.innerHTML = filterproducts.map((data) => {
             const { id, title, company, image, price } = data;
             return `<article class="product">
             <img src="${image}" class="product-img img" alt="" />
             <footer>
                 <h5 class="product-name">${title}</h5>
                 <span class="product-price">${price}</span>
             </footer>
         </article>`
         }).join('')
     }
 }

 displayproducts();

 const search = document.querySelector('.search-input');
 search.addEventListener('keyup', (e) => {

     filterproducts = products.filter((f) => {
         return f.title.toLowerCase().includes(search.value);
     });

     console.log(filterproducts);
     displayproducts();

 })

 let com = products.map(y => y.company);
 console.log(com);
 let unicompany = ["All", ...new Set(com)];
 console.log(unicompany);

 displaycompanies = () => {
     const buttonelement = document.querySelector(".companies")
     buttonelement.innerHTML = unicompany.map((e) => {
         return `<button class = "company-btn" >${e}</button>`

     }).join('');


 }
 displaycompanies();


 /*myFilter = (a) => {
     if (a == "All")
         filterproducts = [...products]
     else
         filterproducts = products.filter(f => f.company == a);

     displayproducts();

 }



 var mybuttons = document.querySelectorAll('.company-btn');
 mybuttons.forEach((element) => {
     element.addEventListener('click', () => { myFilter(element.textContent) })
 })*/

 myFilter = (a) => {

     if (a.toLowerCase() == "all") {

         filterproducts = [...products]
     } else {

         filterproducts = products.filter((f) => {

             let t = f.company.toLowerCase() == a.toLowerCase();

             return t;

         });
     }

     displayproducts();

 }

 var mybuttons = document.querySelectorAll('.company-btn');

 mybuttons.forEach((ele) => {


     ele.addEventListener('click', () => { myFilter(ele.textContent) })

 })