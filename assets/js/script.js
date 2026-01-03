$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("yOfqZ_-GxPjr3dym-");

        emailjs.sendForm('service_uhty1ec', 'template_kajlbij', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Yaswanth Jallipalli";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Software Developer", "Full Stack Developer", "AI/ML Enthusiast", "Cloud Computing Specialist"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

// Skills Data
const skillsData = [
    {
        "name": "Java",
        "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
    {
        "name": "C",
        "icon": "https://img.icons8.com/color/48/000000/c-programming.png"
    },
    {
        "name": "HTML",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "React",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        "name": "SQL",
        "icon": "https://img.icons8.com/color/48/000000/sql.png"
    },
    {
        "name": "Node.js",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        "name": "Express.js",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "Flutter",
        "icon": "https://img.icons8.com/color/48/000000/flutter.png"
    },
    {
        "name": "Git",
        "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "VS Code",
        "icon": "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
    },
    {
        "name": "Eclipse",
        "icon": "https://img.icons8.com/color/48/000000/eclipse-java.png"
    },
    {
        "name": "Linux",
        "icon": "https://img.icons8.com/color/48/000000/linux--v1.png"
    },
    {
        "name": "Pandas",
        "icon": "https://img.icons8.com/color/48/000000/pandas.png"
    },
    {
        "name": "NumPy",
        "icon": "https://img.icons8.com/color/48/000000/numpy.png"
    },
    {
        "name": "Matplotlib",
        "icon": "https://img.icons8.com/color/48/000000/matplotlib.png"
    },
    {
        "name": "Scikit-Learn",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/48px-Scikit_learn_logo_small.svg.png"
    }
];

// Projects Data
// Projects Data
const projectsData = [
    {
        "name": "Intelligent Auto-Completion Engine",
        "desc": "Built a conversational engine integrating Trie search, Bigram prediction, and Red-Black Tree indexing. Provides real-time prefix suggestions and semantic associations.",
        "image": "intelligent-engine",
        "category": "python",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/Intelligent-conversational-engine"
        }
    },
    {
        "name": "ResNet Symbol Classifier",
        "desc": "Implementation of ResNet architecture for classifying math symbols.",
        "image": "cryptotracker",
        "category": "ml",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/resnet-math-symbol-classifier"
        }
    },
    {
        "name": "Portable Weather Station",
        "desc": "Built a multi-sensor system providing real-time environmental readings (STM32, Embedded C, DHT22, LDR, Rain Sensor, I2C LCD).",
        "image": "weatherlyandroid",
        "category": "iot",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/stm32-weather-station-pro"
        }
    },
    {
        "name": "Travel Booking Website",
        "desc": "A website for booking travel destinations and planning trips.",
        "image": "travel",
        "category": "web",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/Travel-Booking-Website"
        }
    },
    {
        "name": "Sci-Fi Reactor Room OpenGL",
        "desc": "3D graphics simulation of a sci-fi reactor room using OpenGL.",
        "image": "gaming",
        "category": "graphics",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/scifi-reactor-room-opengl"
        }
    },
    {
        "name": "Smart Irrigation Node",
        "desc": "Real-time memory task monitoring system for smart irrigation nodes.",
        "image": "iot",
        "category": "iot",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/Smart-Irrigation-Node-with-Real-Time-Memory-Task-Monitoring"
        }
    },
    {
        "name": "CPU Scheduling Algorithms",
        "desc": "Simulation and analysis of various CPU scheduling algorithms.",
        "image": "code",
        "category": "os",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/CPU-Scheduling"
        }
    },
    {
        "name": "Blind Stick Project",
        "desc": "Assistive technology project for visually impaired individuals.",
        "image": "arduino",
        "category": "iot",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/blind_stick"
        }
    },
    {
        "name": "Handwritten Math Symbol Classifier",
        "desc": "Developed a high-accuracy handwritten math OCR system by fine-tuning ResNet-18 on the Kaggle Math Symbols dataset, achieving 96.6% test accuracy.",
        "image": "linklist",
        "category": "ml",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/Math-OCR-Symbol-Recognizer"
        }
    },
    {
        "name": "Express Book Reviews",
        "desc": "Book review application built using Express.js and Node.js.",
        "image": "newsboxandroid",
        "category": "mern",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/expressBookReviews"
        }
    },
    {
        "name": "Plant Shopping App",
        "desc": "E-commerce application for shopping plants online.",
        "image": "foodicious",
        "category": "web",
        "links": {
            "view": "#",
            "code": "https://github.com/Yaswanth1832K/e-plantShopping"
        }
    }
];

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

// Initial display of 6 projects
showSkills(skillsData);
showProjects(projectsData.slice(0, 6));

// View All Button Logic
const viewAllBtn = document.getElementById('viewAllBtn');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showProjects(projectsData); // Show all projects
        viewAllBtn.parentElement.style.display = 'none'; // Hide the button container
    });
}

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// End of Tawk.to Live Chat (Removed)


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });