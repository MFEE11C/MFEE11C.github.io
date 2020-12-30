// navbar 模板 
// 用 backtick 包住要傳到 html 的 模板

const navTemplate = document.createElement('template');
navTemplate.innerHTML = 
 
`

<!-- Bootstrap 4 CDN -->
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>

<!-- navbar -->
<nav
      class="navbar navbar-expand-lg navbar-light"
      style="height: 100px; background-color: #d0d9d4"
    >
      <a class="navbar-brand" href="#">HONKI模板</a>
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
            <a class="nav-link" href="#">Link</a>
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

  <!-- Bootstrap 4 CDN JS -->
  <script
    src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"
  ></script>

`

document.getElementById('footerTemp').appendChild(footerTemplate.content);