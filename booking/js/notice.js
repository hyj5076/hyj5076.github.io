const noticeAllContents = [
    {
        title: "옥상 팔각정",
        english_title: "THE OCTAGON PAVILION ON THE ROOFTOP",
        description: "옥상 팔각정은 팔각루프탑으로 운영 예정입니다. 체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한 서비스가 더해져 최고의 만족을 안겨드립니다.",
        image: "/booking/images/sub/outdoor_octagon.jfif",
        alignment: "left",
        paddingClass: "aboutus_list"
    },
    {
        title: "정육식당",
        english_title: "THE MEAT RESTAURANT IN THE 8FORE",
        description: "시설 내 온라인 판매가격 수준의 도소매 정육식당. 체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한 서비스가 더해져 최고의 만족을 안겨드립니다.",
        image: "/booking/images/sub/about_beef.JPG",
        alignment: "right",
        paddingClass: "aboutus_list_right"
    },
    {
        title: "글램핑 및 셀프바베큐장",
        english_title: "THE GLAMPING AND BARBECUE",
        description: "리조트 앞 셀프바베큐장 전용 글램핑장. 체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한 서비스가 더해져 최고의 만족을 안겨드립니다.",
        image: "/booking/images/sub/outdoor_glamping.jpeg",
        alignment: "left",
        paddingClass: "aboutus_list"
    },
    {
        title: "상계폭포",
        english_title: "THE VALLEY NEAR THE EIGHT FORE RESORT",
        description: "리조트 앞 상계폭포 or 계곡. 체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한 서비스가 더해져 최고의 만족을 안겨드립니다.",
        image: "/booking/images/valley.jpg",
        alignment: "right",
        paddingClass: "aboutus_list_right"
    },
    {
        title: "관성솔밭비치",
        english_title: "THE GWANSEONG PINE GROVE BEACH",
        description: "4.5km 인근 관성솔밭해변. 체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한 서비스가 더해져 최고의 만족을 안겨드립니다.",
        image: "/booking/images/sub/attrac_0.jpg",
        alignment: "left",
        paddingClass: "aboutus_list"
    },
    {
        title: "눈썰매장",
        english_title: "ENJOY THE SNOW SLEDDING HILL",
        description: "3km 인근 양남 눈썰매장/연수원 내 사계절 썰매장 운영. 체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한 서비스가 더해져 최고의 만족을 안겨드립니다.",
        image: "/booking/images/sub/about_sled.JPG",
        alignment: "right",
        paddingClass: "aboutus_list_right"
    },
    {
        title: "전망대",
        english_title: "VIEWPOINT WITH A BREATHTAKING SCENERY",
        description: "6km 인근 경주양남주상절리 전망대. 체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한 서비스가 더해져 최고의 만족을 안겨드립니다.",
        image: "/booking/images/sub/about_view.jpg",
        alignment: "left",
        paddingClass: "aboutus_list"
    },
    {
        title: "다양한 커뮤니티 시설",
        english_title: "VARIOUS COMMUNITY FACILITIES IN THE 8FORE",
        description: "초대형 세미나(연회장)/노래방/탁구장/당구장/수영장/스크린골프연습장. 체계적인 호텔 시스템과 편리한 시설, 그리고 호텔의 세심한 서비스가 더해져 최고의 만족을 안겨드립니다.",
        image: "/booking/images/sub/indoor_tennis.jpg",
        alignment: "right",
        paddingClass: "aboutus_list_right"
    }
    // 추가적으로 다른 정보도 이 배열에 추가할 수 있습니다.
];


function renderNotices(notices) {
    const noticeListId = document.getElementById('noticeList');

    const noticeHtml = notices.map((notice, index) => `
        <div class="content_aboutus">
            <div class="${notice.paddingClass} inner">
                <div class="top">
                    ${notice.alignment === 'left' 
                        ? `<h2>${index + 1}</h2><div class="top_left"><div class="line"></div><h3>${notice.title}</h3></div>`
                        : `<div class="top_right"><div class="line"></div><h3>${notice.title}</h3></div><h2>${index + 1}</h2>`
                    }
                </div>
                <div class="bottom">
                    <div class="bottom_img">
                        <img src="${notice.image}" alt="${notice.title}">
                        <p class="english_${notice.alignment}">${notice.english_title}</p>
                    </div><!-- bottom_img -->
                    <div class="bottom_txt ${notice.alignment}">
                        <p><span>${notice.description.split(". ")[0]}.</span></p>
                        <p>${notice.description.split(". ")[1]}</p>
                    </div>
                </div>
            </div>         
            <div class="graybox"></div>
        </div>
    `).join('');

    noticeListId.innerHTML = noticeHtml;
}

document.addEventListener("DOMContentLoaded", function() {
    renderNotices(noticeAllContents);
});
