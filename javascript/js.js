// JavaScript, um das Akkordeon zu steuern
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".accordion-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Den zugehörigen Inhalt finden

            const content = this.nextElementSibling; // Korrigierter Ausdruck

            // Das Akkordeon öffnen oder schließen
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    
    
});


let slideIndex = 1;

    function showSlides(n) {
      const slides = document.getElementsByClassName("mySlides");
      
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      
      slides[slideIndex - 1].style.display = "block";
    }
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    showSlides(slideIndex);  // Zeige das erste Bild an




function openSlider(n) {
    showSlides((slideIndex = n));
    document.querySelector(".schwarzer_hintergrund").classList.add('visibility');
    document.body.style.overflow = 'hidden';
  }
  
  function closeSlider() {
    document.querySelector(".schwarzer_hintergrund").classList.remove('visibility');
    document.body.style.overflow = 'auto';
  }




