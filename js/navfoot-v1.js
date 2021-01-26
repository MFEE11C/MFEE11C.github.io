// navbar 模板
// 用 backtick 包住要傳到 html 的 模板

const navTemplate = document.createElement("template");
navTemplate.innerHTML = `

<nav class="navbar navbar-expand-xl navbar-dark" style="padding: 7px; background-color: #e83015">
    <div class="container col-12">
      <a class="navbar-brand" href="/">

        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="55.532" viewBox="0 0 80 55.532">
          <g id="LOGO" transform="translate(-25 -11.282)">
            <path id="Subtraction_3" data-name="Subtraction 3"
              d="M2135.9-12851.568h0l-20.133-6.541a20.974,20.974,0,0,1-.734-2.467,20.54,20.54,0,0,1-.261-8.065,20.294,20.294,0,0,1,2.705-7.264,19.856,19.856,0,0,1,5.194-5.678,19.51,19.51,0,0,1,7.2-3.312,19.722,19.722,0,0,1,4.446-.511,19.983,19.983,0,0,1,12.393,4.373,20.4,20.4,0,0,1,4.494,5,20.644,20.644,0,0,1,2.7,6.448,20.447,20.447,0,0,1-1.01,12.5l-17,5.521Z"
              transform="translate(-2073.605 12906.064)" fill="#e83015" stroke="#1c1b1b" stroke-width="2" />
            <g id="Group_652" data-name="Group 652" transform="translate(37.428 11.282)">
              <g id="Group_650" data-name="Group 650" transform="translate(-12.428 20.897)">
                <path id="Path_614" data-name="Path 614"
                  d="M74.043,35.745c.368,1.017.559,1.522.956,2.526.436.91.657,1.363,1.107,2.266-.327.239-.489.361-.806.613a9.265,9.265,0,0,1-.905.266,2.7,2.7,0,0,1-.856.087c-.128-.776-.182-1.168-.265-1.961A22.959,22.959,0,0,0,69.3,42.806c.61.716.918,1.072,1.538,1.779-.268.331-.4.5-.655.842-.26.184-.539.361-.838.534a2.952,2.952,0,0,1-.832.345c-.36-.848-.526-1.282-.831-2.168-.85-.739-1.275-1.11-2.123-1.851.127-.241.192-.36.324-.6a6.005,6.005,0,0,1,.518-.433q.343-.261.691-.488a3.285,3.285,0,0,1,.538-.3c.45.663.678.992,1.142,1.643a23.637,23.637,0,0,1,4.136-3.369c-.492-.741-.737-1.111-1.227-1.853.174-.191.262-.285.44-.472a5.306,5.306,0,0,1,.584-.264q.381-.151.761-.271A3,3,0,0,1,74.043,35.745Z"
                  transform="translate(-53.135 -52.649)" fill="#1c1b1b" />
                <path id="Path_615" data-name="Path 615"
                  d="M97.671,27.4a7.28,7.28,0,0,1,.83.133q.439.1.822.217a2.4,2.4,0,0,1,.582.256c-.086,1.443-.113,2.164-.135,3.6-.153.125-.35.267-.586.43s-.486.325-.748.488-.513.312-.75.445a20.978,20.978,0,0,0-3,.875,4.732,4.732,0,0,1-.7.132c-.3.039-.611.071-.942.1s-.629.043-.893.04a1.307,1.307,0,0,1-.547-.084c-.355-1.369-.514-2.061-.793-3.457a5.018,5.018,0,0,1,.42-.532,8.711,8.711,0,0,1,.648-.658c.243-.223.472-.415.682-.575a17.568,17.568,0,0,1,2.661-.967A14.187,14.187,0,0,1,97.671,27.4Zm-3.776,5.893A21.809,21.809,0,0,1,97.6,31.878a4.982,4.982,0,0,0,.172-.86,5.335,5.335,0,0,0,.025-.956,4.692,4.692,0,0,0-.149-.925c-.079-.292-.237-.7-.354-.754a5.9,5.9,0,0,0-2.062.416,5.893,5.893,0,0,0-1.992.76,2.128,2.128,0,0,0-.2,1.015,5,5,0,0,0,.076,1.078,3.62,3.62,0,0,0,.308.961A2.364,2.364,0,0,0,93.895,33.289Z"
                  transform="translate(-67.722 -47.825)" fill="#1c1b1b" />
                <path id="Path_616" data-name="Path 616"
                  d="M126.137,27.979c-.48.968-.714,1.455-1.165,2.434-.359.942-.535,1.415-.88,2.363-.384-.07-.577-.1-.961-.154a8.255,8.255,0,0,1-.774-.467,2.486,2.486,0,0,1-.612-.557c.143-.2.216-.3.364-.5a21.48,21.48,0,0,0-3.612-3.45c-.132.635-.2.952-.316,1.588-.114,1-.167,1.5-.266,2.506-.389.027-.583.045-.969.087a8.367,8.367,0,0,1-.866-.262,2.517,2.517,0,0,1-.732-.39c.338-.832.522-1.246.923-2.066-.018-.789-.026-1.184-.042-1.973-.628.023-.942.042-1.569.1a.564.564,0,0,1-.3-.407.625.625,0,0,1,.111-.448,25.713,25.713,0,0,1,2.924-.089,6.769,6.769,0,0,1,.714.191q.416.133.842.294c.285.107.524.21.719.306a22.094,22.094,0,0,1,3.189,3.082c.117-.139.176-.208.3-.346.251-1.1.377-1.648.63-2.746.247-.006.372-.008.62-.01a5.09,5.09,0,0,1,.569.237q.357.169.692.359A2.88,2.88,0,0,1,126.137,27.979Z"
                  transform="translate(-81.323 -47.185)" fill="#1c1b1b" />
                <path id="Path_617" data-name="Path 617"
                  d="M150.421,40.967a.826.826,0,0,1-.016.38,1.008,1.008,0,0,1-.16.361,19.743,19.743,0,0,0-1.717-.986c-.239-.244-.476-.5-.713-.777s-.451-.531-.637-.774a6.356,6.356,0,0,1-.423-.605,22.536,22.536,0,0,0-.386-2.436c-.619-.112-.927-.157-1.539-.228-.385.659-.576.99-.953,1.653-.37-.136-.556-.2-.928-.318a8.332,8.332,0,0,1-.689-.594,2.516,2.516,0,0,1-.514-.654c.646-.618.983-.918,1.684-1.5.433-1.041.65-1.561,1.085-2.6.246.036.369.055.616.1a5.087,5.087,0,0,1,.526.332q.326.229.627.474a2.971,2.971,0,0,1,.421.4c-.583.8-.868,1.2-1.428,2.009a21.673,21.673,0,0,1,6.575,1.079c.266.217.4.327.66.552a1.659,1.659,0,0,1,.058,1.231,21.784,21.784,0,0,0-4.4-1.547c.083.532.2,1.1.326,1.711a14.2,14.2,0,0,0,.484,1.738C149.566,40.34,149.854,40.541,150.421,40.967Z"
                  transform="translate(-97.153 -50.421)" fill="#1c1b1b" />
                <path id="Path_618" data-name="Path 618"
                  d="M164.913,54.874c-.293-.3-.442-.45-.744-.735a9.437,9.437,0,0,1-.4-.871,2.711,2.711,0,0,1-.214-.839c.865-.275,1.307-.4,2.209-.609.833-.758,1.251-1.137,2.086-1.894.217.148.325.224.541.379a5.722,5.722,0,0,1,.36.557q.213.367.4.74a3.393,3.393,0,0,1,.235.572c-.961.5-1.436.758-2.377,1.288C166.161,54.02,165.744,54.3,164.913,54.874Z"
                  transform="translate(-109.751 -60.843)" fill="#1c1b1b" />
                <path id="Path_612" data-name="Path 612"
                  d="M110.277,83.247l-3.384-5.571C96.065,82.413,86.925,88.54,79.648,96.187c-6.754-8.146-15.467-14.907-25.956-20.4L49.948,81.1a322.256,322.256,0,0,1,29.37,24.875l.009-.013.007.011A319.886,319.886,0,0,1,110.277,83.247Z"
                  transform="translate(-44.113 -75.783)" fill="#fdf3db" />
                <path id="Path_613" data-name="Path 613"
                  d="M108.127,88.842l-4.05-6.007C91.164,87.912,80.27,94.487,71.6,102.7c-8.077-8.787-18.489-16.087-31.018-22.03l-4.457,5.717a379.456,379.456,0,0,1,35.1,26.852l.011-.014.008.012A380.269,380.269,0,0,1,108.127,88.842Z"
                  transform="translate(-36.127 -78.61)" fill="#1c1b1b" />
              </g>
            </g>
          </g>
        </svg>

      </a>
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
    <div class="container col-12">
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
