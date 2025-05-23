const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
})

// function showMorePics() {
//     const pics = document.getElementById("more_pics");
//     if (pics.style.display === "flex") {
//         pics.style.display = "none";
//     } else {
//         pics.style.display = "flex";
//     }
// }

// Adding hide cookie feature to the button
function showMorePics() {
    const pics = document.getElementById("more_pics");
    const button = document.getElementById("cookieBtn");

    pics.classList.toggle("hide");

    // Toggle button text
    if (pics.classList.contains("hide")) {
        button.textContent = "More Pics of Cookie!";
    } else {
        button.textContent = "Hide Cookie!";
    }
}
