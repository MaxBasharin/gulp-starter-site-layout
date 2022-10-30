import * as showMessageWB from './modules/functions.js'
showMessageWB.showMessage()

import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });