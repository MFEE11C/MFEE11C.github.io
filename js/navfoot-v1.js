// navbar 模板
// 用 backtick 包住要傳到 html 的 模板

const navTemplate = document.createElement("template");
navTemplate.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-dark" style="padding: 20px; background-color: #e83015">
  <div class="container">
    <a class="navbar-brand" href="/">LOGO</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/pages/bookstore/merch-list.html">所有商品</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/pages/activity/bookmarket.html">活動講座</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/pages/used-books/used-books-index.html">二手書交換</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/pages/old-seasons/os-index.html">過往推薦</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item active mx-2">
          <a class="nav-link" href="/pages/cart/cart-index.html"><i class="fas fa-shopping-cart"></i></a>
        </li>
        <li class="nav-item active mx-2">
          <a class="nav-link" href="/pages/members/register.html"><i class="fas fa-user"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

`;

document.getElementById("navbarTemp").appendChild(navTemplate.content);

// -------------------- 分隔線 --------------------

// footer
// 用 backtick 包住要傳到 html 的 模板

const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `

<nav class="navbar navbar-expand-xl navbar-dark" style="height: 280px; background-color: #F3EEE7">
</nav>
<nav class="navbar navbar-expand-xl navbar-dark" style="height: 80px; background-color: #e83015">
  <div class="container">
    <ul class="navbar-nav mr-auto">
      <a class="navbar-brand mr-auto" href="/pages/staff/staff.html">© HONKI 2020</a>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item active mx-2">
        <a class="nav-link" href="#"><i class="fab fa-instagram"></i></a>
      </li>
      <li class="nav-item active mx-2">
        <a class="nav-link" href="#"><i class="fab fa-twitter"></i></a>
      </li>
      <li class="nav-item active mx-2">
        <a class="nav-link" href="#"><i class="fab fa-facebook-f"></i></a>
      </li>
    </ul>
  </div>
</nav>

`;

document.getElementById("footerTemp").appendChild(footerTemplate.content);
