$(document).ready(function() {
  let menuArr = [
    {
      id: 1,
      src: "img1.jpg",
      name: "밀푀유나베",
      people: "3인분",
      cook: "조리 30분",
      spicy1: true,
      spicy2: false,
      spicy3: false,
      spicy4: false,
      hotdeal: true,
      price: 9900,
      type: 2
    },
    {
      id: 2,
      src: "img2.jpg",
      name: "쿳팟퐁커리",
      people: "2인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: true,
      spicy3: false,
      spicy4: false,
      hotdeal: true,
      price: 9900,
      type: 1
    },
    {
      id: 3,
      src: "img3.jpg",
      name: "오리엔탈 유린기",
      people: "3인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: false,
      spicy3: true,
      spicy4: false,
      hotdeal: false,
      price: 28800,
      type: 3,
      type: 2
    },
    {
      id: 4,
      src: "img4.jpg",
      name: "쫄깃한냉우동과 바싹불고기",
      people: "2인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: false,
      spicy3: false,
      spicy4: true,
      hotdeal: false,
      price: 19800,
      type: 1
    },
    {
      id: 5,
      src: "img5.jpg",
      name: "칠리 깐쇼새우",
      people: "3인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: false,
      spicy3: false,
      spicy4: false,
      hotdeal: false,
      price: 23800,
      type: 2
    },
    {
      id: 6,
      src: "img6.jpg",
      name: "방풍나물 아귀찜",
      people: "3인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: false,
      spicy3: false,
      spicy4: false,
      hotdeal: false,
      price: 32800,
      type: 1
    },
    {
      id: 7,
      src: "img7.jpg",
      name: "감바스알아히요",
      people: "3인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: true,
      spicy3: false,
      spicy4: false,
      hotdeal: false,
      price: 20800,
      type: 2
    },
    {
      id: 8,
      src: "img8.jpg",
      name: "평양식 어복쟁반",
      people: "2인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: false,
      spicy3: true,
      spicy4: false,
      hotdeal: false,
      price: 33800,
      type: 1
    },
    {
      id: 9,
      src: "img9.jpg",
      name: "닭고기 덮밥 오야꼬동",
      people: "3인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: false,
      spicy3: false,
      spicy4: false,
      hotdeal: false,
      price: 15800,
      type: 3
    },
    {
      id: 10,
      src: "img10.jpg",
      name: "안동찜닭",
      people: "3인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: true,
      spicy3: false,
      spicy4: false,
      hotdeal: false,
      price: 24800,
      type: 3
    },
    {
      id: 11,
      src: "img11.png",
      name: "스키야키",
      people: "3인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: false,
      spicy3: true,
      spicy4: false,
      hotdeal: false,
      price: 24800,
      type: 4,
      type: 5
    },
    {
      id: 12,
      src: "img12.jpg",
      name: "얼큰소고기국밥",
      people: "2인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: true,
      spicy3: false,
      spicy4: false,
      hotdeal: false,
      price: 15800,
      type: 3
    },
    {
      id: 13,
      src: "img13.jpg",
      name: "서울식육수불고기",
      people: "3인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: false,
      spicy3: false,
      spicy4: true,
      hotdeal: false,
      price: 15800,
      type: 4,
      type: 1
    },
    {
      id: 14,
      src: "img14.jpg",
      name: "새우주꾸미삼겹살",
      people: "2인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: false,
      spicy3: true,
      spicy4: false,
      hotdeal: false,
      price: 29800,
      type: 1
    },
    {
      id: 15,
      src: "img15.jpg",
      name: "쿵팟퐁커리",
      people: "3인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: true,
      spicy3: false,
      spicy4: false,
      hotdeal: false,
      price: 19800,
      type: 4
    },
    {
      id: 16,
      src: "img16.jpg",
      name: "밀푀유나베",
      people: "2인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: true,
      spicy3: false,
      spicy4: false,
      hotdeal: false,
      price: 24800,
      type: 5
    },
    {
      id: 17,
      src: "img17.jpg",
      name: "남한산성식 닭볶음탕",
      people: "3인분",
      cook: "조리 20분",
      spicy1: false,
      spicy2: true,
      spicy3: false,
      spicy4: false,
      hotdeal: false,
      price: 23000,
      type: 2
    }
  ];

  let weekend = ["일", "월", "화", "수", "목", "금", "토"];

  let daily = [];
  let week = [];

  let today = new Date();
  let newdate = new Date(today);
  newdate.setDate(newdate.getDate() + 3);

  let nd, date, yoil, month;

  for (let i = 0; i < 5; i++) {
    newdate.setDate(newdate.getDate() + 1);
    nd = new Date(newdate);
    date = nd.getDate();
    month = nd.getMonth() + 1;
    yoil = getWeekend(nd.getDay());
    daily.push(date);
    week.push(yoil);

    $(".week_yoil")
      .eq(i)
      .text(yoil);
    $(".week_date")
      .eq(i)
      .text(date);
  }

  function getWeekend(date) {
    return weekend[date];
  }

  deliveryTotal();

  $(document).on("click", ".week_li_total", function() {
    deliveryTotal();
    $(".week_li").removeClass("week_check");
    $(".week_li_total").addClass("week_check");
    deliveryMenu();
  });

  function deliveryTotal() {
    $(".delivery_date").text(
      month +
        "월 " +
        daily[0] +
        "일 ~" +
        month +
        "월 " +
        daily[4] +
        "일 배송 가능한 메뉴입니다."
    );

    $(".delivery_end").text("COOKIT의 주문마감은 오전 7시입니다.");
  }

  deliveryDay(0);
  deliveryDay(1);
  deliveryDay(2);
  deliveryDay(3);
  deliveryDay(4);

  function deliveryDay(num) {
    $(document).on("click", ".week_li" + (num + 1), function() {
      if (num < 0) {
        num = 5;
      }
      $(".delivery_date").text(
        month +
          "월 " +
          daily[num] +
          "일 " +
          week[num] +
          "요일 배송 가능한 메뉴입니다."
      );
      $(".delivery_end").text(
        "주문마감은 " + month + "월 " + (daily[num] - 1) + "일 오전 7시입니다."
      );
      $(".week_li").removeClass("week_check");
      $(".week_li" + (num + 1)).addClass("week_check");
      deliveryMenu();
    });
  }

  // delivery menu

  deliveryMenu();

  function deliveryMenu() {
    let html = "";
    for (let i = 0; i < menuArr.length; i++) {
      hotdeal = menuArr[i].hotdeal ? "<span class='hotdeal'>핫딜*</span>" : "";
      spicy2 = menuArr[i].spicy2
        ? "<div class='spicy_img spicy_img2'></div><span class='spicy spicy1'>약간 매운맛</span>"
        : "";
      spicy3 = menuArr[i].spicy3
        ? "<div class='spicy_img spicy_img3'></div><span class='spicy spicy2'>적당히 매운맛</span>"
        : "";
      spicy4 = menuArr[i].spicy4
        ? "<div class='spicy_img spicy_img4'></div><span class='spicy spicy3'>아주 매운맛</span>"
        : "";

      text =
        "<div class='menus_menu'><img class='menus_img' src='./images/products/" +
        menuArr[i].src +
        "' / >" +
        "<span class='menus_people'>" +
        menuArr[i].people +
        "</span><span class='menus_cook'>" +
        menuArr[i].cook +
        "</span>" +
        spicy2 +
        spicy3 +
        spicy4 +
        "<p class='menus_name'>" +
        menuArr[i].name +
        "</p><p class='menus_price'>" +
        hotdeal +
        menuArr[i].price +
        "원</p></div>";
      html = html + text;
    }
    $(".delivery_menus").html(html);
  }
});
