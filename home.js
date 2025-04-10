

// MOBILE MENU

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileLoginButton = document.querySelector('.login-icon-m');
    let isOpen = false;

    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.querySelector("body");
    let scrollPosition = 0;

    mobileMenuButton.addEventListener("click", function () {
        if (!mobileMenu.classList.contains('open')) {
            
            burgerMenu.classList.add('active');             // Opening animation 
            setTimeout(() => {
                burgerMenu.classList.add('rotated');
            }, 275);                                        // Delay of 300ms before rotation
            
            mobileLoginButton.style.opacity = 0;
            scrollPosition = window.scrollY;                // Store the current scroll position
            body.style.position = 'fixed';                  // Make the body non-scrollable and fix it at the current scroll position
            body.style.top = `-${scrollPosition}px`;
            mobileMenu.classList.add('open');               // beneath scroll position stuff in js or wont work
        
        } else {

            burgerMenu.classList.remove('rotated');         // Closing animation 
            setTimeout(() => {
                burgerMenu.classList.remove('active');
            }, 275);                                        // Delay of 300ms before removing 'active' class
            
            mobileLoginButton.style.opacity = 1;
            body.style.position = 'static';                 // Restore the scroll position
            body.style.top = 'auto';
            window.scrollTo(0, scrollPosition);
            mobileMenu.classList.remove('open');
        }

    });
});





// ACCOUNT MENU

document.addEventListener("DOMContentLoaded", function () {
    const accountMenuButton = document.querySelector(".account-menu-button");
    const accountMenu = document.querySelector(".account-menu");

    let rotation = 0;


    accountMenuButton.addEventListener("click", function () {
        if(accountMenu.style.display === 'none' || accountMenu.style.display === '') { // Use === or == for comparison // zweiter teil mit || ist notwendig
            accountMenu.style.display = 'flex';
            
            rotation += 90;
            accountMenuButton.style.transition = 'transform 0.4s ease';
            accountMenuButton.style.transform = 'rotate(' + rotation + 'deg)';

        } else {
            accountMenu.style.display = 'none';
            
            rotation += 90;
            accountMenuButton.style.transition = 'transform 0.4s ease';
            accountMenuButton.style.transform = 'rotate(' + rotation + 'deg)';
        }
        
    });
});




// SEARCH BAR

document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".search-button");
    const searchBar = document.querySelector(".search-bar");
    const searchBarInput = document.querySelector(".search-bar input[type=text]");
    const searchBarDeleteButton = document.querySelector(".search-bar-delete-button");

    const body = document.querySelector("body");


    searchButton.addEventListener("click", function () {
        if(searchBar.style.display === 'none' || searchBar.style.display === '') { // Use === or == for comparison // zweiter teil mit || ist notwendig
            searchBar.style.display = 'flex';
            searchBarInput.focus();
            searchBarInput.value = '';

            scrollPosition = window.scrollY;                // Store the current scroll position
            body.style.position = 'fixed';                  // Make the body non-scrollable and fix it at the current scroll position
            body.style.top = `-${scrollPosition}px`;
            
        } else {
            searchBar.style.display = 'none';

            body.style.position = 'static';                 // Restore the scroll position
            body.style.top = 'auto';
            window.scrollTo(0, scrollPosition);
        }
        
    });

    searchBarDeleteButton.addEventListener('click', function() {
        searchBarInput.value = '';
        searchBarInput.focus();
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            searchBarInput.value = '';
            searchBar.style.display = 'none';

            body.style.position = 'static';
            body.style.top = 'auto';
            window.scrollTo(0, scrollPosition);
        }
    })
});