// ====================================
//  scroll event
// ====================================

const scrollElement = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    // 페이지가 일정량 이상 스크롤 되었을 때 fade out 효과 적용
    if (window.scrollY > 30) {  // 30px 이상 스크롤 되었을 때. 원하는 값을 설정하십시오.
        scrollElement.classList.add('fade-out');
    } else {
        scrollElement.classList.remove('fade-out');
    }
});

// ====================================
//  close event
// ====================================

window.addEventListener('load', function() {
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', function() {
        const checkPoint = document.querySelector('.check_point');
        checkPoint.style.display = 'none';
    });
});



// ====================================
//  버튼 스위치하여 콘텐츠 내용 바꾸기
// ====================================

function changeText(event) {
    event.preventDefault(); 
    const type = event.target.getAttribute('data-type');
    
    switch (type) {
        case '개인':
            renderMainTitleByIndex(0);
            renderContents(contentIndividual);
            break;
        case '단체':
            renderMainTitleByIndex(1);
            renderContents(contentGroup);
            break;
        case '글램핑':
            renderMainTitleByIndex(2);
            renderContents(contentGlamping);
            break;
        default:
            break;
    }
}


// ====================================
//  main Title Button active
// ====================================

document.querySelectorAll('.main_part a').forEach(link => {
    // 리스트 아이템의 모든 <a> 태그에 이벤트 리스너 추가
    link.addEventListener('click', changeText);

    link.addEventListener('click', function(event) {
        // 링크의 기본 동작을 막기 위함
        event.preventDefault();

        // 모든 li에서 active 클래스 제거
        document.querySelectorAll('.main_part li').forEach(li => {
            li.classList.remove('active');
        });

        // 클릭된 a의 부모 li에 active 클래스 추가
        event.target.parentElement.classList.add('active');
    });
});



// ====================================
//  main Title 콘텐츠 내용 바꾸기
// ====================================

const mainTitleContents = [
    {
        mainTitle: "About 'Eight Fore'",
        mainText: "글램핑, 바베큐장, 계곡 등 자연친화적인 공간에서 사랑하는 사람들과 행복한 시간을 보내세요.",
        mainLink: "/sub/notice_aboutus.html"
    },
    {
        mainTitle: "8fore for Group",
        mainText: "체육대회, 단체 바베큐, 세미나 등 기업 연수를 에잇포레와 함께 하세요.",
        mainLink: "/sub/notice_aboutus.html"
    },
    {
        mainTitle: "Glamping & BBQ",
        mainText: "계곡이 있는 글램핑장에서 멋진 하루를 보내세요.",
        mainLink: "/sub/notice_aboutus.html"
    },
];

function mainTitle(txt) {
    const mainID = document.getElementById('mainTitle');
   
    const mainHtml = `
        <div class="inner">
            <h2>${txt.mainTitle}</h2>
            <div class="m_line inner"></div>
            <div class="main_txt">
                <p id="textContent">${txt.mainText}
                <a href="${txt.mainLink}">소개 바로가기</a>
                </p>
            </div>
        </div>
    `;

    mainID.innerHTML = mainHtml;
}

function renderMainTitleByIndex(index) {
    const mainTitleData = mainTitleContents[index];
    mainTitle(mainTitleData);
}


// ====================================
//  main Contents 콘텐츠 내용 바꾸기
// ====================================

const contentIndividual = [
    {
        title: "The Valley",
        description: "에잇포레에서 자연과 함께하는 최고의 하루를 보내세요.",
        image: "/booking/images/valley.jpg",
        alt: "계곡",
        link: "/booking/sub/notice_aboutus.html",
        linkText: "상계폭포 자세히보기"
    },
    {
        title: "Glamping",
        description: "에잇포레의 글램핑장에서 바베큐를 즐겨보세요.",
        image: "/booking/images/glamping.jpg",
        alt: "글램핑",
        link: "/booking/sub/notice_aboutus.html",
        linkText: "글램핑 자세히보기"
    },
    {
        title: "The Way to Come",
        description: "경주 바닷길을 따라 오시면 000평 규모의 에잇포레 호텔이 있습니다.",
        image: "/booking/images/waytocome.jpg",
        alt: "오시는길",
        link: "sub/notice_way.html",
        linkText: "오시는길 자세히보기"
    }
];

const contentGroup = [
    {
        title: "Sports Day",
        description: "에잇포레에서 체육대회 운동장과 소품을 대여해드립니다.",
        image: "/booking/images/sportsday.jpg",
        alt: "체육대회",
        link: "sub/notice_attraction.html",
        linkText: "체육시설 자세히보기"
    },
    {
        title: "Group Training",
        description: "에잇포레의 세미나룸에서 단체연수를 할 수 있습니다.",
        image: "/booking/images/training.jpg",
        alt: "세미나룸",
        link: "",
        linkText: "세미나룸 자세히보기"
    },
    {
        title: "Restaurant&BBQ",
        description: "에잇포레의 식당과 바베큐장에서 단체식사가 가능합니다.",
        image: "/booking/images/restaurant.jpg",
        alt: "단체식사",
        link: "/booking/sub/indoor_restaurant.html",
        linkText: "단체식사 자세히보기"
    }
];

const contentGlamping = [
    {
        title: "The Valley",
        description: "에잇포레에서 자연과 함께하는 최고의 하루를 보내세요.",
        image: "/booking/images/valley.jpg",
        alt: "계곡",
        link: "/booking/sub/notice_attraction.html",
        linkText: "상계폭포 자세히보기"
    },
    {
        title: "Glamping",
        description: "에잇포레의 글램핑장에서 바베큐를 즐겨보세요.",
        image: "/booking/images/glamping.jpg",
        alt: "글램핑",
        link: "/booking/sub/outdoor_glamping.html",
        linkText: "글램핑 자세히보기"
    },
    {
        title: "The Way to Come",
        description: "경주 바닷길을 따라 오시면 000평 규모의 에잇포레 호텔이 있습니다.",
        image: "/booking/images/waytocome.jpg",
        alt: "오시는길",
        link: "sub/notice_way.html",
        linkText: "오시는길 자세히보기"
    }
];

function renderContents(contentSet) {
    const container = document.getElementById('contentContainer');

    const contentHtml = contentSet.map(content => `
        <div class="content">
            <div class="inner">
                <div class="content_title">
                    <div>
                        <h3>${content.title}</h3>
                        <p>${content.description}</p>
                    </div>
                </div>

                <div class="content_img">
                    <div>
                        <img src="${content.image}" alt="${content.alt}">
                    </div>
                    <div class="more">
                        <p><a href="${content.link}">${content.linkText}</a></p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = contentHtml;
}

document.addEventListener("DOMContentLoaded", function() {
    renderContents(contentIndividual);
    renderMainTitleByIndex(0);
});