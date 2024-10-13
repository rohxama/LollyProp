$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img src="./assets/media/right.png" class="right-arrow">',
    nextArrow: '<img src="./assets/media/left.png" class="left-arrow">',
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const crossIcon = document.querySelector(".cross");

    toggleButton.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    crossIcon.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
});


function onscroll() {
    let projectSection = document.querySelector(".project-section");
    let projectWrapper = document.querySelector(".project-wrapper");
    let projectImage = document.querySelector("#project1_img");
    let heading = document.querySelector(".desc");
    let rect = projectImage.getBoundingClientRect();
    let rect2 = heading.getBoundingClientRect();
    let projectWrapperRect = projectWrapper.getBoundingClientRect();


    if (rect.top <= 290) {
        projectSection.style.top = '-530px';
        projectWrapper.style.top = '-219px';
        projectSection.style.transition = '1s linear';
        projectWrapper.style.transition = '1s linear';


    } else {
        projectSection.style.top = '0px';
        projectWrapper.style.top = '0px';
    }

    if (projectWrapperRect.top <= 290) {
        projectImage.style.position = 'sticky';
        projectImage.style.top = '20px';
        projectImage.style.bottom = '20px'
    } else {
        projectImage.style.position = 'relative';
        projectImage.style.top = '-100px'
    }
    if (rect2.top <= 140) {
        projectImage.classList.add('fade-out');

        setTimeout(() => {
            projectImage.src = '../assets/media/Project img 1.png';
            projectImage.classList.add('fade-in');
        }, 400);
    }
    else{
        projectImage.src = '../assets/media/project2.jpg';
        
    }
    
}

window.addEventListener('scroll', onscroll);


