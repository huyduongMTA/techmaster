const imgs = document.querySelectorAll('.img-select a');
const imgBtns =[...imgs];
let imgId = 1;
imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click',(event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcaseimg:first-child').clientWidth;

    document.querySelector('.img-showcae'.style.transfrom= `translateX(${- (imgId - 1) * displayWidth}px)`);
    
}