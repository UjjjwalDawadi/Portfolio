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
 window.addEventListener('load', () => {
    const skills = document.querySelectorAll('.skill-item');
    
    skills.forEach(skill => {
      const fill = skill.querySelector('.skill-fill');
      const percent = skill.querySelector('.skill-percent');
      const level = parseInt(skill.dataset.level);
      let current = 0;

      // Animate fill width
      setTimeout(() => {
        fill.style.width = level + '%';
      }, 200);

      // Animate count up percent
      const counter = setInterval(() => {
        if (current >= level) {
          clearInterval(counter);
          percent.textContent = level + '%';
          percent.style.left = `calc(${level}% - 28px)`;
        } else {
          current++;
          percent.textContent = current + '%';
          percent.style.left = `calc(${current}% - 28px)`;
        }
      }, 15);

      // Interactive hover effects for each card
      skill.addEventListener('mousemove', e => {
        const rect = skill.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (max 15deg)
        const rotateX = ((y - centerY) / centerY) * 15;
        const rotateY = ((x - centerX) / centerX) * 15;

        skill.classList.add('tilt');
        skill.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      });

      skill.addEventListener('mouseleave', () => {
        skill.classList.remove('tilt');
        skill.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });

      // Make fill bar react on hover horizontally
      skill.querySelector('.skill-bar').addEventListener('mousemove', e => {
        const bar = e.currentTarget;
        const barRect = bar.getBoundingClientRect();
        let posX = e.clientX - barRect.left;
        if (posX < 0) posX = 0;
        if (posX > barRect.width) posX = barRect.width;

        // Fill width follows cursor horizontally but never exceeds max level
        let fillPercent = Math.min((posX / barRect.width) * 100, level);
        fill.style.width = fillPercent + '%';

        // Update percent text position & value on hover
        percent.textContent = Math.floor(fillPercent) + '%';
        percent.style.left = `calc(${fillPercent}% - 28px)`;
      });

      skill.querySelector('.skill-bar').addEventListener('mouseleave', () => {
        // Reset fill and percent to original level when cursor leaves bar
        fill.style.width = level + '%';
        percent.textContent = level + '%';
        percent.style.left = `calc(${level}% - 28px)`;
      });
    });
  });

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









