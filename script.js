document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт завантажено!');
    
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            } else {
                window.location.href = targetId;
            }
        });
    });
    
    
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.feature-card, .style-card');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
   
    const cards = document.querySelectorAll('.feature-card, .style-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
    
    
    document.querySelectorAll('.social a').forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.querySelector('img').alt;
            console.log(`Клік по ${platform}`);
           
        });
    });
});

const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
       
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        console.log('Форма відправлена:', data);
        
      
        
       
        contactForm.reset();
        
        alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
    });
}