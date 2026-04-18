<script setup lang="ts">
import Button from '../components/Button.vue';

const techSkills = [
  { category: 'Vue JS (Primary)', items: ['Vue 3', 'Composition API', 'Options API', 'Vuex', 'Pinia', 'Vue Router', 'Nuxt JS (basics)'] },
  { category: 'React JS', items: ['React JS', 'React Hooks', 'React Router', 'Context API', 'TypeScript with React'] },
  { category: 'Core Frontend', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { category: 'Styling', items: ['Sass/SCSS', 'Tailwind CSS', 'Bootstrap', 'Responsive & Mobile-first Design', 'CSS Animations'] },
  { category: 'Tools & Workflow', items: ['Git', 'GitHub', 'Vite', 'Webpack (basics)', 'Gulp', 'npm/yarn', 'VS Code', 'Figma (basics)', 'Photoshop'] },
  { category: 'Full-Stack', items: ['Full-stack apps via Google Antigravity / Claude AI', 'REST API integration', 'data fetching'] },
  { category: 'Foundations', items: ['Basic Python', 'Basic C++', 'Basic Linux CLI'] },
  { category: 'AI / Prompt Eng.', items: ['Prompt Engineering', 'LLM-assisted development', 'AI workflow integration'] }
];
</script>

<template>
  <main class="home">
    <section class="hero container">
      <div class="hero__content">
        <h1 class="hero__title" v-animate>
          Hi, I'm <span class="hero__name text-gradient">Frontend Developer</span><span class="hero__dot">.</span>
        </h1>
        <p class="hero__tagline" v-animate data-delay="100">
          I build clean, modern, and accessible digital experiences using the latest web technologies.
        </p>
        <div class="hero__actions" v-animate data-delay="200">
          <Button to="/projects" variant="primary">View My Work</Button>
          <Button to="/contact" variant="outline">Contact Me</Button>
        </div>
      </div>
    </section>

    <section class="home-summary container">
      <h2 class="home-summary__title" v-animate>Professional Summary</h2>
      <p class="home-summary__text" v-animate data-delay="100">
        Middle Vue JS Developer with 4+ years of professional frontend experience, specializing in building scalable, component-driven web applications with Vue 3 (Composition API), Vuex/Pinia, and Vue Router. Also proficient in React JS — capable of working across both ecosystems. Experienced across industry roles at IT Park Uzbekistan, freelance client projects, and teaching at both a Presidential School and a private tech academy. Internationally recognized through Telegram's global Instant View Contest. Strong eye for clean UI/UX and modern design systems, with additional capability to deliver full-stack solutions using AI-assisted development tools.
      </p>
    </section>

    <section class="home-skills container">
      <h2 class="home-skills__title" v-animate>Technical Skills</h2>
      <div class="home-skills__grid">
        <div v-for="(skillGroup, index) in techSkills" :key="skillGroup.category" class="home-skills__group" v-animate :data-delay="index * 50">
          <h3 class="home-skills__category">{{ skillGroup.category }}</h3>
          <div class="home-skills__items">
            <span v-for="item in skillGroup.items" :key="item" class="home-skills__tag">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 160px);
}

.hero {
  display: flex;
  align-items: center;
  min-height: 70vh;
}

.hero__content {
  max-width: 800px;
}

.hero__title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
}

.hero__name {
  color: var(--color-text);
}

.hero__dot {
  color: var(--color-primary);
}

.hero__tagline {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
}

.hero__actions {
  display: flex;
  gap: var(--spacing-md);
}

@media (max-width: 480px) {
  .hero__actions {
    flex-direction: column;
    width: 100%;
  }
}

.home-summary {
  padding-bottom: var(--spacing-xxl);
  max-width: 900px;
}

.home-summary__title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.home-summary__text {
  font-size: var(--text-xl);
  line-height: var(--line-height-base);
  color: var(--color-text-secondary);
  padding: var(--spacing-xl);
  border-left: 2px solid var(--color-primary);
  margin-top: var(--spacing-md);
}

.home-skills {
  padding-bottom: var(--spacing-xxl);
}

.home-skills__title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: var(--spacing-xl);
  color: var(--color-text);
}

.home-skills__grid {
  display: grid;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .home-skills__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .home-skills__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.home-skills__group {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.home-skills__group:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  border-color: var(--color-primary);
}

.home-skills__category {
  font-size: 1.125rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.home-skills__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.home-skills__tag {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-full);
}
</style>
