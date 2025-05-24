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

// // Adding hide cookie feature to the button (only cookie)
// function showMorePics() {
//     const pics = document.getElementById("more_pics");
//     const button = document.getElementById("cookieBtn");

//     pics.classList.toggle("hide");

//     // Toggle button text
//     if (pics.classList.contains("hide")) {
//         button.textContent = "More Pics of Cookie!";
//     } else {
//         button.textContent = "Hide Cookie!";
//     }
// }

// Add cookies friends into it
function showMorePics() {
    const pics = document.getElementById("more_pics");
    const btn = document.getElementById("cookieBtn");
    pics.classList.toggle("hide");
    btn.textContent = pics.classList.contains("hide") ? "More Pics of Cookie!" : "Hide Cookie!";
}

function showMoreFriends() {
    const friends = document.getElementById("more_friends");
    const button = document.getElementById("friendsBtn");

    friends.classList.toggle("hide");

    // Toggle button text
    if (friends.classList.contains("hide")) {
        button.textContent = "Cookie's Friends!";
    } else {
        button.textContent = "Hide Friends!";
    }
}

