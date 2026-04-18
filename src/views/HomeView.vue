<script setup lang="ts">
import Button from '../components/Button.vue';

const stats = [
  { 
    label: 'Years of Experience', 
    value: '4+', 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
  },
  { 
    label: 'International Recognition', 
    value: 'Awarded', 
    info: 'Telegram Instant View Contest',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`
  },
  { 
    label: 'Primary Stack', 
    value: 'Vue & React', 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`
  }
];

const techSkills = [
  { category: 'Vue JS (Primary)', items: ['Vue 3', 'Composition API', 'Options API', 'Vuex', 'Pinia', 'Vue Router', 'Nuxt JS (basics)'] },
  { category: 'React JS', items: ['React JS', 'React Hooks', 'React Router', 'Context API', 'TypeScript with React'] },
  { category: 'Core Frontend', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { category: 'Styling', items: ['Sass/SCSS', 'Tailwind CSS', 'Bootstrap', 'Responsive', 'Mobile-first Design', 'CSS Animations'] },
  { category: 'Tools & Workflow', items: ['Git', 'GitHub', 'Vite', 'Webpack (basics)', 'Gulp', 'npm/yarn', 'VS Code', 'Figma (basics)', 'Photoshop'] },
  { category: 'Full-Stack', items: ['Full-stack apps via AI tools', 'REST API integration', 'Data fetching'] },
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

    <section class="home-summary container" v-animate>
      <div class="summary-grid">
        <div class="summary-content">
          <span class="summary-badge">About Me</span>
          <h2 class="summary-title">Crafting Scalable Digital Experiences</h2>
          <p class="summary-text">
            I am a <strong>Middle Vue JS Developer</strong> with a proven track record of delivering clean, component-driven solutions. My journey spans roles at IT Park Uzbekistan, freelance ventures, and educational leadership at prestigious institutions.
          </p>
          <p class="summary-text">
            Specializing in the Vue and React ecosystems, I bridge the gap between complex backend logic and pixel-perfect UI. Recognized globally in Telegram's Instant View Contest, I bring an international standard of quality to every project.
          </p>
        </div>
        
        <div class="summary-stats">
          <div v-for="(stat, index) in stats" :key="stat.label" class="stat-card" v-animate :data-delay="index * 100">
            <div class="stat-icon" v-html="stat.icon"></div>
            <div class="stat-info">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
              <span v-if="stat.info" class="stat-detail">{{ stat.info }}</span>
            </div>
          </div>
        </div>
      </div>
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
  min-height: 60vh;
  padding-block: var(--spacing-xxl);
}

.hero__content {
  width: 100%;
}

.hero__title {
  font-size: clamp(2rem, 10vw, 4.5rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -1.5px;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
  text-wrap: balance;
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
  padding-block: var(--spacing-xxl);
}

.summary-grid {
  display: grid;
  gap: var(--spacing-xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .summary-grid {
    grid-template-columns: 1.2fr 0.8fr;
    gap: var(--spacing-xxl);
  }
}

.summary-badge {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  padding: 0.25rem 0.75rem;
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  border-radius: var(--radius-full);
}

.summary-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
}

.summary-text {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
}

.summary-text strong {
  color: var(--color-text);
  font-weight: 600;
}

.summary-stats {
  display: grid;
  gap: var(--spacing-md);
}

@media (min-width: 640px) and (max-width: 1023px) {
  .summary-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.stat-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.stat-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 5%, transparent);
  border-radius: var(--radius-md);
}

.stat-icon svg {
  width: 24px;
  height: 24px;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.2;
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.stat-detail {
  font-size: var(--text-xs);
  color: var(--color-primary);
  margin-top: 4px;
  font-weight: 600;
}

.home-skills {
  padding-block: var(--spacing-xxl);
}

.home-skills__title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  margin-bottom: var(--spacing-xl);
  color: var(--color-text);
  text-align: center;
}

.home-skills__grid {
  display: grid;
  gap: var(--spacing-lg);
}

@media (min-width: 640px) {
  .home-skills__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 868px) {
  .home-skills__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .home-skills__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.home-skills__group {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  height: 100%;
}

.home-skills__group:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.home-skills__category {
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-2);
  border-bottom: 2px solid color-mix(in srgb, var(--color-primary) 20%, transparent);
}

.home-skills__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.home-skills__tag {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.home-skills__tag:hover {
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-1px);
}
</style>
