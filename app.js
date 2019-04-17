$(function () {
    ChangePage("home");
    $('.nav-link').click(PageManager);
});

function PageManager(event) {
    let page = event.target.innerText;
    if(page == ""){
        page = "Home";
    }
    switch (page) {
        case "Home":
            $('.menu').removeClass('active');
            $('.home').addClass('active');
            $('.menu').removeClass('active');
            ChangePage(page);
            break;
        case "Menu":
            $('.home').removeClass('active');
            $('.menu').addClass('active');
            $('.more').removeClass('active');
            ChangePage(page);
            break;
        case "More":
            $('.home').removeClass('active');
            $('.menu').removeClass('active');
            $('.menu').addClass('active');
            ChangePage(page);
            break;
    }

}

function ChangePage(page) {
    page = page.toLowerCase();
    $.ajax({
        type: "GET",
        url: "pages/" + page + ".html",
        dataType: "html",
        success: function (msg) {
            $('.display').html(msg);
        }
    });

}