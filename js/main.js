const products = [
  {
    "src": "./assets/img1.avif",
    "title": "Premium Running Sneakers",
    "currentPrice": 129.99,
    "originalPrice": 159.99,
    "discount": "Save 20%",
    "rating": "\u2605\u2605\u2605\u2605\u2606",
    "reviewCount": 42,
    "description": "Our premium running sneakers combine style and performance with breathable mesh, cushioned soles, and durable rubber outsoles. Perfect for both casual wear and intense workouts.",
    "productDescription": "These premium running sneakers are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
   "productInformation": {
      "Material": "Mesh, Rubber, EVA foam",
      "Weight": "280g (per shoe)",
      "Closure": "Lace-up",
      "HeelHeight": "30mm",
      "ForefootHeight": "20mm"
    }
  },
  {
    "src": "./assets/img2.avif",
    "title": "Stylish Casual Sneakers",
    "currentPrice": 89.99,
    "originalPrice": 109.99,
    "discount": "Save 18%",
    "rating": "\u2605\u2605\u2605\u2606\u2606",
    "reviewCount": 35,
    "description": "Lightweight and flexible sneakers for daily wear. Designed with a sleek look and comfortable fit.",
    "productDescription": "These stylish casual sneakers are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
   
  },
  {
    "src": "./assets/img3.avif",
    "title": "Trail Hiking Shoes",
    "currentPrice": 149.99,
    "originalPrice": 179.99,
    "discount": "Save 17%",
    "rating": "\u2605\u2605\u2605\u2605\u2606",
    "reviewCount": 50,
    "description": "Rugged hiking shoes with water resistance and heavy-duty grip for adventurous trails.",
    "productDescription": "These trail hiking shoes are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
   
  },
  {
    "src": "./assets/img4.avif",
    "title": "Urban Street Sneakers",
    "currentPrice": 99.99,
    "originalPrice": 129.99,
    "discount": "Save 23%",
    "rating": "\u2605\u2605\u2605\u2606\u2606",
    "reviewCount": 18,
    "description": "High-top streetwear sneakers designed for style and comfort in the urban jungle.",
    "productDescription": "These urban street sneakers are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
  
  },
  {
    "src": "./assets/img5.avif",
    "title": "Elite Performance Trainers",
    "currentPrice": 139.99,
    "originalPrice": 169.99,
    "discount": "Save 18%",
    "rating": "\u2605\u2605\u2605\u2605\u2606",
    "reviewCount": 47,
    "description": "Designed for athletes, these trainers feature shock-absorbing midsoles and breathable panels.",
    "productDescription": "These elite performance trainers are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
   
  },
  {
    "src": "./assets/img6.webp",
    "title": "Lightweight Jogging Shoes",
    "currentPrice": 74.99,
    "originalPrice": 94.99,
    "discount": "Save 21%",
    "rating": "\u2605\u2605\u2605\u2606\u2606",
    "reviewCount": 30,
    "description": "Perfect for your morning runs, these shoes offer flexibility and breathability.",
    "productDescription": "These lightweight jogging shoes are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
  
  },
  {
    "src": "./assets/img7.webp",
    "title": "All-Terrain Sports Shoes",
    "currentPrice": 119.99,
    "originalPrice": 149.99,
    "discount": "Save 20%",
    "rating": "\u2605\u2605\u2605\u2605\u2606",
    "reviewCount": 38,
    "description": "Versatile shoes ideal for gym workouts and trail running with excellent arch support.",
    "productDescription": "These all-terrain sports shoes are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
    
  },
  {
    "src": "./assets/img8.webp",
    "title": "Breathable Gym Trainers",
    "currentPrice": 59.99,
    "originalPrice": 79.99,
    "discount": "Save 25%",
    "rating": "\u2605\u2605\u2605\u2606\u2606",
    "reviewCount": 22,
    "description": "Mesh trainers that keep your feet cool and dry during intense workout sessions.",
    "productDescription": "These breathable gym trainers are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
    
  },
  {
    "src": "./assets/img9.webp",
    "title": "Performance Running Shoes",
    "currentPrice": 109.99,
    "originalPrice": 139.99,
    "discount": "Save 21%",
    "rating": "\u2605\u2605\u2605\u2605\u2606",
    "reviewCount": 41,
    "description": "Designed with cutting-edge foam technology for maximum energy return.",
    "productDescription": "These performance running shoes are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
   
  },
  {
    "src": "./assets/img10.webp",
    "title": "Cushioned Everyday Sneakers",
    "currentPrice": 84.99,
    "originalPrice": 104.99,
    "discount": "Save 19%",
    "rating": "\u2605\u2605\u2605\u2606\u2606",
    "reviewCount": 27,
    "description": "Go-to sneakers for daily wear offering optimal cushioning and support.",
    "productDescription": "These cushioned everyday sneakers are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
   
  },
  {
    "src": "./assets/basketball shoes.webp",
    "title": "High-Grip Basketball Shoes",
    "currentPrice": 134.99,
    "originalPrice": 169.99,
    "discount": "Save 21%",
    "rating": "\u2605\u2605\u2605\u2605\u2606",
    "reviewCount": 55,
    "description": "Engineered for court traction and ankle support, ideal for serious players.",
    "productDescription": "These high-grip basketball shoes are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
    
  },
  {
    "src": "./assets/casual sneakers.avif",
    "title": "Minimalist Casual Sneakers",
    "currentPrice": 64.99,
    "originalPrice": 89.99,
    "discount": "Save 28%",
    "rating": "\u2605\u2605\u2605\u2606\u2606",
    "reviewCount": 19,
    "description": "Sleek, minimalist design for everyday comfort and casual fashion.",
    "productDescription": "These minimalist casual sneakers are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.<br/>Features include:- <br/>. Breathable upper materials <br/> - Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
  
  },
  {
    "src": "./assets/trail shoes.jpg",
    "title": "Heavy-Duty Trail Shoes",
    "currentPrice": 149.99,
    "originalPrice": 189.99,
    "discount": "Save 21%",
    "rating": "\u2605\u2605\u2605\u2605\u2606",
    "reviewCount": 44,
    "description": "Tackle any terrain with these tough, weather-resistant trail shoes.",
    "productDescription": "These heavy-duty trail shoes are designed to meet your specific needs with a balance of performance, comfort, and durability. Whether for training, everyday wear, or sports, they feature quality materials and thoughtful design.\n\nFeatures include:\n\n- Breathable upper materials\n- Cushioned midsoles\n- Durable rubber outsoles\n- Supportive fit\n- Stylish design suited for various activities",
    
  }
]










// alert(`material: ${products[0].productInformation.Material}`)


const thumbnail1 = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main__img');
const title = document.querySelector('.product__title');
const currentPrice = document.querySelector('.current__price');
const originalPrice = document.querySelector('.original__price');
const discount = document.querySelector('.product__discount');
const description = document.querySelector('.product__description');
const mainProductDescription = document.querySelector('.main__product__description');

thumbnail1.forEach((thumbnail, index) => {
  thumbnail.dataset.id = index; // dynamically assign id if not in HTML

  thumbnail.addEventListener('click', () => {
    const id = parseInt(thumbnail.dataset.id);
    const product = products[id];

    if (product) {
      mainImage.src = product.src;
      title.textContent = product.title;
      currentPrice.textContent = `$${product.currentPrice}`;
      originalPrice.textContent = `$${product.originalPrice}`;
      discount.textContent = product.discount;
      description.textContent = product.description;
      mainProductDescription.textContent = product.productDescription;
    }
  });
});



const colorButtons = document.querySelectorAll(".colors .color");

colorButtons.forEach(button => {
  button.addEventListener("click", () => {
    colorButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});



const sizeButtons = document.querySelectorAll(".size__option");

sizeButtons.forEach(button => {
  button.addEventListener("click", () => {
    
    sizeButtons.forEach(btn => btn.classList.remove("active"));

   
    button.classList.add("active");
  });
});

//size chart visibility
const openBtn = document.querySelector('#size__chart__btn');
const closeBtn = document.querySelector('.close__chart');
const chart = document.querySelector('.size__chart');

openBtn.addEventListener('click', () => {
  chart.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  chart.classList.remove('active');
});





//quantitty selector
function quantitySelector() {
    const quantityInput = document.querySelector('.quantity__input');
    document.querySelector('.minus').addEventListener('click', () => quantityInput.value--);
    document.querySelector('.plus').addEventListener('click', () => quantityInput.value++);
}
quantitySelector();


document.querySelectorAll('.tab__btn').forEach(button => {
  button.addEventListener('click', () => {
    // console.log("i got clicked");
    const tabId = button.dataset.tab;
    console.log(tabId);
    document.querySelectorAll('.tab__btn, .tab__pane').forEach(el => el.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});



//add to cart
const addToCartBtn = document.querySelector('.add__to__cart__btn, .cart__button');
addToCartBtn.addEventListener('click', () => {
  alert('Item added to cart!');
});

document.querySelector('.cart__button').addEventListener('click', () => {
  alert('Bundle added to cart!');
});

