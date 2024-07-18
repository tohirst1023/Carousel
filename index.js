// Initialize Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', // 'vertical' for vertical direction
    loop: true, // Enable looping
  
    // If you want pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // If you want navigation buttons
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Other configurations
    autoplay: {
      delay: 1000000, // Autoplay delay in milliseconds
    },
  });
