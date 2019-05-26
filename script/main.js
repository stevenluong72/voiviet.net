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
  $("head#shop-html").append('<link href="css/compiled-4.8.1.min.css" rel="stylesheet">');
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
var products = [
  {
    id: 1,
    title: "Iro Iro 10cm",
    price: "1.000.000 Đ",
    description: 'Tên của voi : Iro Iro | Nghệ sĩ: Edith Rollinger-Simon | Triển lãm: Lux-Trier 2013 Inspiration: "Iro Iro là tên dịch sang tiếng Nhật của chú voi và có nghĩa là muôn màu muôn vẻ. Đặc biệt Iro Iro tượng trưng cho vận may và một thế giới đầy màu sắc." Tất cả bản sao của tượng voi Iro Iro đều được làm bằng tay cẩn thận ở Chiang Mai.',
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
    description: 'Elephant Name: Little Happiness ( Xiao le) Artist: Priscilla Teoh-Stoute Inspiration:  A fascinating Chinese art of paper cutting motifs and all the words of blessings make this elephant an auspicious one.',
    link: "https://store.elephantparade.com/littlehappy/little-happy-xiao-le-10-cm-54125574",
    cardImg: "shop_tuongvoi_littlehappy-1.jpg",
    detailImg_1: "shop_tuongvoi_littlehappy-1.jpg",
    detailImg_2: "shop_tuongvoi_littlehappy-2.jpg",
    detailImg_3: "shop_tuongvoi_littlehappy-3.jpg",
    detailImg_4: "shop_tuongvoi_littlehappy-4.jpg"
  },
  {
    id: 3,
    title: "Iro Iro 10cm",
    price: "1.000.000 Đ",
    description: 'Tên của voi : Iro Iro | Nghệ sĩ: Edith Rollinger-Simon | Triển lãm: Lux-Trier 2013 Inspiration: "Iro Iro là tên dịch sang tiếng Nhật của chú voi và có nghĩa là muôn màu muôn vẻ. Đặc biệt Iro Iro tượng trưng cho vận may và một thế giới đầy màu sắc." Tất cả bản sao của tượng voi Iro Iro đều được làm bằng tay cẩn thận ở Chiang Mai.',
    link: "https://store.elephantparade.com/elephants/carnival/iro-iro-10cm",
    cardImg: "shop_tuongvoi_iroiro-1.png",
    detailImg_1: "shop_tuongvoi_iroiro-1.png",
    detailImg_2: "shop_tuongvoi_iroiro-2.jpg",
    detailImg_3: "shop_tuongvoi_iroiro-3.jpg",
    detailImg_4: "shop_tuongvoi_iroiro-4.jpg"
  },
  {
    id: 4,
    title: "Little Happy (Xiao Le) 10cm",
    price: "1.300.000 Đ",
    description: 'Elephant Name: Little Happiness ( Xiao le) Artist: Priscilla Teoh-Stoute Inspiration:  A fascinating Chinese art of paper cutting motifs and all the words of blessings make this elephant an auspicious one.',
    link: "https://store.elephantparade.com/littlehappy/little-happy-xiao-le-10-cm-54125574",
    cardImg: "shop_tuongvoi_littlehappy-1.jpg",
    detailImg_1: "shop_tuongvoi_littlehappy-1.jpg",
    detailImg_2: "shop_tuongvoi_littlehappy-2.jpg",
    detailImg_3: "shop_tuongvoi_littlehappy-3.jpg",
    detailImg_4: "shop_tuongvoi_littlehappy-4.jpg"
  }
];

var htmlContent = "";

for (let i = 0; i < products.length; i++) {
  htmlContent +=
    '<div class="card-wrap col-lg-3 col-md-4 col-sm-6 col-12 mt-3">';
  htmlContent += '<div class="card">';
  htmlContent += '<div class="view overlay">';
  htmlContent +=
    '<img src="images/' +
    products[i].cardImg +
    '" class="card-img-top" alt="' +
    products[i].cardImg +
    '"/>';

  htmlContent +=
    '<div class="mask flex-center" style="background: rgba(162,0,0,0.38);">';
  htmlContent += '<div class="white-text d-flex w-100">';
  htmlContent += '<i class="fa fa-cart-plus" aria-hidden="true"></i>';
  htmlContent +=
    '<i id="detail" onclick="renderContent(' + i + ')" class="fas fa-info-circle" data-toggle="modal" data-target="#modalQuickView" aria-hidden="true"></i>';
  htmlContent += "</div>";
  htmlContent += "</div>";

  htmlContent += "</div>";

  htmlContent += '<div class="card-body">';
  htmlContent +=
    '<h5 class="card-title font-weight-bold">' + products[i].title + "</h5>";
  htmlContent += '<p class="card-text">' + products[i].price + "</p>";
  htmlContent += "</div>";

  htmlContent += "</div>";
  htmlContent += "</div>";
}

$(document).ready(function () {
  $("div#tuongvoi .row:last").html(htmlContent);
  $("div#quanao .row:last").html(htmlContent);
  $("div#tranhanh .row:last").html(htmlContent);
  $("div#trangsuc .row:last").html(htmlContent);
  $("div#luuniem .row:last").html(htmlContent);
});




function renderContent(id) {
  var htmlContent2 = "";
  var htmlContent3 = "";
  var htmlContent4 = "";
  var htmlContent5 = "";
  var htmlContent6 = "";
  var htmlContent7 = "";

  $("#quantity").html(1);
  htmlContent2 +=
    '<li data-target="#carousel-thumb" data-slide-to="0" class="active">';
  htmlContent2 +=
    '<img src="images/' + products[id].detailImg_1 + '" width="65"/>';
  htmlContent2 += "</li>";

  htmlContent2 +=
    '<li data-target="#carousel-thumb" data-slide-to="1">';
  htmlContent2 +=
    '<img src="images/' + products[id].detailImg_2 + '" width="65"/>';
  htmlContent2 += "</li>";

  htmlContent2 +=
    '<li data-target="#carousel-thumb" data-slide-to="2">';
  htmlContent2 +=
    '<img src="images/' + products[id].detailImg_3 + '" width="65"/>';
  htmlContent2 += "</li>";

  htmlContent2 +=
    '<li data-target="#carousel-thumb" data-slide-to="3">';
  htmlContent2 +=
    '<img src="images/' + products[id].detailImg_4 + '" width="65"/>';
  htmlContent2 += "</li>";

  htmlContent3 += '<div class="carousel-item active">';
  htmlContent3 +=
    '<img class="d-block w-100" src="images/' +
    products[id].detailImg_1 +
    '" alt="First slide"/>';
  htmlContent3 += "</div>";

  htmlContent3 += '<div class="carousel-item">';
  htmlContent3 +=
    '<img class="d-block w-100" src="images/' +
    products[id].detailImg_2 +
    '" alt="First slide"/>';
  htmlContent3 += "</div>";

  htmlContent3 += '<div class="carousel-item">';
  htmlContent3 +=
    '<img class="d-block w-100" src="images/' +
    products[id].detailImg_3 +
    '" alt="First slide"/>';
  htmlContent3 += "</div>";

  htmlContent3 += '<div class="carousel-item">';
  htmlContent3 +=
    '<img class="d-block w-100" src="images/' +
    products[id].detailImg_4 +
    '" alt="First slide"/>';
  htmlContent3 += "</div>";

  htmlContent4 += products[id].title;

  htmlContent5 += products[id].description;

  htmlContent6 += products[id].price;

  htmlContent7 += '<a href="' + products[id].link + '" target="_blank">MUA NGAY</a>'

  $("#carousel-indicators").html(htmlContent2);

  $("#carousel-inner").html(htmlContent3);

  $("#modal-name").html(htmlContent4);

  $("#modal-description").html(htmlContent5);

  $("#modal-price").html(htmlContent6);

  $("#mua-ngay").html(htmlContent7);

};


// Swipe carousel for mobile - Fimlslittlehappy
