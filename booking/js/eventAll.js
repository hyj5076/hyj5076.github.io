const scrollElement = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    // 페이지가 일정량 이상 스크롤 되었을 때 fade out 효과 적용
    if (window.scrollY > 30) {  // 30px 이상 스크롤 되었을 때. 원하는 값을 설정하십시오.
        scrollElement.classList.add('fade-out');
    } else {
        scrollElement.classList.remove('fade-out');
    }
});