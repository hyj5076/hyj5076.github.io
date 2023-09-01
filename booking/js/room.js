const roomTypeAllContents = [
    {
        title: "Double Room",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_double.jpg",
        link: "/sub/room_detail.html",
        alignment: "left"
    },
    {
        title: "Twin Room",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_twin.jpg",
        link: "/sub/room_detail.html",
        alignment: "right"
    },
    {
        title: "Triple Room",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_triple.jpg",
        link: "/sub/room_detail.html",
        alignment: "left"
    },
    {
        title: "Family Room",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_family.jpg",
        link: "/sub/room_detail.html",
        alignment: "right"
    },
    {
        title: "Room for Group",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_forgroup.jpg",
        link: "/sub/room_detail.html",
        alignment: "left"
    },
    {
        title: "Kids Room",
        description: "감각적인 인테리어와 특별한 여유를 느낄 수 있는 객실에서 잊을 수 없는 여행의 경험을 선사합니다.",
        image: "/images/sub/room_kids.jpg",
        link: "/sub/room_detail.html",
        alignment: "right"
    }
    // 추가적으로 다른 객실 정보도 이 배열에 추가할 수 있습니다.
];

function renderRooms(rooms) {
    const roomListId = document.getElementById('roomList');
   
    const html = rooms.map(room => `
        <div class="content_list">
            <h3 class="${room.alignment}">${room.title}</h3>
            <div class="content_list_txt">
                <p class="${room.alignment}">${room.description}</p>
                <div class="content_img"><img src="${room.image}" alt="${room.title}"></div>
            </div>
            <div class="${room.alignment === 'left' ? 'go' : 'go_left'}">
                <a href="${room.link}"><i class="bi bi-arrow-right-short"></i></a>
            </div>
        </div>
    `).join('');

    roomListId.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
    renderRooms(roomTypeAllContents);
});