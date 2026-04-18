<script setup lang="ts">
import { ref } from 'vue';
import ThemeToggle from './ThemeToggle.vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <RouterLink to="/" class="header__logo" @click="closeMenu">
        Chingiz Gaffarov<span class="header__logo-dot">.</span>
      </RouterLink>

      <button class="header__mobile-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="header__hamburger" :class="{ 'header__hamburger--active': isMenuOpen }"></span>
      </button>

      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <RouterLink to="/" class="header__nav-link" active-class="header__nav-link--active" @click="closeMenu">Home</RouterLink>
          </li>
          <li class="header__nav-item">
            <RouterLink to="/about" class="header__nav-link" active-class="header__nav-link--active" @click="closeMenu">About</RouterLink>
          </li>
          <li class="header__nav-item">
            <RouterLink to="/projects" class="header__nav-link" active-class="header__nav-link--active" @click="closeMenu">Projects</RouterLink>
          </li>
          <li class="header__nav-item">
            <RouterLink to="/contact" class="header__nav-link" active-class="header__nav-link--active" @click="closeMenu">Contact</RouterLink>
          </li>
        </ul>
        <div class="header__actions">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: color-mix(in srgb, var(--color-bg) 85%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  transition: background-color var(--transition-base), border-color var(--transition-base);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.header__logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.5px;
  transition: all var(--transition-fast);
}

.header__logo:hover {
  color: var(--color-primary);
}

.header__logo-dot {
  color: var(--color-primary);
}

.header__mobile-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  z-index: 101;
}

.header__hamburger {
  display: block;
  position: relative;
  width: 24px;
  height: 2px;
  background-color: var(--color-text);
  transition: var(--transition-fast);
}

.header__hamburger::before,
.header__hamburger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  transition: var(--transition-fast);
}

.header__hamburger::before { top: -6px; }
.header__hamburger::after { bottom: -6px; }

.header__hamburger--active {
  background-color: transparent;
}
.header__hamburger--active::before {
  top: 0;
  transform: rotate(45deg);
}
.header__hamburger--active::after {
  bottom: 0;
  transform: rotate(-45deg);
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.header__nav-list {
  display: flex;
  gap: var(--spacing-lg);
}

.header__nav-link {
  font-weight: 500;
  color: var(--color-text-secondary);
  padding: var(--spacing-xs) 0;
  position: relative;
}

.header__nav-link:hover {
  color: var(--color-primary);
}

.header__nav-link--active {
  color: var(--color-primary);
}

.header__nav-link--active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: var(--radius-full);
}

.header__actions {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .header__mobile-toggle {
    display: block;
  }

  .header__nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: var(--color-bg);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: var(--spacing-xxl);
    transition: right var(--transition-base);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.05);
    border-left: 1px solid var(--color-border);
  }

  .header__nav--open {
    right: 0;
  }

  .header__nav-list {
    flex-direction: column;
    width: 100%;
    margin-bottom: var(--spacing-xl);
  }
}
</style>
