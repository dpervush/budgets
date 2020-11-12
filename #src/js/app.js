@@include('files/regular.js', {})
@@include('files/script.js', {})
@@include('files/functions.js', {})
@@include('files/forms.js', {})
@@include('files/scroll.js', {})
@@include('../../node_modules/slick-carousel/slick/slick.js', {})


$(".slider__wrapper").slick({
  infinite: true,
  slidesToShow: 2,
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.13286e-07 8.5L13.5 0.272759L13.5 16.7272L1.13286e-07 8.5Z" fill="#A0A0A0" /></svg></button>',
  nextArrow: '<button type="button" class="slick-arrow slick-next"><?xml version="1.0" encoding="UTF-8"?><svg fill="none" width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg"><path d="m14 8.5-13.5 8.2272 2e-6 -16.454 13.5 8.2272z" fill="url(#a)"/><defs><linearGradient id="a" x1="12.772" x2="3.812" y1="-.61736" y2="17.67" gradientUnits="userSpaceOnUse"><stop stop-color="#1A3F79" offset="0"/><stop stop-color="#2AA270" offset=".057292"/><stop stop-color="#2AA270" offset=".17188"/><stop stop-color="#2AA270" offset=".22917"/><stop stop-color="#2AA270" offset=".28646"/><stop stop-color="#2AA270" offset=".34896"/><stop stop-color="#2AA270" offset=".40104"/><stop stop-color="#2AA270" offset=".45833"/><stop stop-color="#2AA270" offset=".54167"/><stop stop-color="#2AA270" offset=".59896"/></linearGradient></defs></svg></button>'
});