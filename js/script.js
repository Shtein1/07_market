const productData = [
    {
      title: "Мотокоса 43",
      image: "img/1585033288_w600_h600_1585033288.webp",
      partsPay6: true,
      partsPay8: true,
      oldPrice: 5499,
      newPrice: 4497,
      bonusPrice: 4395,
    },
    {
      title: "Елкктричний тример 110",
      image: "img/meb-2000-hd-c-nasadkoj.800x850.jpg",
      partsPay6: true,
      partsPay8: true,
      oldPrice: 5499,
      newPrice: 4497,
      bonusPrice: 4395,
    },
    {
      title: "Електрична газонакосарка 32",
      image: "img/ezp-321s-3-1000x1000.jpg",
      partsPay6: true,
      partsPay8: true,
      oldPrice: 5499,
      newPrice: 4497,
      bonusPrice: 4395,
    },
    {
      title: "Акумуляторний обприскувач",
      image: "img/texac_ta-03-480_34f8eaff.jpg",
      partsPay6: true,
      partsPay8: true,
      oldPrice: 5499,
      newPrice: 4497,
      bonusPrice: 4395,
    },
  ];
  
  const itemsContainer = document.getElementById("items");
  
  productData.forEach((product) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
  
    itemDiv.innerHTML = `
      <div class="item-title">${product.title}</div>
  
      <div class="item-image">
        <img src="${product.image}" alt="${product.title}">
      </div>
  
      <div class="parts-pay">
        ${product.partsPay6 ? '<div><img src="img/lapka.png" alt="">6</div>' : ''}
        ${product.partsPay8 ? '<div><img src="img/4d15326d3a1a5432186d384d396cb85421a4dd82.png" alt="">8</div>' : ''}
      </div>
  
      <div class="price">
        <div><span>${product.oldPrice} </span><sup>грн</sup></div>
        <div><span>${product.newPrice} </span><sup>грн</sup></div>
      </div>
  
      <div class="price bonus">
        <div>Ціна за купоном</div>
        <div><span>${product.bonusPrice} </span><sup>грн</sup></div>
      </div>
    `;
  
    itemsContainer.appendChild(itemDiv);
  });