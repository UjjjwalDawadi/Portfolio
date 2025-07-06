function toggleVerticalMenu() {
    var verticalMenu = document.getElementById("vertical-menu");
    if (verticalMenu.style.display === "block") {
        verticalMenu.style.display = "none";
    } else {
        verticalMenu.style.display = "block";
    }
}
function toggleResume () {
    document.getElementById('resumeViewer').classList.toggle('open');
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

 function Send(e) {
    e.preventDefault();                      

    const btn   = document.getElementById("sendBtn");
  const form  = e.target;                    // #contact-form

  btn.classList.add("loading");
    const params = {
      from_name: e.target.Name.value,
      email_id: e.target.Email.value,
      message: e.target.Message.value
    };

    emailjs
      .send("service_ogmxu4q", "template_vtr6xqn", params)
      .then(res => {
        alert("Message sent!");               
        e.target.reset();                    
      })
      .catch(err => {
        console.error(err);
        alert("Failed to send email. Please try again.");
      })
      .finally(() => {
      btn.classList.remove("loading");
    });
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









