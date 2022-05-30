const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Menu Animation
        burger.classList.toggle('toggle');
        
    });
    
    
}

navSlide();

// Get the modal
var modal = document.getElementsByClassName('modal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
// Get the button that opens the modal

var btn = document.getElementsByClassName("modalClick");

// When the user clicks on the button, open the modal
btn[0].onclick = function() {
  modal[0].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal[0].style.display = "none";
}

// When the user clicks on the button, open the modal
btn[1].onclick = function() {
    modal[1].style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span[1].onclick = function() {
    modal[1].style.display = "none";
  }

  // When the user clicks on the button, open the modal
btn[2].onclick = function() {
    modal[2].style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span[2].onclick = function() {
    modal[2].style.display = "none";
  }

  // When the user clicks on the button, open the modal
btn[3].onclick = function() {
    modal[3].style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span[3].onclick = function() {
    modal[3].style.display = "none";
  }

  // When the user clicks on the button, open the modal
btn[4].onclick = function() {
    modal[4].style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span[4].onclick = function() {
    modal[4].style.display = "none";
  }

  
  // When the user clicks on the button, open the modal
btn[5].onclick = function() {
    modal[5].style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span[5].onclick = function() {
    modal[5].style.display = "none";
  }

  
  // When the user clicks on the button, open the modal
btn[6].onclick = function() {
    modal[6].style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span[6].onclick = function() {
    modal[6].style.display = "none";
  }

  
  // When the user clicks on the button, open the modal
btn[7].onclick = function() {
    modal[7].style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span[7].onclick = function() {
    modal[7].style.display = "none";
  }



