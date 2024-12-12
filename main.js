let products = document.querySelector("#products");

let data = [
  {
    img: "https://news.store.rambler.ru/img/bf7656149ec56040a85055ebdb011cb0?img-format=auto&img-1-resize=height:350,fit:max&img-2-filter=sharpen",
    title: "Burger",
    price: "2$",
  },
  {
    img: "//avatars.mds.yandex.net/i?id=1a61b67cbeea078758c299d95be37b0f_l-5234724-images-thumbs&ref=rim&n=13&w=1080&h=764",
    title: "Danar",
    price: "11$",
  },

  {
    img: "https://avatars.mds.yandex.net/get-mpic/1859063/img_id848631649340187805.jpeg/orig",
    title: "Pitsa",
    price: "15$",
  },
  {
    img: "https://i.ytimg.com/vi/17Q4gdwsUM8/maxresdefault.jpg",
    title: "Lavash",
    price: "11$",
  },
  {
    img: "https://slkfood.ru/wp-content/uploads/2023/03/%D0%A5%D0%BE%D1%82-%D0%B4%D0%BE%D0%B3-2.jpg",
    title: "Hot dog",
    price: "4$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-altay/5098734/2a0000018046a56ed1d4d96525c2e1dfcaec/XXL_height",
    title: "Hot dog",
    price: "6$",
  },
  {
    img: "https://arigator.ru/upload/medialibrary/610/61095a60945a9537334c78057bc4b3f1.jpeg",
    title: "Ramyon",
    price: "7$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-discovery-int/1339925/2a0000018632696459c6c38ebadea67779d7/XXXL",
    title: "Sushi",
    price: "17$",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=659b6633283580126136eb7f12f7fdca_l-5626878-images-thumbs&n=13",
    title: "Free",
    price: "1.3$",
  },
  {
    img: "https://static.tildacdn.com/tild6333-6334-4766-b838-323837653237/_-.jpg",
    title: "diriyaniski",
    price: "1.5$",
  },
  {
    img: "https://freelance.ru/img/portfolio/pics/00/2F/43/3097483.jpg",
    title: "Pepsi",
    price: "1.5$",
  },
  {
    img: "https://i.ytimg.com/vi/s3it-bv42HU/maxresdefault.jpg",
    title: "Coca cola",
    price: "2$",
  },
  {
    img: "https://avatars.mds.yandex.net/get-mpic/6325594/img_id5626053990476888597.jpeg/orig",
    title: "Fanta",
    price: "1$",
  },
  {
    img: "https://i.pinimg.com/736x/44/92/bc/4492bcaa19bc9b68ad04f9cbdcdb4517.jpg",
    title: "Mohitto",
    price: "2.5$",
  },
];

for (let item of data) {
  products.innerHTML += `
   <article class="border rounded-lg bf-whitre overflow-hidden">
          <img src="${item.img}" alt="" class="w-full h-44 object-cover" />
          <div class="p-2">
            <h1 class="text-lg font-medium text-gray-900">${item.title}</h1>
            <h2
              class="text-blue-500 font-bold text-xl my-1"
            >${item.price}</h2>
            <button onCLick="sendMessageToBot('${item.title}', '${item.price}')" class=" text-white p-1 w-full rounded-md mt-2 active:scale-95 duration-300 bg-gray-900 ">Add to card</button>
          </div>
        </article>
`;
}

function sendMessageToBot(title, price) {
  console.log("Tanlov:", title, "Narxi:", price);

  const message = `Sizning tanlovingiz: ${title}, narxi: ${price}`;

  const botToken = "8126944357:AAFXETVRTudt_8xbm6dGQzqllrlgIdemL3g";
  const chatId = "5833556474";

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Bot javobi:", data);
      if (data.ok) {
        console.log("Xabar muvaffaqiyatli yuborildi");
      } else {
        console.error("Xatolik:", data.description);
      }
    })
    .catch((error) => console.error("Xatolik:", error));
}
