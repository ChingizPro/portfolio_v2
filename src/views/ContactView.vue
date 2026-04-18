<script setup lang="ts">
// Form logic has been removed prioritizing direct social/email linkage.
</script>

<template>
  <div class="contact container">
    <div class="contact__header" v-animate>
      <h1 class="contact__title">Get In Touch<span class="contact__dot">.</span></h1>
      <p class="contact__subtitle">Have a project in mind or just want to say hi? Feel free to message me!</p>
    </div>

    <div class="contact__content">
      <div class="contact__info">
        <div class="info-card" v-animate data-delay="200">
          <h3 class="info-card__title">Profile Overview</h3>
          <div class="info-card__details">
            <p><strong>Name:</strong> Chingiz Gaffarov</p>
            <p><strong>Role:</strong> Middle Vue JS Developer & React JS Developer</p>
            <p><strong>Location:</strong> Termiz, Surxondaryo, Uzbekistan</p>
          </div>
        </div>

        <div class="info-card" v-animate data-delay="300">
          <h3 class="info-card__title">Direct Contact</h3>
          <div class="info-card__socials">
            <a href="tel:+998339990077" class="info-card__link">+998 33 999 00 77</a>
            <a href="mailto:chingizprog@gmail.com" class="info-card__link">chingizprog@gmail.com</a>
            <a href="https://t.me/chingizpro" target="_blank" rel="noopener noreferrer" class="info-card__link">@chingizpro</a>
          </div>
        </div>
        
        <div class="info-card" v-animate data-delay="400">
          <h3 class="info-card__title">Profiles & Socials</h3>
          <div class="info-card__socials">
            <a href="https://github.com/ChingizPro" target="_blank" rel="noopener noreferrer">github.com/ChingizPro</a>
            <a href="https://www.linkedin.com/in/chingizpro/" target="_blank" rel="noopener noreferrer">linkedin.com/in/chingizpro</a>
            <a href="https://chingizpro.github.io/portfolio" target="_blank" rel="noopener noreferrer">Portfolio V1</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding-top: var(--spacing-xxl);
  padding-bottom: var(--spacing-xxl);
}

.contact__header {
  margin-bottom: var(--spacing-xxl);
  max-width: 600px;
}

.contact__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: var(--spacing-sm);
}

.contact__dot {
  color: var(--color-primary);
}

.contact__subtitle {
  color: var(--color-text-secondary);
  font-size: 1.125rem;
}

.contact__content {
  display: flex;
  justify-content: center;
  width: 100%;
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 800px;
}

@media (min-width: 768px) {
  .contact__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .info-card:last-child {
    grid-column: span 2;
    text-align: center;
  }
}

.info-card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.info-card:hover {
  transform: translateY(-2px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-hover);
}

.info-card__title {
  font-size: 1.125rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.info-card__details p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: var(--spacing-xs);
}

.info-card__details strong {
  color: var(--color-text);
  font-weight: 600;
}

.info-card__link {
  color: var(--color-primary);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.info-card__link:hover {
  text-decoration: underline;
}

.info-card__socials {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.info-card__socials a {
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.info-card__socials a:hover {
  color: var(--color-primary);
}
</style>
