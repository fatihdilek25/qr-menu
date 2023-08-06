import { menu, buttonsData } from './db.js';


//sayfanın yüklenme anını izleme
document.addEventListener('DOMContentLoaded', () => { renderMenuItems(menu), renderButtons('all') });


const menuArea = document.getElementById('menu-area');
const btnArea = document.getElementById('btn-area');


//butona tıklanmayı izler
btnArea.addEventListener('click', searcCategory);


function renderMenuItems(menuItems) {

  //dizideki objeleri temsil eden html oluştur. html yi diziye aktar ve stringe aktar

  let menuHtml = menuItems.map((item) => `<a
    href="./productDetail.html?id=${item.id}"
    id="card"
    class="d-flex flex-column flex-md-row gap-3 text-decoration-none text-black"
  >
    <img
      class="rounded shadow"
      src="${item.img}"
    />
    <div>
      <div class="d-flex justify-content-between">
        <h5>${item.title}</h5>
        <p class="text-success">${item.price} &#8378;</p>
      </div>
      <p class="lead">
        ${item.desc}
      </p>
    </div>
  </a>`);

  menuHtml = menuHtml.join(' ');
  menuArea.innerHTML = menuHtml;
}

//! filtreleme

function searcCategory(e) {
  const category = e.target.dataset.category;

  const filteredMenu = menu.filter((item) => item.category === category)


  if (category === 'all') {
    renderMenuItems(menu)
  } else {
    renderMenuItems(filteredMenu);
  }

  //butonları aktif olma durumuna güncelleme
  renderButtons(category);
}

//! ekrana butonları basacak fonksiyon
function renderButtons(active) {
  btnArea.innerHTML = " ";
  //yeni buton oluştur
  buttonsData.forEach((btn) => {
    //btn elementi oluştur
    const btnEle = document.createElement('button');
    // btn e class ekleme
    btnEle.className = 'btn btn-outline-dark filter-btn';
    //btn nin yazısını ekleme
    btnEle.innerText = btn.text;
    // kategori bilgisini butona eklemek için
    btnEle.dataset.category = btn.value;

    if (btn.value === active) {
      btnEle.classList.add('btn-success', 'text-light');
    }
    // html ye gönder
    btnArea.appendChild(btnEle);
  })
}


