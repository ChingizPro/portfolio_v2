<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';

const projects = [
  {
    id: 1,
    title: 'Game Hub',
    description: 'A game discovery platform consuming a public REST API. Features dynamic filtering by genre/platform, search, dark mode, and fully responsive layout built with React and TypeScript.',
    techStack: ['React JS', 'TypeScript', 'Tailwind CSS', 'REST API'],
    liveUrl: 'https://game-hub-flax-two.vercel.app',
    githubUrl: 'https://github.com/ChingizPro/game-hub'
  },
  {
    id: 2,
    title: 'Ishchi AI',
    description: 'Multilingual (Uzbek/Russian/English) AI-powered job-matching platform built with Vue JS. Features smart listings, AI recommendation system, and structured user registration flow.',
    techStack: ['Vue JS', 'JavaScript', 'CSS', 'AI Integration'],
    liveUrl: 'https://ishchiai.netlify.app',
    githubUrl: 'https://github.com/ChingizPro/ishchiai'
  },
  {
    id: 3,
    title: 'Bandixon Texnikum',
    description: 'Official website for a state technical college. Full-stack application built with Vue 3 + TypeScript (Vite) and Google Antigravity backend — live production deployment.',
    techStack: ['Vue JS', 'TypeScript', 'Vite', 'Full-Stack'],
    liveUrl: 'https://bandixon-texnikum-2.uz',
    githubUrl: ''
  },
  {
    id: 4,
    title: 'Telegram Web Clone',
    description: 'Pixel-precise Telegram Web UI clone demonstrating deep Bootstrap customization and Sass architecture.',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'Sass', 'JavaScript'],
    liveUrl: 'https://chingizpro.github.io/telegram-demo',
    githubUrl: 'https://github.com/ChingizPro/telegram-demo'
  },
  {
    id: 5,
    title: 'E-Bozor (E-Shop)',
    description: 'Online shopping frontend with rich vanilla JavaScript interactivity — cart logic, filtering, and product listing.',
    techStack: ['HTML', 'CSS', 'Sass', 'JavaScript'],
    liveUrl: 'https://chingizpro.github.io/e-bozor',
    githubUrl: 'https://github.com/ChingizPro/e-bozor'
  },
  {
    id: 6,
    title: 'Movies Search',
    description: 'Movie catalogue with client-side search, sorting, filtering, and categorization algorithms in pure JS.',
    techStack: ['JavaScript', 'CSS', 'Sass', 'Algorithms'],
    liveUrl: 'https://chingizpro.github.io/movies',
    githubUrl: 'https://github.com/ChingizPro/movies'
  }
];
</script>

<template>
  <div class="projects container">
    <div class="projects__header" v-animate>
      <h1 class="projects__title">My Projects<span class="projects__dot">.</span></h1>
      <p class="projects__subtitle">A selection of my recent work and personal projects.</p>
    </div>

    <div class="projects__grid">
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="project.id"
        v-animate
        :data-delay="index * 100"
        :title="project.title"
        :description="project.description"
        :tech-stack="project.techStack"
        :live-url="project.liveUrl"
        :github-url="project.githubUrl"
      />
    </div>
  </div>
</template>

<style scoped>
.projects {
  padding-top: var(--spacing-xxl);
  padding-bottom: var(--spacing-xxl);
}

.projects__header {
  margin-bottom: var(--spacing-xxl);
  max-width: 600px;
}

.projects__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: var(--spacing-sm);
}

.projects__dot {
  color: var(--color-primary);
}

.projects__subtitle {
  color: var(--color-text-secondary);
  font-size: 1.125rem;
}

.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
