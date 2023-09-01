// ====================================
//  navigation
// ====================================

function navCommon() {
    const navId = document.getElementById('navCommonMain');

    const navHtml = `
    <div class="nav_header">
        <div class="inner spacebetween">
            <p class="back"><a href=""><i class="bi bi-arrow-left-short"></i></a></p>
            <h1><a href="/index.html"><img src="/images/logo_white.png" alt="로고"></a></h1>
            <p class="close"><a href="#"><i class="bi bi-x"></i></a></p>
        </div>
    </div>
    
    <div class="nav_menu max_inner">   
        <div class="nav_title">
            <h2>reservation</h2>
            <div class="nav_login">
                <a href="/sub/login_1.2.html">로그인</a>
                <a href="/sub/login_2.2.html">비회원예약</a>
            </div>
        </div>

        <div class="nav_title">
            <ul>
                <li class="border-right"><a href="/sub/room_calendar_monthly.html">예약현황</a></li>
                <li class="border-right"><a href="/sub/room_1reserv_1.2.html">예약하기</a></li>
                <li><a href="/sub/room_3reserv_1.4.html">예약확인/취소</a></li>
            </ul>
        </div>
    
        <div class="menu">
            <h3>menu</h3>
            <ul>
                <li class="active">
                    <a href="#">객실</a>
                    <ul class="submenu">
                        <li><a href="/sub/room.html">전체객실타입</a></li>
                        <li><a href="/sub/room_detail.html">더블룸</a></li>
                        <li><a>트윈룸</a></li>
                        <li><a>트리플룸</a></li>
                        <li><a>패밀리룸</a></li>
                        <li><a>단체룸</a></li>
                        <li><a>키즈룸</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">단체</a>
                    <ul class="submenu">
                        <li><a href="/sub/group_reserv.html">단체견적문의</a></li>
                        <li><a>단체연수후기</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">글램핑</a>
                    <ul class="submenu">
                        <li><a>글램핑</a></li>
                        <li><a>바베큐장</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">실내시설</a>
                    <ul class="submenu">
                        <li><a href="/sub/indoor.html">전체실내시설</a></li>
                        <li><a href="/sub/others_detail.html">소강당/노래방</a></li>
                        <li><a>세미나실</a></li>
                        <li><a>탁구장/당구장</a></li>
                        <li><a>식당</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">야외시설</a>
                    <ul class="submenu">
                        <li><a>전체야외시설</a></li>
                        <li><a>글램핑/바베큐장</a></li>
                        <li><a>소규모운동장</a></li>
                        <li><a>체육대회소품</a></li>
                        <li><a>루프팔각탑</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">이용안내</a>
                    <ul class="submenu">
                        <li><a href="/sub/notice_aboutus.html">소개</a></li>
                        <li><a href="/sub/notice_way.html">오시는길</a></li>
                        <li><a href="/sub/notice_gallery.html">배치도&갤러리</a></li>
                        <li><a href="/sub/notice_attraction.html">주변놀거리</a></li>
                        <li><a href="/sub/notice_event.html">이벤트</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    `;

    navId.innerHTML = navHtml;
}

document.addEventListener("DOMContentLoaded", function() {
    navCommon();
});