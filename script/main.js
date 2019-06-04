// Quản lý các framework sử dụng

// Ko nên xài CDN, nên down về up lên

$(function() {
  // Font Awesome
  $("head").append(
    '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">'
  );
  // bootstrap
  $("head").append('<link href="css/bootstrap.min.css" rel="stylesheet">');
  // Material Design Bootstrap
  $("head#shop-html").append('<link href="css/compiled-4.8.2.min.css" rel="stylesheet">');
  $("head#home-html").append('<link href="css/compiled-4.8.2.min.css" rel="stylesheet">');
  // Animate.css
  $("head#home-html").append('<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.1/animate.min.css" rel="stylesheet">');
  // File main.css
  $("head").append('<link rel="stylesheet" href="css/main.css" />');
});

// Ghép menu và footer vào
$(function() {
  $("nav").load("menu.html");
  $("footer").load("footer.html");
});

// Curtain menu
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// End curtain menu

// Số lương - 1 +
$(".increase").click(function() {
  let quant = $("#quantity").html();
  quant = parseInt(quant);
  $("#quantity").html(quant + 1);
});
$(".decrease").click(function() {
  let quant = $("#quantity").html();
  quant = parseInt(quant);
  if (quant >= 2) {
    $("#quantity").html(quant - 1);
  }
});

// Shop.html Data structure
var warehouse = [
  (tuongvoi = [ //Phải giữ nguyên đủ số lượng 6 (id, title, price, desc, link, cardImg)
    { //không thì đổ các detailImg vào sẽ bị lỗi
      id: 1,
      title: "Iro Iro 10cm",
      price: "1.000.000 Đ",
      description:
        'Tên của voi : Iro Iro | Nghệ sĩ: Edith Rollinger-Simon | Triển lãm: Lux-Trier 2013 Inspiration: "Iro Iro là tên dịch sang tiếng Nhật của chú voi và có nghĩa là muôn màu muôn vẻ. Đặc biệt Iro Iro tượng trưng cho vận may và một thế giới đầy màu sắc." Tất cả bản sao của tượng voi Iro Iro đều được làm bằng tay cẩn thận ở Chiang Mai.',
      link: "https://store.elephantparade.com/elephants/carnival/iro-iro-10cm",
      cardImg: "shop_tuongvoi_iroiro-1.png",
      detailImg_1: "shop_tuongvoi_iroiro-1.png",
      detailImg_2: "shop_tuongvoi_iroiro-2.jpg",
      detailImg_3: "shop_tuongvoi_iroiro-3.jpg",
      detailImg_4: "shop_tuongvoi_iroiro-4.jpg"
    },
    {
      id: 2,
      title: "Little Happy (Xiao Le) 10cm",
      price: "1.300.000 Đ",
      description:
        "Elephant Name: Little Happiness ( Xiao le) Artist: Priscilla Teoh-Stoute Inspiration:  A fascinating Chinese art of paper cutting motifs and all the words of blessings make this elephant an auspicious one.",
      link:
        "https://store.elephantparade.com/littlehappy/little-happy-xiao-le-10-cm-54125574",
      cardImg: "shop_tuongvoi_littlehappy-1.jpg",
      detailImg_1: "shop_tuongvoi_littlehappy-1.jpg",
      detailImg_2: "shop_tuongvoi_littlehappy-2.jpg",
      detailImg_3: "shop_tuongvoi_littlehappy-3.jpg",
      detailImg_4: "shop_tuongvoi_littlehappy-4.jpg"
    },
    {
      id: 3,
      title: "Tables Of Discovery 15cm",
      price: "2.350.000 Đ",
      description:
        "Elephant name : Tales of Discovery Artist:  Studio Chiang Mai Parade:  Travelling Herd 2018 Inspiration:  Take a voyage back in time and discover ancient civilizations and cultures.",
      link:
        "https://store.elephantparade.com/talesofdiscovery/tales-of-discovery-15-cm-54125699",
      cardImg: "shop_tuongvoi_tables-1.jpg",
      detailImg_1: "shop_tuongvoi_tables-1.jpg",
      detailImg_2: "shop_tuongvoi_tables-2.jpg",
      detailImg_3: "shop_tuongvoi_tables-3.jpg",
      detailImg_4: "shop_tuongvoi_tables-4.jpg"
    },
    {
      id: 4,
      title: "Bamboo Forest 10cm",
      price: "1.000.000 Đ",
      description:
        "Elephant name : Bamboo Forest Artist:  Chris Chun Parade:  Travelling Herd 2019 Inspiration:  Bamboo is considered to be a symbol of virtue, reflecting the values of Chinese Culture. May the elephant, one day have the same revered status in the whole Asia too!",
      link:
        "https://store.elephantparade.com/bambooforest/bamboo-forest-10-cm-54125694",
      cardImg: "shop_tuongvoi_bamboo-1.jpg",
      detailImg_1: "shop_tuongvoi_bamboo-1.jpg",
      detailImg_2: "shop_tuongvoi_bamboo-2.jpg",
      detailImg_3: "shop_tuongvoi_bamboo-3.jpg",
      detailImg_4: "shop_tuongvoi_bamboo-4.jpg"
    }
  ]),
  (quanao = [
    {
      id: 1,
      title: "Quan ao",
      price: "5.000.000 Đ",
      description:
        'Tên của voi : Iro Iro | Nghệ sĩ: Edith Rollinger-Simon | Triển lãm: Lux-Trier 2013 Inspiration: "Iro Iro là tên dịch sang tiếng Nhật của chú voi và có nghĩa là muôn màu muôn vẻ. Đặc biệt Iro Iro tượng trưng cho vận may và một thế giới đầy màu sắc." Tất cả bản sao của tượng voi Iro Iro đều được làm bằng tay cẩn thận ở Chiang Mai.',
      link: "https://store.elephantparade.com/elephants/carnival/iro-iro-10cm",
      cardImg: "shop_calendar-1.png",
      detailImg_1: "shop_calendar-1.png",
      detailImg_2: "shop_calendar-2.jpg",
      detailImg_3: "shop_calendar-3.jpg",
    },
    {
      id: 2,
      title: "Little Happy (Xiao Le) 10cm",
      price: "1.300.000 Đ",
      description:
        "Elephant Name: Little Happiness ( Xiao le) Artist: Priscilla Teoh-Stoute Inspiration:  A fascinating Chinese art of paper cutting motifs and all the words of blessings make this elephant an auspicious one.",
      link:
        "https://store.elephantparade.com/littlehappy/little-happy-xiao-le-10-cm-54125574",
      cardImg: "shop_tuongvoi_littlehappy-1.jpg",
      detailImg_1: "shop_tuongvoi_littlehappy-1.jpg",
      detailImg_2: "shop_tuongvoi_littlehappy-2.jpg",
      detailImg_3: "shop_tuongvoi_littlehappy-3.jpg",
      detailImg_4: "shop_tuongvoi_littlehappy-4.jpg"
    },
    {
      id: 3,
      title: "Tables Of Discovery 15cm",
      price: "2.350.000 Đ",
      description:
        "Elephant name : Tales of Discovery Artist:  Studio Chiang Mai Parade:  Travelling Herd 2018 Inspiration:  Take a voyage back in time and discover ancient civilizations and cultures.",
      link:
        "https://store.elephantparade.com/talesofdiscovery/tales-of-discovery-15-cm-54125699",
      cardImg: "shop_tuongvoi_tables-1.jpg",
      detailImg_1: "shop_tuongvoi_tables-1.jpg",
      detailImg_2: "shop_tuongvoi_tables-2.jpg",
      detailImg_3: "shop_tuongvoi_tables-3.jpg",
      detailImg_4: "shop_tuongvoi_tables-4.jpg"
    },
    {
      id: 4,
      title: "Bamboo Forest 10cm",
      price: "1.000.000 Đ",
      description:
        "Elephant name : Bamboo Forest Artist:  Chris Chun Parade:  Travelling Herd 2019 Inspiration:  Bamboo is considered to be a symbol of virtue, reflecting the values of Chinese Culture. May the elephant, one day have the same revered status in the whole Asia too!",
      link:
        "https://store.elephantparade.com/bambooforest/bamboo-forest-10-cm-54125694",
      cardImg: "shop_tuongvoi_bamboo-1.jpg",
      detailImg_1: "shop_tuongvoi_bamboo-1.jpg",
      detailImg_2: "shop_tuongvoi_bamboo-2.jpg",
      detailImg_3: "shop_tuongvoi_bamboo-3.jpg",
      detailImg_4: "shop_tuongvoi_bamboo-4.jpg"
    }
  ]),
  (tranhanh = [
    {
      id: 1,
      title: "Iro Iro 10cm",
      price: "1.000.000 Đ",
      description:
        'Tên của voi : Iro Iro | Nghệ sĩ: Edith Rollinger-Simon | Triển lãm: Lux-Trier 2013 Inspiration: "Iro Iro là tên dịch sang tiếng Nhật của chú voi và có nghĩa là muôn màu muôn vẻ. Đặc biệt Iro Iro tượng trưng cho vận may và một thế giới đầy màu sắc." Tất cả bản sao của tượng voi Iro Iro đều được làm bằng tay cẩn thận ở Chiang Mai.',
      link: "https://store.elephantparade.com/elephants/carnival/iro-iro-10cm",
      cardImg: "shop_tuongvoi_iroiro-1.png",
      detailImg_1: "shop_tuongvoi_iroiro-1.png",
      detailImg_2: "shop_tuongvoi_iroiro-2.jpg",
      detailImg_3: "shop_tuongvoi_iroiro-3.jpg",
      detailImg_4: "shop_tuongvoi_iroiro-4.jpg"
    },
    {
      id: 2,
      title: "Little Happy (Xiao Le) 10cm",
      price: "1.300.000 Đ",
      description:
        "Elephant Name: Little Happiness ( Xiao le) Artist: Priscilla Teoh-Stoute Inspiration:  A fascinating Chinese art of paper cutting motifs and all the words of blessings make this elephant an auspicious one.",
      link:
        "https://store.elephantparade.com/littlehappy/little-happy-xiao-le-10-cm-54125574",
      cardImg: "shop_tuongvoi_littlehappy-1.jpg",
      detailImg_1: "shop_tuongvoi_littlehappy-1.jpg",
      detailImg_2: "shop_tuongvoi_littlehappy-2.jpg",
      detailImg_3: "shop_tuongvoi_littlehappy-3.jpg",
      detailImg_4: "shop_tuongvoi_littlehappy-4.jpg"
    },
    {
      id: 3,
      title: "Tables Of Discovery 15cm",
      price: "2.350.000 Đ",
      description:
        "Elephant name : Tales of Discovery Artist:  Studio Chiang Mai Parade:  Travelling Herd 2018 Inspiration:  Take a voyage back in time and discover ancient civilizations and cultures.",
      link:
        "https://store.elephantparade.com/talesofdiscovery/tales-of-discovery-15-cm-54125699",
      cardImg: "shop_tuongvoi_tables-1.jpg",
      detailImg_1: "shop_tuongvoi_tables-1.jpg",
      detailImg_2: "shop_tuongvoi_tables-2.jpg",
      detailImg_3: "shop_tuongvoi_tables-3.jpg",
      detailImg_4: "shop_tuongvoi_tables-4.jpg"
    },
    {
      id: 4,
      title: "Bamboo Forest 10cm",
      price: "1.000.000 Đ",
      description:
        "Elephant name : Bamboo Forest Artist:  Chris Chun Parade:  Travelling Herd 2019 Inspiration:  Bamboo is considered to be a symbol of virtue, reflecting the values of Chinese Culture. May the elephant, one day have the same revered status in the whole Asia too!",
      link:
        "https://store.elephantparade.com/bambooforest/bamboo-forest-10-cm-54125694",
      cardImg: "shop_tuongvoi_bamboo-1.jpg",
      detailImg_1: "shop_tuongvoi_bamboo-1.jpg",
      detailImg_2: "shop_tuongvoi_bamboo-2.jpg",
      detailImg_3: "shop_tuongvoi_bamboo-3.jpg",
      detailImg_4: "shop_tuongvoi_bamboo-4.jpg"
    }
  ]),
  (trangsuc = [
    {
      id: 1,
      title: "Iro Iro 10cm",
      price: "1.000.000 Đ",
      description:
        'Tên của voi : Iro Iro | Nghệ sĩ: Edith Rollinger-Simon | Triển lãm: Lux-Trier 2013 Inspiration: "Iro Iro là tên dịch sang tiếng Nhật của chú voi và có nghĩa là muôn màu muôn vẻ. Đặc biệt Iro Iro tượng trưng cho vận may và một thế giới đầy màu sắc." Tất cả bản sao của tượng voi Iro Iro đều được làm bằng tay cẩn thận ở Chiang Mai.',
      link: "https://store.elephantparade.com/elephants/carnival/iro-iro-10cm",
      cardImg: "shop_tuongvoi_iroiro-1.png",
      detailImg_1: "shop_tuongvoi_iroiro-1.png",
      detailImg_2: "shop_tuongvoi_iroiro-2.jpg",
      detailImg_3: "shop_tuongvoi_iroiro-3.jpg",
      detailImg_4: "shop_tuongvoi_iroiro-4.jpg"
    },
    {
      id: 2,
      title: "Little Happy (Xiao Le) 10cm",
      price: "1.300.000 Đ",
      description:
        "Elephant Name: Little Happiness ( Xiao le) Artist: Priscilla Teoh-Stoute Inspiration:  A fascinating Chinese art of paper cutting motifs and all the words of blessings make this elephant an auspicious one.",
      link:
        "https://store.elephantparade.com/littlehappy/little-happy-xiao-le-10-cm-54125574",
      cardImg: "shop_tuongvoi_littlehappy-1.jpg",
      detailImg_1: "shop_tuongvoi_littlehappy-1.jpg",
      detailImg_2: "shop_tuongvoi_littlehappy-2.jpg",
      detailImg_3: "shop_tuongvoi_littlehappy-3.jpg",
      detailImg_4: "shop_tuongvoi_littlehappy-4.jpg"
    },
    {
      id: 3,
      title: "Tables Of Discovery 15cm",
      price: "2.350.000 Đ",
      description:
        "Elephant name : Tales of Discovery Artist:  Studio Chiang Mai Parade:  Travelling Herd 2018 Inspiration:  Take a voyage back in time and discover ancient civilizations and cultures.",
      link:
        "https://store.elephantparade.com/talesofdiscovery/tales-of-discovery-15-cm-54125699",
      cardImg: "shop_tuongvoi_tables-1.jpg",
      detailImg_1: "shop_tuongvoi_tables-1.jpg",
      detailImg_2: "shop_tuongvoi_tables-2.jpg",
      detailImg_3: "shop_tuongvoi_tables-3.jpg",
      detailImg_4: "shop_tuongvoi_tables-4.jpg"
    },
    {
      id: 4,
      title: "Bamboo Forest 10cm",
      price: "1.000.000 Đ",
      description:
        "Elephant name : Bamboo Forest Artist:  Chris Chun Parade:  Travelling Herd 2019 Inspiration:  Bamboo is considered to be a symbol of virtue, reflecting the values of Chinese Culture. May the elephant, one day have the same revered status in the whole Asia too!",
      link:
        "https://store.elephantparade.com/bambooforest/bamboo-forest-10-cm-54125694",
      cardImg: "shop_tuongvoi_bamboo-1.jpg",
      detailImg_1: "shop_tuongvoi_bamboo-1.jpg",
      detailImg_2: "shop_tuongvoi_bamboo-2.jpg",
      detailImg_3: "shop_tuongvoi_bamboo-3.jpg",
      detailImg_4: "shop_tuongvoi_bamboo-4.jpg"
    }
  ]),
  (luuniem = [
    {
      id: 1,
      title: "Iro Iro 10cm",
      price: "1.000.000 Đ",
      description:
        'Tên của voi : Iro Iro | Nghệ sĩ: Edith Rollinger-Simon | Triển lãm: Lux-Trier 2013 Inspiration: "Iro Iro là tên dịch sang tiếng Nhật của chú voi và có nghĩa là muôn màu muôn vẻ. Đặc biệt Iro Iro tượng trưng cho vận may và một thế giới đầy màu sắc." Tất cả bản sao của tượng voi Iro Iro đều được làm bằng tay cẩn thận ở Chiang Mai.',
      link: "https://store.elephantparade.com/elephants/carnival/iro-iro-10cm",
      cardImg: "shop_tuongvoi_iroiro-1.png",
      detailImg_1: "shop_tuongvoi_iroiro-1.png",
      detailImg_2: "shop_tuongvoi_iroiro-2.jpg",
      detailImg_3: "shop_tuongvoi_iroiro-3.jpg",
      detailImg_4: "shop_tuongvoi_iroiro-4.jpg"
    },
    {
      id: 2,
      title: "Little Happy (Xiao Le) 10cm",
      price: "1.300.000 Đ",
      description:
        "Elephant Name: Little Happiness ( Xiao le) Artist: Priscilla Teoh-Stoute Inspiration:  A fascinating Chinese art of paper cutting motifs and all the words of blessings make this elephant an auspicious one.",
      link:
        "https://store.elephantparade.com/littlehappy/little-happy-xiao-le-10-cm-54125574",
      cardImg: "shop_tuongvoi_littlehappy-1.jpg",
      detailImg_1: "shop_tuongvoi_littlehappy-1.jpg",
      detailImg_2: "shop_tuongvoi_littlehappy-2.jpg",
      detailImg_3: "shop_tuongvoi_littlehappy-3.jpg",
      detailImg_4: "shop_tuongvoi_littlehappy-4.jpg"
    },
    {
      id: 3,
      title: "Tables Of Discovery 15cm",
      price: "2.350.000 Đ",
      description:
        "Elephant name : Tales of Discovery Artist:  Studio Chiang Mai Parade:  Travelling Herd 2018 Inspiration:  Take a voyage back in time and discover ancient civilizations and cultures.",
      link:
        "https://store.elephantparade.com/talesofdiscovery/tales-of-discovery-15-cm-54125699",
      cardImg: "shop_tuongvoi_tables-1.jpg",
      detailImg_1: "shop_tuongvoi_tables-1.jpg",
      detailImg_2: "shop_tuongvoi_tables-2.jpg",
      detailImg_3: "shop_tuongvoi_tables-3.jpg",
      detailImg_4: "shop_tuongvoi_tables-4.jpg"
    },
    {
      id: 4,
      title: "Bamboo Forest 10cm",
      price: "1.000.000 Đ",
      description:
        "Elephant name : Bamboo Forest Artist:  Chris Chun Parade:  Travelling Herd 2019 Inspiration:  Bamboo is considered to be a symbol of virtue, reflecting the values of Chinese Culture. May the elephant, one day have the same revered status in the whole Asia too!",
      link:
        "https://store.elephantparade.com/bambooforest/bamboo-forest-10-cm-54125694",
      cardImg: "shop_tuongvoi_bamboo-1.jpg",
      detailImg_1: "shop_tuongvoi_bamboo-1.jpg",
      detailImg_2: "shop_tuongvoi_bamboo-2.jpg",
      detailImg_3: "shop_tuongvoi_bamboo-3.jpg",
      detailImg_4: "shop_tuongvoi_bamboo-4.jpg"
    }
  ])
];

// Render nội dung các card của shop.html
for (let categories = 0; categories < warehouse.length; categories++) {
  var str = "htmlContent_" + categories + " = ''";
  eval(str);

  for (let products = 0; products < warehouse[categories].length; products++) {
    str = `htmlContent_${categories} += '<div class="card-wrap col-lg-3 col-md-4 col-sm-6 col-12 mt-3">'`;
    eval(str);

    str = `htmlContent_${categories} += '<div class="card only">'`;
    eval(str);

    str = `htmlContent_${categories} += '<div class="view overlay">'`;
    eval(str)
    str = `htmlContent_${categories} += '<img src="images/${warehouse[categories][products].cardImg}" class="card-img-top" alt="${warehouse[categories][products].cardImg}"/>'`;
    eval(str);

    str = `htmlContent_${categories} += '<div class="mask flex-center" style="background: rgba(162,0,0,0.38);">'`;
    eval(str);

    str = `htmlContent_${categories} += '<div class="white-text d-flex align-items-center w-100">'`;
    eval(str);

    str = `htmlContent_${categories} += '<a href="${warehouse[categories][products].link}" target="_blank">'`;
    eval(str);

    str = `htmlContent_${categories} += '<i class="fa fa-cart-plus" aria-hidden="true"></i></a>'`;
    eval(str);

    str = `htmlContent_${categories} += '<i id="detail" onclick="renderContent(${categories}, ${products})" class="fas fa-info-circle" data-toggle="modal" data-target="#modalQuickView" aria-hidden="true"></i>'`;
    eval(str);

    str = `htmlContent_${categories} += '</div></div></div>'`;
    eval(str);

    str = `htmlContent_${categories} += '<div class="card-body">'`;
    eval(str);

    str = `htmlContent_${categories} += '<h5 class="card-title font-weight-bold">${warehouse[categories][products].title}</h5>'`;
    eval(str);

    str = `htmlContent_${categories} += '<p class="card-text">${warehouse[categories][products].price}</p>'`;
    eval(str);

    str = `htmlContent_${categories} += '</div></div></div>'`;
    eval(str);
  }
}

$(document).ready(function () {
  $("div#tuongvoi .row:last").html(htmlContent_0);
  $("div#quanao .row:last").html(htmlContent_1);
  $("div#tranhanh .row:last").html(htmlContent_2);
  $("div#trangsuc .row:last").html(htmlContent_3);
  $("div#luuniem .row:last").html(htmlContent_4);
});



// Render nội dung của modal (product detail)
function renderContent(categories, products) {
  var htmlContent2 = "";
  var htmlContent3 = "";
  var htmlContent4 = "";
  var htmlContent5 = "";
  var htmlContent6 = "";
  var htmlContent7 = "";

  $("#quantity").html(1);

  for (let index = 1; index < Object.keys(warehouse[categories][products]).length - 5 ; index++) {

    if (index != 1) {
      htmlContent2 += `<li data-target="#carousel-thumb" data-slide-to="${index-1}" class="">`;
    } else {
      htmlContent2 += `<li data-target="#carousel-thumb" data-slide-to="${index-1}" class="active">`;
    }

    var img_name = `warehouse[${categories}][${products}].detailImg_${index}`;

    // hàm eval biến img_name từ dạng text (biến string "..." của img_name) thành tên biến

    htmlContent2 += `<img src="images/${eval(img_name)}" width="65"/>`;

    htmlContent2 += "</li>";

    if (index != 1) {
      htmlContent3 += '<div class="carousel-item">';
    } else {
      htmlContent3 += '<div class="carousel-item active">';
    }

    htmlContent3 += `<img class="d-block w-100" src="images/${eval(img_name)}" alt="Slide"/>`;

    htmlContent3 += "</div>";
  };

  htmlContent4 += warehouse[categories][products].title;

  htmlContent5 += warehouse[categories][products].description;

  htmlContent6 += warehouse[categories][products].price;

  htmlContent7 += `<a href="${warehouse[categories][products].link}" target="_blank">MUA NGAY</a>`;

  $("#carousel-indicators").html(htmlContent2);

  $("#carousel-inner").html(htmlContent3);

  $("#modal-name").html(htmlContent4);

  $("#modal-description").html(htmlContent5);

  $("#modal-price").html(htmlContent6);

  $("#mua-ngay").html(htmlContent7);

};





// Render nội dung các card - Section shop - trang home.html
var htmlContent_home = '';
for (let categories = 0; categories < warehouse.length; categories++) {
  // Random product of categories
  let products = Math.floor(Math.random() * warehouse[categories].length);
  let rand = warehouse[categories][products];

  if (categories != 0) {
    htmlContent_home += '<div class="carousel-item">';
  } else {
    htmlContent_home += '<div class="carousel-item active">';
  }

  htmlContent_home +=
  `<div class="col-12 col-md-4">
    <div class="card only mb-2">
      <div class="view overlay">
        <img class="card-img-top" src="images/${rand.cardImg}" alt="Card image cap"/>
        <div class="mask flex-center" style="background: rgba(162,0,0,0.38);">
          <div class="white-text d-flex align-items-center w-100">
            <a href="${rand.link}" target="_blank">
              <i class="fa fa-cart-plus" aria-hidden="true"></i>
            </a>
            <i id="detail" onclick="renderContent(${categories}, ${products})" class="fas fa-info-circle" data-toggle="modal" data-target="#modalQuickView" aria-hidden="true"></i>
          </div> 
        </div>
      </div>
      <div class="card-body">
        <h4 class="card-title font-weight-bold">${rand.title }</h4>
        <p class="card-text">${rand.price}</p>
      </div> 
    </div> 
  </div>
</div>`;
}
$("#carousel-inner-home").html(htmlContent_home);

// Section shop trang home.html
$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});

// Offset scroll to ID
// $('body, html').animate({
//   scrollTop: $('#tuongvoi').offset().top - 56
// }, 1000);

$('#list li .tuongvoi').click(function(e){
  e.preventDefault();
  $('body, html').animate({
      scrollTop: $('#tuongvoi').offset().top - 70
  }, 100);
});
$('#list li .quanao').click(function(e){
  e.preventDefault();
  $('body, html').animate({
      scrollTop: $('#quanao').offset().top - 70
  }, 100);
});
$('#list li .tranhanh').click(function(e){
  e.preventDefault();
  $('body, html').animate({
      scrollTop: $('#tranhanh').offset().top - 70
  }, 100);
});
$('#list li .trangsuc').click(function(e){
  e.preventDefault();
  $('body, html').animate({
      scrollTop: $('#trangsuc').offset().top - 70
  }, 100);
});
$('#list li .luuniem').click(function(e){
  e.preventDefault();
  $('body, html').animate({
      scrollTop: $('#luuniem').offset().top - 70
  }, 100);
});
// Swipe carousel for mobile - Fimlslittlehappy
