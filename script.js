function toggleVerticalMenu() {
    var verticalMenu = document.getElementById("vertical-menu");
    if (verticalMenu.style.display === "block") {
        verticalMenu.style.display = "none";
    } else {
        verticalMenu.style.display = "block";
    }
}


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}

function Send() {
    var params = {
        from_name: document.getElementById("Name").value,
        email_id: document.getElementById("Email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_ogmxu4q", "template_vtr6xqn", params)
        .then(function (res) {
            console.log("Success! " + res.status);
            alert("Success! " + res.status);
        })
        .catch(function (error) {
            console.log("Failed to send email. Error: ", error);
            alert("Failed to send email. Please try again.");
        });

    return false;
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.header');
  const firstSection = document.querySelector('#home');
  
  if (window.scrollY >= firstSection.offsetHeight) {
      navbar.classList.add('fixed-header');
  } else {
      navbar.classList.remove('fixed-header');
  }
});

$(document).ready(function () {
    $("#menu-icon").click(function () {
        $("#vertical-menu").toggle();
    });
});








