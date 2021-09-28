$(document).ready(function() {

    // Scroll horizontal
    document.addEventListener('wheel', function(e) {
        if (e.type != 'wheel') {
            return;
        }
        let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
        delta = delta * (-1000);
        document.documentElement.scrollLeft -= delta;
        // safari needs also this
        document.body.scrollLeft -= delta;

        //console.log(scrollY);

        e.preventDefault();
    }, { passive: false }); // <= GENIUS <3 
});


// Ajout du lazy load aux images

var images = document.getElementsByTagName("img");
for (i = 0; i < images.length; i++) {
    images[i].setAttribute("loading", "lazy");
}

// Navigation

$(document).ready(function() {
    // Bouton de contrôle du menu
    $(".menu-open").click(function() {
        $("#navigation").fadeIn(500);
        $(".menu-open").fadeOut(500);
    });

    $(".menu-close").click(function() {
        $("#navigation").fadeOut(500);
        $(".menu-open").fadeIn(500);
    });

    // Pages : variables
    var pages = document.getElementsByClassName("page");

    var titles = document.getElementsByClassName("page-title");
    //console.log(titles);

    for (let i = 0; i < pages.length; i++) {

        // Ajout des id aux pages
        pages[i].setAttribute("id", "page" + i);

        // Couleurs de fond des pages
        var pageColor = i % 2;
        if (pageColor == 0) {
            pages[i].style.background = "#BC2D29";
        } else {
            pages[i].style.background = "#171412";
        }

        // Ajout des boutons de navigation
        if (i % 4 === 0) {
            $("#menu").append(
                "<a class='menu-item' href='#" + pages[i].id + "'><div>" + titles[i].textContent + " " + i + "</div></a>"
            );
        } else {
            $("#menu").append(
                "<a class='menu-item' href='#" + pages[i].id + "'><div>" + titles[i].textContent + " " + i + "</div></a>"
            );
        }
    }

    // Click sur les boutons de navigation
    $(".menu-item").click(function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $("#navigation").fadeOut(500);
        $(".menu-open").fadeIn(500);
        $(".page-title").fadeOut(200);
        $(".page-title").fadeIn(1000);
        displaySFChars();
    });

    // Bouton d'accueil - Random project
    $(".random-project").click(function() {
        let pageMax = pages.length - 1;
        let min = 1;
        let randomPage = Math.floor(Math.random() * (pageMax - min)) + 1;

        window.location.href = "#";
        window.location.href = "#page" + randomPage;
        //console.log(randomPage);
        displaySFChars();
    });


    // Fade sf characters
    function displaySFChars() {
        if (window.innerWidth > 1200) {
            $(".sf-char").fadeIn('slow', function() {
                $(this).delay(3000).fadeOut('slow');
            });
        }
    }
});