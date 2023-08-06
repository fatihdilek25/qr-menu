import { menu } from './db.js'

const detailOut = document.getElementById("detail-out")

const searchParams = new URLSearchParams(window.location.search);

const paramId = searchParams.get('id');

//!menüdeki id sini bildiğimiz elemana erişme

const product = menu.find((item) => item.id === Number(paramId));

// bulunan ürüne göre arayüzü ekrana bas
console.log(product);
detailOut.innerHTML = `<div class="mt-3 d-flex align-items-center justify-content-between">
<a href="index.html">
  <i class="bi bi-house fs-1"></i>
</a>
<div>anasayfa / ${product.category.toLowerCase()} / <span class='text-success'>${product.title.toLowerCase()}</span>
</div>
</div>
<h1 class="text-center m-5 shadow p-2 rounded-2">
${product.desctitle}
</h1>
<div class="d-flex flex-column align-items-center">
<img
  class="img-fluid justify-content-center"  style="max-width: 500px;"
  src="${product.img}"
/>
<div class="d-flex w-100 justify-content-between my-3">
  <h3 class="">Fiyat Bilgisi</h3>
  <h3 class="text-success">${product.price} &#8378;</h3>
</div>
<div class="lead">
    <span class="text-success fw-bold mt-3">${product.category}</span>
  <p>
  ${product.desc2}
  </p>
</div>
</div>
`