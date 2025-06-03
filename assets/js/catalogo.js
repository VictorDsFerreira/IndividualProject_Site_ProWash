// catalogo.js - Gerenciamento dinâmico do catálogo

document.addEventListener('DOMContentLoaded', function() {
  // Dados do catálogo
  const catalogoData = {
    lavagem: {
      title: 'Lavagem Completa',
      description: 'Serviço completo de limpeza interna e externa',
      image: 'assets/images/carroLavando.jpg',
      items: [
        {
          name: 'Lavagem Simples',
          price: 'R$ 50,00',
          features: ['Lavagem externa', 'Aspiração', 'Limpeza de vidros'],
          whatsappMessage: 'Olá, gostaria de agendar uma lavagem simples'
        },
        {
          name: 'Lavagem Completa',
          price: 'R$ 80,00',
          features: ['Lavagem externa', 'Aspiração completa', 'Limpeza de vidros', 'Limpeza de painel', 'Limpeza de porta-malas'],
          whatsappMessage: 'Olá, gostaria de agendar uma lavagem completa'
        },
        {
          name: 'Lavagem Premium',
          price: 'R$ 120,00',
          features: ['Lavagem externa', 'Aspiração completa', 'Limpeza de vidros', 'Limpeza de painel', 'Limpeza de porta-malas', 'Limpeza de rodas', 'Hidratação de borrachas'],
          whatsappMessage: 'Olá, gostaria de agendar uma lavagem premium'
        },
        {
          name: 'Lavagem Executiva',
          price: 'R$ 150,00',
          features: ['Lavagem externa', 'Aspiração completa', 'Limpeza de vidros', 'Limpeza de painel', 'Limpeza de porta-malas', 'Limpeza de rodas', 'Hidratação de borrachas', 'Limpeza de motor', 'Enceramento'],
          whatsappMessage: 'Olá, gostaria de agendar uma lavagem executiva'
        }
      ]
    },
    polimento: {
      title: 'Polimento Técnico',
      description: 'Remoção de riscos e brilho espelhado',
      image: 'assets/images/carro1.jpg',
      items: [
        {
          name: 'Polimento Simples',
          price: 'R$ 150,00',
          features: ['Remoção de riscos leves', 'Brilho', 'Proteção básica'],
          whatsappMessage: 'Olá, gostaria de agendar um polimento simples'
        },
        {
          name: 'Polimento Completo',
          price: 'R$ 250,00',
          features: ['Remoção de riscos', 'Correção de pintura', 'Brilho espelhado', 'Proteção avançada'],
          whatsappMessage: 'Olá, gostaria de agendar um polimento completo'
        },
        {
          name: 'Polimento Premium',
          price: 'R$ 350,00',
          features: ['Remoção de riscos', 'Correção de pintura', 'Brilho espelhado', 'Proteção cerâmica', 'Hidratação de plásticos'],
          whatsappMessage: 'Olá, gostaria de agendar um polimento premium'
        },
        {
          name: 'Polimento Profissional',
          price: 'R$ 450,00',
          features: ['Remoção de riscos', 'Correção de pintura', 'Brilho espelhado', 'Proteção cerâmica', 'Hidratação de plásticos', 'Correção de oxidação', 'Proteção de longo prazo'],
          whatsappMessage: 'Olá, gostaria de agendar um polimento profissional'
        }
      ]
    },
    higienizacao: {
      title: 'Higienização',
      description: 'Limpeza profunda e higienização completa',
      image: 'assets/images/interna2.jpg',
      items: [
        {
          name: 'Higienização Básica',
          price: 'R$ 100,00',
          features: ['Limpeza de estofados', 'Aspiração', 'Limpeza de painel'],
          whatsappMessage: 'Olá, gostaria de agendar uma higienização básica'
        },
        {
          name: 'Higienização Completa',
          price: 'R$ 180,00',
          features: ['Limpeza de estofados', 'Aspiração completa', 'Limpeza de painel', 'Limpeza de porta-malas', 'Higienização de ar condicionado'],
          whatsappMessage: 'Olá, gostaria de agendar uma higienização completa'
        },
        {
          name: 'Higienização Premium',
          price: 'R$ 250,00',
          features: ['Limpeza de estofados', 'Aspiração completa', 'Limpeza de painel', 'Limpeza de porta-malas', 'Higienização de ar condicionado', 'Ozonização', 'Proteção de estofados'],
          whatsappMessage: 'Olá, gostaria de agendar uma higienização premium'
        },
        {
          name: 'Higienização Profissional',
          price: 'R$ 350,00',
          features: ['Limpeza de estofados', 'Aspiração completa', 'Limpeza de painel', 'Limpeza de porta-malas', 'Higienização de ar condicionado', 'Ozonização', 'Proteção de estofados', 'Limpeza de teto', 'Tratamento anti-ácaros'],
          whatsappMessage: 'Olá, gostaria de agendar uma higienização profissional'
        }
      ]
    }
  };

  // Função para carregar o conteúdo do catálogo
  function loadCatalogoContent(section) {
    const content = catalogoData[section];
    if (!content) return;

    const catalogoContainer = document.getElementById('catalogo-content');
    if (!catalogoContainer) return;

    // Criar o HTML do conteúdo
    const html = `
      <div class="catalogo-section" id="${section}">
        <div class="row align-items-center mb-5">
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold mb-3">${content.title}</h2>
            <p class="lead mb-4">${content.description}</p>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/placeholder.jpg" data-src="${content.image}" alt="${content.title}" class="img-fluid rounded-3 shadow">
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center">
          ${content.items.map(item => `
            <div class="col d-flex">
              <div class="card h-100 border-0 shadow-sm hover-card flex-fill">
                <div class="card-body p-4 d-flex flex-column">
                  <h3 class="card-title h5 mb-3">${item.name}</h3>
                  <div class="price-tag mb-4">
                    <span class="h3 fw-bold text-primary">${item.price}</span>
                  </div>
                  <ul class="list-unstyled mb-4 flex-grow-1">
                    ${item.features.map(feature => `
                      <li class="mb-2">
                        <i class="fas fa-check-circle text-primary me-2"></i>
                        ${feature}
                      </li>
                    `).join('')}
                  </ul>
                  <a href="https://wa.me/5511999999999?text=${encodeURIComponent(item.whatsappMessage)}" 
                     class="btn btn-primary w-100 mt-auto" 
                     target="_blank">
                    <i class="fab fa-whatsapp me-2"></i>Agendar
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Atualizar o conteúdo
    catalogoContainer.innerHTML = html;

    // Atualizar links ativos
    document.querySelectorAll('.catalogo-nav .nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${section}`) {
        link.classList.add('active');
      }
    });

    // Atualizar URL
    history.pushState(null, null, `#${section}`);

    // Carregar imagens lazy
    const lazyImages = catalogoContainer.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.add('loaded');
    });
  }

  // Função para inicializar o catálogo
  function initCatalogo() {
    const catalogoNav = document.querySelector('.catalogo-nav');
    if (!catalogoNav) return;

    // Adicionar event listeners aos links
    catalogoNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = this.getAttribute('href').substring(1);
        loadCatalogoContent(section);
      });
    });

    // Carregar seção inicial
    const hash = window.location.hash.substring(1) || 'lavagem';
    loadCatalogoContent(hash);
  }

  // Inicializar o catálogo
  initCatalogo();
}); 