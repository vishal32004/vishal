
/* Home Section */
const player = document.querySelector("lottie-player"); // scroll Animation

/* navabar on scrool change color*/

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

/* mobile navbar */
$(window).scroll(function() {
  if ($(this).scrollTop() > 50 && $(window).width() < 768) { // adjust the 50 to change when the background color should change and the 768 to your mobile breakpoint
    $('.header').css('background-color', '#ed7676'); // replace 'red' with the color you want
  } else {
    $('.header').css('background-color', 'transparent'); // replace 'transparent' with the original background color
  }
});


/* Intro Div*/

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end,
        char: undefined
      });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {
        from,
        to,
        start,
        end,
        char
      } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = [
  'Vishal Tiwari,',
  'FrontEnd Web Developer',
  'Web Designer',
  '(function repeat() {',
  'eat();',
  'Sleep();',
  'code();',
  'repeat();',
  '})();'
];

const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

next();

/* On Scroll Animation */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


/* Education Section bro */
$(function () {

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {

    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }

  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });

  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });

});

/* project section */

/*contact heading */


// Wrap every letter in a span
$('#p').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

// random color
const randomColor = Math.floor(Math.random()*16777215).toString(16);

// Random integer function
getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomDec = (min, max) => {
  return Math.random() * (max - min + 1) + min;
}

// assigns random integer to the css property for each span
$('.letter').each(function(){
    $(this).css({'animationIterationCount' : getRandomInt(1,4), 'animationIterationCount' : getRandomInt(1,4), 'animationDuration' : getRandomDec(0,1) + 's', 'animationDuration' : getRandomDec(0,1) + 's'});
});



/* contact form */



/* footer js */
