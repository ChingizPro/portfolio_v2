<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__content">
        <p class="footer__text">
          &copy; {{ currentYear }} Chingiz Gaffarov. Built with Vue 3 & TypeScript.
        </p>
        <div class="footer__socials">
          <a href="https://github.com/ChingizPro" target="_blank" rel="noopener noreferrer" class="footer__link" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/chingizpro/" target="_blank" rel="noopener noreferrer" class="footer__link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://t.me/chingizpro" target="_blank" rel="noopener noreferrer" class="footer__link" aria-label="Telegram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: auto;
  padding: var(--spacing-xl) 0;
  background-color: color-mix(in srgb, var(--color-bg) 85%, transparent);
  border-top: 1px solid var(--color-border);
}

.footer__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  text-align: center;
}

@media (min-width: 768px) {
  .footer__content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer__text {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
}

.footer__socials {
  display: flex;
  gap: var(--spacing-md);
}

.footer__link {
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-primary);
}
</style>
