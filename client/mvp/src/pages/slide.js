// 

import React from 'react';
import Slider from 'react-slick';
import './slide.css';
import './slide-theme.css';
const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:4000
      };
      

  return (
    <div className="slide-container">
    <Slider {...settings}>
      <div className='slide-item'>
        <h3 className='slide-note'>The first milk produced by a new mom is called colostrum. It is highly concentrated with nutrients and antibodies to fight infection and protect your baby. It provides a powerful and unique immunity for your baby. It is advised to put your baby to breast within the first one hour after birth.</h3>
      </div >
      <div className='slide-item'>
        <h3 className='slide-note'>Breastfeeding reduces the chances of breast and ovarian cancer as well as heart disease. It reduces the mother's exposure to estrogen, thus resulting in a lower number of menstrual cycles while breastfeeding.</h3>
      </div>
      <div className='slide-item'>
        <h3 className='slide-note'>Skin-to-skin contact post-birth helps a baby breastfeed. It helps them with their instincts to latch, and a mom's breast can detect if her baby's body temperature fluctuates even a degree and will warm or cool as needed.</h3>
      </div>
      <div className='slide-item'>
        <h3 className='slide-note'>Breast milk comes out of more than one hole in the nipple, and the number of holes varies from mom to mom.</h3>
      </div>
      <div className='slide-item'>
        <h3 className='slide-note'>New moms naturally burn up to 500 calories simply from breastfeeding. The hormones released during this process can help your uterus bounce back to pre-pregnancy size.</h3>
      </div>
      <div className='slide-item'>
        <h3 className='slide-note'>Contrary to popular opinion, the size of the breast does not determine the amount of milk production. Every mother produces milk according to her baby's demands.</h3>
      </div>
    </Slider>
    </div>
  );
};

export default Slideshow;
