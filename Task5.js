const products = {
  tv: [
    {
      name: "Samsung Smart TV",
      desc: "50-inch 4K UHD with Voice Assistant",
      img: "https://tse3.mm.bing.net/th/id/OIP.SZb9v8EnndiMswJZpw5LyAHaFj?pid=Api&P=0&h=180"
    },
    {
      name: "LG OLED TV",
      desc: "42-inch Ultra HD Smart TV",
      img: "https://tse1.mm.bing.net/th/id/OIP.hy8e63VuoUWJ_yiLP6S0PAHaFK?pid=Api&P=0&h=180"
    }
  ],
  ac: [
    {
      name: "Voltas Inverter AC",
      desc: "1.5 Ton 5-Star Split AC",
      img: "https://m.media-amazon.com/images/I/61Ka87z2DSL._AC_.jpg"
    },
    {
      name: "Daikin Smart AC",
      desc: "1 Ton Energy Saving AC",
      img: "https://tse2.mm.bing.net/th/id/OIP.6-ugPtUp_jnaRnqn5AMQbAHaEk?pid=Api&P=0&h=180"
    }
  ],
  kitchen: [
    {
      name: "Prestige Mixer",
      desc: "750W Heavy Duty Mixer Grinder",
      img: "https://tse1.mm.bing.net/th/id/OIP.TNh496vwfKo-Fh3xHl8HgAHaHa?pid=Api&P=0&h=180"
    },
    {
      name: "Philips Induction",
      desc: "Digital Touch Panel with Timer",
      img: "https://tse3.mm.bing.net/th/id/OIP.ONLhABHHEzO0H9qfm_Z90QHaE4?pid=Api&P=0&h=180"
    }
  ],
  mobile: [
    {
      name: "iPhone 14",
      desc: "128GB, 6.1-inch Retina Display",
      img: "https://tse3.mm.bing.net/th/id/OIP.zI_AKaffYlSkb9S0kyLQBAHaHa?pid=Api&P=0&h=180/iphone.jpg"
    },
    {
      name: "Samsung Galaxy S23",
      desc: "256GB, 108MP Camera",
      img: "https://tse3.mm.bing.net/th/id/OIP.Pwk7-Y4ditgSVjOR1hdePAHaHa?pid=Api&P=0&h=180/galaxy.jpg"
    }
  ]
};

function showProducts(category) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  if (!products[category]) {
    container.innerHTML = "<p>No products found in this category.</p>";
    return;
  }

  products[category].forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
    `;
    container.appendChild(card);
  });
}
 document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
  });
