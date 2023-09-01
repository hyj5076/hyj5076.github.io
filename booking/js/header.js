// ====================================
//  header 예시, 수정해야함
// ====================================

const headerContents = {
    logo: '/booking/images/logo.png',
    headerLink: '/booking/index.html',
}

function headerCommon(txt) {
    const headerId = document.getElementById('header');
   
    const headerHtml = `
    <div class="container">
        <div class="inner spacebetween">
            <h1><a href="${txt.headerLink}"><img src="${txt.logo}" alt="로고"></a></h1>
            <p class="modal"><a href="#"><i class="bi bi-justify"></i></a></p>
        </div>
    </div>
    `;

    headerId.innerHTML = headerHtml;
}

document.addEventListener("DOMContentLoaded", function() {
    headerCommon(headerContents);
});
