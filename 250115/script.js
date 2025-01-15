const menuList = document.querySelector('.menu-list');

menuList.addEventListener('mouseover', function() {
    const navBg = document.querySelector('.nav-bg');
    const menuListText = document.querySelectorAll('.menu-list li a');
    const hiddenNavBg = document.querySelector('.hidden-nav-bg');

    // navBg와 menuListText에 스타일을 추가
    navBg.classList.add('white');
    document.querySelector('.logo').src = 'img/logo.png';  // 마우스 오버 시 로고 변경
    hiddenNavBg.style.opacity = '1';
    hiddenNavBg.style.top = '96px';
  
   
    menuListText.forEach(function(link) {
        link.classList.add('navy');
    });
});

menuList.addEventListener('mouseout', function() {
    const navBg = document.querySelector('.nav-bg');
    const menuListText = document.querySelectorAll('.menu-list li a');
    const hiddenNavBg = document.querySelector('.hidden-nav-bg');

    // navBg와 menuListText에 스타일을 제거
    navBg.classList.remove('white');
    document.querySelector('.logo').src = 'img/logo_white.png';  
    hiddenNavBg.style.opacity = '0';
  

    menuListText.forEach(function(link) {
        link.classList.remove('navy');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const divs = document.querySelectorAll('#hyundai div');
    
    divs.forEach(function(div, index) {
        // 각 div의 애니메이션 딜레이 설정
        div.style.animationDelay = `${index * 0.1}s`; // 0.1초씩 딜레이를 주어 하나씩 순차적으로 올라오게
    });
});





// 마우스 호버 시 가각의 서브 메뉴 오픈
const menuLista = document.querySelector('.menu-list li:nth-child(1) a');

menuLista.addEventListener('mouseover', function(){
    const menu1 = document.querySelector('.menu1');
    menu1.style.display ='block';
    menu1.style.marginTop ='50px';
    
});



menuLista.addEventListener('mouseout', function(){
    const menu1 = document.querySelector('.menu1');
    menu1.style.display ='none';
   
});




const menuLista2 = document.querySelector('.menu-list li:nth-child(2) a');

menuLista2.addEventListener('mouseover', function(){
    const menu2 = document.querySelector('.menu2');
    menu2.style.display ='inline-block';
    menu2.style.marginTop ='50px';
    
});



menuLista2.addEventListener('mouseout', function(){
    const menu2 = document.querySelector('.menu2');
    menu2.style.display ='none';
   
});


document.querySelector('.section3 .page-header button:nth-child(2)')
.addEventListener('click', function(){
    const imageBox = document.querySelector('.box1 .image-box');
    imageBox.style.backgroundImage = 'url(../img/twosan.jpg)';
});