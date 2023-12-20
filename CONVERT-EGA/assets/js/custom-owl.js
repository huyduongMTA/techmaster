$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    loop: true, /* Vong lap*/
    margin: 30, /* K/C giua item*/
    nav: true, /* Thanh dieu huong */
    dots: true, /* dau tron dieu huong*/
    autoplay: true, /* Trang tu chay slider*/
    autoplayTimeout: 4000, /* Thoi gian chuyen slider (ms)*/
    responsive: {
      // quy dinh so luong bao nhieu item tren khoang man hinh
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

});