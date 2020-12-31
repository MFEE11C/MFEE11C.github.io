// navbar 模板 
// 用 backtick 包住要傳到 html 的 模板

const navTemplate = document.createElement('template');
navTemplate.innerHTML = 
 
`

<nav
      class="navbar navbar-expand-lg navbar-light"
      style="height: 100px; background-color: #d0d9d4"
    >
      <a class="navbar-brand" href="/index-01-template.html">HONKI模板</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/MFEE11C/MFEE11C.github.io/"
              >Repo</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/members/register.html">二手書</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/members/register.html">註冊</a>
          </li>
        </ul>
      </div>
    </nav>

`

document.getElementById('navbarTemp').appendChild(navTemplate.content);


// -------------------- 分隔線 --------------------


// footer
// 用 backtick 包住要傳到 html 的 模板

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = 

`
<nav
      class="navbar navbar-light"
      style="height: 464px; background-color: #d0d9d4"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Footer</a>
      </div>
    </nav>

`

document.getElementById('footerTemp').appendChild(footerTemplate.content);