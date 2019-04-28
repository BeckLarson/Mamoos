// $(function () {
//     ChangePage("home");
//     $('.nav-link').click(PageManager);
// });

// function PageManager(event) {
//     let page = event.target.innerText;
//     if(page == ""){
//         page = "Home";
//     }
//     if(page == "Our Story"){
//         page = 'More';
//     }
//     console.log("page is " + page);
//     switch (page) {
//         case "Home":
//             $('.menu').removeClass('isActive');
//             $('.home').addClass('isActive');
//             $('.more').removeClass('isActive');
//             ChangePage(page);
//             break;
//         case "Menu":
//             $('.home').removeClass('isActive');
//             $('.menu').addClass('isActive');
//             $('.more').removeClass('isActive');
//             ChangePage(page);
//             break;
//         case "More":
//             $('.home').removeClass('isActive');
//             $('.menu').removeClass('isActive');
//             $('.more').addClass('isActive');
//             ChangePage(page);
//             break;
//     }

// }

// function ChangePage(page) {
//     page = page.toLowerCase();
//     $.ajax({
//         type: "GET",
//         url: "pages/" + page + ".html",
//         dataType: "html",
//         success: function (msg) {
//             $('.display').html(msg);
//         }
//     });

// }