$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    var typed = new Typed(".text-animation", {
        strings: ["Ajay,", "a Student,", "a Web Developer,", "an App Developer,", "a Blogger."],
        typeSpeed: 120, // Set the typeSpeed for "Hi" to a lower value (e.g., 50)
        backSpeed: 80,
        loop: true,
        onStringTyped: function (arrayPos, self) {
            // Check if the current string is "ajay"
            if (self.strings[arrayPos] === "Ajay,") {
                // If it is, make the "Hi" text visible
                document.getElementById('element').style.visibility = 'visible';
            } else {
                // If it's any other string, hide the "Hi" text
                document.getElementById('element').style.visibility = 'hidden';
            }
        },
        preStringTyped: function (arrayPos, self) {
            // Before typing starts, hide the "Hi" text
            document.getElementById('element').style.visibility = 'hidden';
        }
    });
});

