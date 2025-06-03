// main.js - Scripts principais do site

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        const targetElement = document.querySelector(hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          history.pushState(null, null, hash);
        }
      }
    });
  });

  if (window.location.pathname.endsWith('catalogo.html')) {
    document.querySelectorAll('a.nav-link[href^="index.html#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const hash = this.getAttribute('href').split('#')[1];
        if (hash) {
          e.preventDefault();
          sessionStorage.setItem('scrollToSection', hash);
          window.location.href = 'index.html';
        }
      });
    });
  }
});

// Lazy loading para imagens
document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback para navegadores que não suportam IntersectionObserver
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.add('loaded');
    });
  }
});

// Otimização de performance
document.addEventListener('DOMContentLoaded', function() {

  const nonCriticalCSS = document.createElement('link');
  nonCriticalCSS.rel = 'stylesheet';
  nonCriticalCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
  nonCriticalCSS.media = 'print';
  nonCriticalCSS.onload = function() {
    this.media = 'all';
  };
  document.head.appendChild(nonCriticalCSS);

  const criticalImages = [
    'assets/images/hero-bg.jpg',
    'assets/images/logo.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
});

// Otimização de formulários
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simular envio do formulário
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      
      // Simular delay de envio
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        form.reset();
        
        // Mostrar mensagem de sucesso
        const alert = document.createElement('div');
        alert.className = 'alert alert-success mt-3';
        alert.innerHTML = 'Mensagem enviada com sucesso!';
        form.appendChild(alert);
        
        // Remover mensagem após 3 segundos
        setTimeout(() => {
          alert.remove();
        }, 3000);
      }, 1500);
    });
  });
});

if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
  const hash = sessionStorage.getItem('scrollToSection');
  if (hash && document.getElementById(hash)) {
    setTimeout(() => {
      document.getElementById(hash).scrollIntoView({ behavior: 'smooth', block: 'start' });
      sessionStorage.removeItem('scrollToSection');
    }, 300);
  } else if (window.location.hash && document.querySelector(window.location.hash)) {
    setTimeout(() => {
      document.querySelector(window.location.hash).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }
} 