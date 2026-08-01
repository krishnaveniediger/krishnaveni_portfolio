// ===== MENU ICON =====

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');

    navbar.classList.toggle('active');

};




// ===== CLOSE MENU WHEN CLICKING LINK =====


let navLinks = document.querySelectorAll('.navbar a');


navLinks.forEach(link => {

    link.onclick = () => {

        menuIcon.classList.remove('bx-x');

        navbar.classList.remove('active');

    };

});






// ===== ACTIVE NAVBAR ON SCROLL =====


let sections = document.querySelectorAll('section');
let navItems = document.querySelectorAll('header nav a');


window.onscroll = () => {


    let top = window.scrollY;



    sections.forEach(section => {


        let offset = section.offsetTop - 150;

        let height = section.offsetHeight;

        let id = section.getAttribute('id');



        if(top >= offset && top < offset + height){


            navItems.forEach(link => {


                link.classList.remove('active');


            });



            document
            .querySelector('header nav a[href*=' + id + ']')
            .classList.add('active');


        }


    });





    // Sticky Header


    let header = document.querySelector('header');


    header.classList.toggle('sticky', window.scrollY > 100);



    // Remove menu after scrolling


    menuIcon.classList.remove('bx-x');

    navbar.classList.remove('active');


};







// ===== SCROLL REVEAL ANIMATION =====


const revealElements = document.querySelectorAll(
    '.home-content, .home-img, .about-img, .about-content, .skill-box, .project-card, .contact form'
);



const reveal = () => {


    revealElements.forEach(element => {


        let elementTop = element.getBoundingClientRect().top;


        let windowHeight = window.innerHeight;



        if(elementTop < windowHeight - 100){


            element.style.opacity = "1";

            element.style.transform = "translateY(0)";


        }


    });


};



window.addEventListener('scroll', reveal);





// Initial animation

window.addEventListener('load', () => {


    reveal();


});







// ===== PROJECT BUTTON ALERT =====


let projectButtons = document.querySelectorAll('.project-content a');


projectButtons.forEach(button => {


    button.addEventListener('click', () => {


        console.log("Project link clicked");


    });


});





// ===== CONTACT FORM =====


let form = document.querySelector('form');


form.addEventListener('submit', function(event){


    event.preventDefault();


    alert(
        "Thank you for contacting me! I will get back to you soon."
    );


    form.reset();


});