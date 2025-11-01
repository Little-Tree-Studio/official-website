/* ================================================
   小树工作室 - 主要交互功能
   包含：mesh-gradient背景、导航交互、滚动动画
   ================================================ */

// DOM元素
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.querySelector('.navbar');
const meshGradientContainer = document.getElementById('mesh-gradient');

// 导航菜单切换
function initNavigation() {
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // 点击导航链接时关闭移动端菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }
}

// Mesh Gradient背景初始化
function initMeshGradient() {
  if (meshGradientContainer && window.MeshGradient) {
    try {
      // 创建mesh gradient实例
      const meshGradient = new MeshGradient({
        container: meshGradientContainer,
        colors: [
          '#E8EAF0', // 起始色
          '#F4F5F9', // 中间色
          '#FAFBFF'  // 结束色
        ],
        intensity: 0.6,
        speed: 0.3,
        scale: 1.2,
        blur: 0.8
      });

      // 添加缓慢的动画效果
      let animationFrame;
      let time = 0;

      function animate() {
        time += 0.005;
        
        // 轻微的颜色变化
        const intensity = 0.5 + Math.sin(time) * 0.1;
        meshGradient.update({
          intensity: intensity,
          scale: 1.1 + Math.cos(time * 0.7) * 0.1
        });
        
        animationFrame = requestAnimationFrame(animate);
      }

      // 启动动画
      animate();

      // 页面不可见时暂停动画
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          cancelAnimationFrame(animationFrame);
        } else {
          animate();
        }
      });

      console.log('Mesh Gradient initialized successfully');
    } catch (error) {
      console.warn('Mesh Gradient initialization failed:', error);
      // 降级到CSS动画背景（已在CSS中定义）
      meshGradientContainer.classList.add('css-fallback');
    }
  } else {
    console.warn('Mesh Gradient library not available, using CSS animation fallback');
    // 使用CSS动画背景（已在CSS中定义）
    if (meshGradientContainer) {
      meshGradientContainer.classList.add('css-fallback');
    }
  }
}

// 滚动时导航栏效果
function initScrollEffects() {
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 导航栏背景透明度变化
    if (scrollTop > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.25)';
      navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.15)';
      navbar.style.backdropFilter = 'blur(15px) saturate(180%)';
    }
    
    lastScrollTop = scrollTop;
  });
}

// 滚动动画观察器
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 观察需要动画的元素
  const animatedElements = document.querySelectorAll(`
    .section-header,
    .about-text,
    .about-stats,
    .product-card,
    .service-card,
    .tech-tag,
    .team-card,
    .contact-item
  `);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// 平滑滚动
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // 考虑导航栏高度
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// 性能监控
function initPerformanceMonitoring() {
  // 监控页面加载性能
  window.addEventListener('load', () => {
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0];
      const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
      
      console.log(`Page load time: ${loadTime}ms`);
      
      // 如果加载时间过长，可以考虑优化
      if (loadTime > 3000) {
        console.warn('Page load time is too slow, consider optimization');
      }
    }
  });

  // 监控动画性能
  let frameCount = 0;
  let lastTime = performance.now();
  
  function measureFPS() {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      console.log(`FPS: ${fps}`);
      
      // 如果FPS过低，可以暂停一些动画
      if (fps < 30) {
        console.warn('Low FPS detected, consider reducing animations');
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(measureFPS);
  }
  
  // 只在开发环境监控FPS
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    requestAnimationFrame(measureFPS);
  }
}

// 错误处理
function initErrorHandling() {
  window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
  });

  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
  });
}

// 移动端优化
function initMobileOptimizations() {
  // 触摸设备优化
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // 为触摸设备添加特殊的hover效果
    const cards = document.querySelectorAll('.product-card, .service-card, .team-card');
    cards.forEach(card => {
      card.addEventListener('touchstart', () => {
        card.classList.add('touch-active');
      });
      
      card.addEventListener('touchend', () => {
        setTimeout(() => {
          card.classList.remove('touch-active');
        }, 150);
      });
    });
  }

  // 视口高度优化（解决移动端地址栏问题）
  function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  setVH();
  window.addEventListener('resize', setVH);
}

// 产品卡片点击功能
function initProductCardClicks() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const link = card.getAttribute('data-link');
      if (link) {
        window.open(link, '_blank', 'noopener');
      }
    });
    
    // 添加视觉反馈
    card.addEventListener('mousedown', () => {
      card.style.transform = 'translateY(-2px) scale(0.98)';
    });
    
    card.addEventListener('mouseup', () => {
      card.style.transform = 'translateY(-4px) scale(1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// 辅助功能增强
function initAccessibility() {
  // 键盘导航支持
  const focusableElements = document.querySelectorAll(`
    a, button, input, textarea, select, 
    .product-card, .service-card, .team-card
  `);
  
  focusableElements.forEach(element => {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (element.classList.contains('product-card') || 
            element.classList.contains('service-card') || 
            element.classList.contains('team-card')) {
          element.click();
        }
      }
    });
  });

  // 减少动画偏好检测
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.body.classList.add('reduce-motion');
  }

  // 高对比度模式检测
  const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
  if (prefersHighContrast.matches) {
    document.body.classList.add('high-contrast');
  }
}

// 初始化所有功能
function init() {
  try {
    console.log('Initializing Little Tree Studio website...');
    
    initNavigation();
    initMeshGradient();
    initScrollEffects();
    initScrollAnimations();
    initSmoothScroll();
    initProductCardClicks();
    initPerformanceMonitoring();
    initErrorHandling();
    initMobileOptimizations();
    initAccessibility();
    
    console.log('Website initialization complete!');
  } catch (error) {
    console.error('Error during initialization:', error);
  }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// 导出一些全局函数供外部使用
window.LittleTreeStudio = {
  init,
  initMeshGradient,
  initScrollAnimations
};

// 调试模式
if (window.location.search.includes('debug=true')) {
  window.debug = true;
  console.log('Debug mode enabled');
  
  // 添加调试信息
  window.addEventListener('load', () => {
    console.log('DOM fully loaded');
    console.log('Available elements:', {
      navToggle: !!navToggle,
      navMenu: !!navMenu,
      meshGradient: !!meshGradientContainer,
      navbar: !!navbar
    });
  });
}
