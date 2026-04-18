import type { DirectiveBinding } from 'vue';

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

let observer: IntersectionObserver | null = null;

export const vAnimate = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    // Only initialize the observer on the client side
    if (!observer && typeof window !== 'undefined') {
      observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);
    }

    const animationClass = binding.value || 'animate-fade-up';
    el.classList.add('animate-hidden', animationClass);
    
    // Check if element has a transition delay defined via data attribute
    const delay = el.dataset.delay;
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    if (observer) {
      observer.observe(el);
    }
  },
  unmounted: (el: HTMLElement) => {
    if (observer) {
      observer.unobserve(el);
    }
  }
};
