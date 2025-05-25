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

// add direction-sensitive hover effects for cookie's pfp
const pfpWrapper = document.getElementById('pfpWrapper');
const emotionLabel = document.getElementById('emotionLabel');

pfpWrapper.addEventListener('mousemove', (e) => {
    const rect = pfpWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;  // x within the element
    const y = e.clientY - rect.top;   // y within the element

    const width = rect.width;
    const height = rect.height;

    const sideThreshold = 20; // Optional padding zone near edges
    let message = '';
    let labelX = x;
    let labelY = y;

    if (x < sideThreshold) {
        message = "ꉂ(ˊᗜˋ*)";
        labelX = 0;
        labelY = height / 2;
    } else if (x > width - sideThreshold) {
        message = "|•'-'•) ✧";
        labelX = width;
        labelY = height / 2;
    } else if (y < sideThreshold) {
        message = "👆( ᐛ )";
        labelX = width / 2;
        labelY = 0;
    } else if (y > height - sideThreshold) {
        message = "(՞•Ꙫ•՞)";
        labelX = width / 2;
        labelY = height;
    } else {
        message = "";
    }

    if (message) {
        emotionLabel.textContent = message;
        emotionLabel.style.left = `${labelX}px`;
        emotionLabel.style.top = `${labelY}px`;
        pfpWrapper.classList.add('show');
    } else {
        pfpWrapper.classList.remove('show');
    }
});

pfpWrapper.addEventListener('mouseleave', () => {
    pfpWrapper.classList.remove('show');
});

