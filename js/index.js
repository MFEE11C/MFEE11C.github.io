
// 包在一個先去確認點擊到 document 的 function 裡，點下去的時候他會重新確認元素存不存在。這時候按鈕應該已經出現了，所以可以抓到。我想應該是這樣啦。 Hans

console.log(document.querySelector(".nav-burger"));

// 檢查 nav-burger class 的元素出現後，才啟用 jQuery 設定的行為
function checkBurger() {
  const navBurger = document.querySelector(".nav-burger");
  if (!navBurger) {
    setTimeout(() => {
      checkBurger();
    }, 500);
    /* 每隔500 milliseconds會檢查一次 */

    console.log("等候中...");
  } else {
    /* do something*/
    console.log(" nav-burger 元素出現");

    $(".nav-burger").on("click", function () {
      $(".wrapper").toggleClass("active");
      $(this).toggleClass("active");
      $("body").toggleClass("active");
      // $(this).siblings().toggleClass("d-none");
    });
  }
}

checkBurger();

// 分頁 Pagination 之 active 與disabled判斷 
$(".page-num").on("click", function () {
  $(".page-num").removeClass("active");
  $(this).addClass("active");
  const hasClass =
    $(this).hasClass("page-start") || $(this).hasClass("page-end");
  console.log(hasClass);
  $(".page-item").removeClass("disabled");
  if ($(".active").hasClass("page-start")) {
    $(".page-left").addClass("disabled");
  } else {
    if ($(".active").hasClass("page-end")) {
      $(".page-right").addClass("disabled");
    } else {
      $(".page-left").removeClass("disabled");
    }
  }
});

$(".page-right").on("click", function () {
  const checkfunRight = $(".active").next().hasClass("page-right");
  const checkfunRightNext = $(".active")
    .next()
    .next()
    .hasClass("page-right");
  if (!checkfunRight === true) {
    $(".page-item").removeClass("disabled");
    $(".active").removeClass("active").next().addClass("active");
    if (checkfunRightNext === true) {
      $(".active").next().addClass("disabled");
    }
  }
});
$(".page-left").on("click", function () {
  const checkfunLeft = $(".active").prev().hasClass("page-left");
  const checkfunLeftNext = $(".active")
    .prev()
    .prev()
    .hasClass("page-left");
  if (!checkfunLeft === true) {
    $(".page-item").removeClass("disabled");
    $(".active").removeClass("active").prev().addClass("active");
    if (checkfunLeftNext === true) {
      $(".active").prev().addClass("disabled");
    }
  }
});

// 搜尋欄下拉式選單

// 檢查 selected class 的元素出現後，才啟用 jQuery 設定的行為
function checkSelected() {
  const honkiNav = document.querySelector("#nav-search-cat-select");
  const navSelected = document.querySelector(".selected");

  // console.log(honkiNav, '\n', navSelected);

  if (!(navSelected.parentNode == honkiNav)) {
    setTimeout(() => {
      checkSelected();
    }, 500);
    /* 每隔500 milliseconds會檢查一次 */
    console.log("沒找到 selected 元素");
    console.log("等候中...");
  } else {
    /* do something*/
    console.log("selected 元素出現");

    // 搜尋欄下拉式選單 jQuery 程式主體
    $(".selected").click(function () {
      const hasClass = $(".select-box").hasClass("d-none");
      console.log(hasClass);
      if (hasClass === true) {
        $(".select-box").removeClass("d-none")
      } else {
        $(".select-box").addClass("d-none")
      }
    });

    $(".used-books").click(function () {
      const usedBookBtn = $(".used-books-text").html();
      const hasClass = $(".select-box").hasClass("d-none");
      $(".select-text").html(usedBookBtn + `&ensp;<i class="fas fa-caret-down"></i>`);
      console.log(hasClass);
      if (hasClass === true) {
        $(".select-box").removeClass("d-none")
      } else {
        $(".select-box").addClass("d-none")
      }
    });

    $(".bookstore").click(function () {
      const bookstoreBtn = $(".bookstore-text").html();
      const hasClass = $(".select-box").hasClass("d-none");
      $(".select-text").html(bookstoreBtn + `&ensp;<i class="fas fa-caret-down"></i>`);
      console.log(hasClass);
      if (hasClass === true) {
        $(".select-box").removeClass("d-none")
      } else {
        $(".select-box").addClass("d-none")
      }
    });
  }
}

checkSelected()
