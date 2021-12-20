// Item
const menu = [
  {
    id: 1,
    title: "cake",
    category: "breakfast",
    price: 16.99,
    image: "./image/cake.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              repudiandae amet vitae fugit molestiae aperiam. Ipsa similique
              `,
  },
  {
    id: 2,
    title: "cake",
    category: "breakfast",
    price: 19.99,
    image: "./image/Screenshot_1.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              repudiandae amet vitae fugit molestiae aperiam. Ipsa similique
              `,
  },
  {
    id: 3,
    title: "cake",
    category: "breakfast",
    price: 13.99,
    image: "./image/cake.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              repudiandae amet vitae fugit molestiae aperiam. Ipsa similique
              `,
  },
  {
    id: 4,
    title: "cake",
    category: "breakfast",
    price: 16.99,
    image: "./image/cake.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              repudiandae amet vitae fugit molestiae aperiam. Ipsa similique
              `,
  },
  {
    id: 5,
    title: "cake",
    category: "breakfast",
    price: 19.99,
    image: "./image/Screenshot_1.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              repudiandae amet vitae fugit molestiae aperiam. Ipsa similique
              `,
  },
  {
    id: 6,
    title: "cake",
    category: "breakfast",
    price: 13.99,
    image: "./image/cake.jpg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              repudiandae amet vitae fugit molestiae aperiam. Ipsa similique
              `,
  },
];

const center=document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded",function(){
    let displaym=menu.map(function(item){
        return `<article class="menu-item">
          <img src=${item.image} class="menu-image" alt="" />
          <div class="info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$ ${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displaym=displaym.join("");
    center.innerHTML=displaym;
});