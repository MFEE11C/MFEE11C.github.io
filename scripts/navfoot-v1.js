// navbar 模板 
// 用 backtick 包住要傳到 html 的 模板

const navTemplate = document.createElement('template');
navTemplate.innerHTML = 
 
`
<nav
      class="navbar fixed-top navbar-expand-lg navbar-light"
      style="height: 100px; background-color: #d0d9d4"
    >
      <a class="navbar-brand" href="/">HONKI</a>
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
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li>
            <a
              class="nav-link"
              href="https://github.com/MFEE11C/MFEE11C.github.io"
              >組頁面repo</a
            >
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
      class="navbar fixed-bottom navbar-light"
      style="height: 464px; background-color: #d0d9d4"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Footer</a>
      </div>
    </nav>

`

document.getElementById('footerTemp').appendChild(footerTemplate.content);