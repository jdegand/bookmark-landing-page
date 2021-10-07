// Webpack - 4 different script files

// FAQ Accordion

const questions = document.querySelectorAll(".question");

questions.forEach(questions => {
  questions.addEventListener("click", event => {
    
    const activeQuestion = document.querySelector(".question.open");
     if(activeQuestion && activeQuestion!==questions) {
       activeQuestion.classList.toggle("open");
       activeQuestion.nextElementSibling.style.display = 'none';
     }

    questions.classList.toggle("open");
    const answer = questions.nextElementSibling;

    if(questions.classList.contains("open")) {
        answer.style.display = 'flex';
    }
    else {
        answer.style.display = 'none';
    }
    
  });
});


// hamburger

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

document.getElementById('hamburger').addEventListener('click', ()=> {
  
  let hamburgerIcon = document.querySelector(".hamburger");
  let navLogo = document.querySelector('.nav-logo');
  let navUl = document.querySelector(".nav-ul");
  let navDiv = document.querySelector(".nav");
  
  navUl.classList.toggle('open');

  if(navUl.classList.contains("open")){
      navLogo.src = 'images/logo-bookmark-footer.svg';
      hamburgerIcon.src = "images/icon-close.svg";
      navDiv.classList.add('mobile-nav-open');
      disableScroll();
  } else {
      navUl.classList.remove('open');
      navLogo.src = 'images/logo-bookmark.svg';
      hamburgerIcon.src = "images/icon-hamburger.svg";
      navDiv.classList.remove('mobile-nav-open');
      enableScroll();
  }
})

// tabs

document.getElementById('nav-tab').addEventListener('click', (event)=> {

    if(event.target.href){

    let activeTabs = document.querySelectorAll('.active');

    activeTabs.forEach(tab => {
      tab.classList.remove('active');
    })
  
    event.target.parentElement.classList.add('active');

    document.getElementById(event.target.href.split('#')[1]).classList.add('active');
    }
  
})

// email validation


form.addEventListener("submit", (e) => {

  let email = document.getElementById("email");
  let exclamationPoint = document.getElementById('exclamation-point');
  let errorMessage = document.getElementById("error-message");
  let inputContainer = document.querySelector('.input-container');

    if(email.validity.valueMissing){
        e.preventDefault();
        inputContainer.classList.add('input-container-error');
        errorMessage.classList.remove('hidden');
        exclamationPoint.classList.remove('hidden');
        email.placeholder = 'example@email/com';
    }else if (email.validity.typeMismatch) {
        e.preventDefault();
        inputContainer.classList.add('input-container-error');
        errorMessage.classList.remove('hidden');
        exclamationPoint.classList.remove('hidden');
    } else {
        e.preventDefault();
        email.value = '';
        email.placeholder = 'Enter your email address';
        inputContainer.classList.remove('input-container-error');
        errorMessage.classList.add('hidden');
        exclamationPoint.classList.add('hidden');
    }
})