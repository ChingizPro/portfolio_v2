<script setup lang="ts">
import Button from './Button.vue';

defineProps<{
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}>();
</script>

<template>
  <article class="project-card">
    <div class="project-card__content">
      <h3 class="project-card__title">{{ title }}</h3>
      <p class="project-card__description">{{ description }}</p>
      
      <div class="project-card__tech">
        <span v-for="tech in techStack" :key="tech" class="project-card__tag">
          {{ tech }}
        </span>
      </div>
      
      <div class="project-card__actions">
        <Button v-if="liveUrl" :href="liveUrl" variant="primary">Live Demo</Button>
        <Button v-if="githubUrl" :href="githubUrl" variant="outline">GitHub</Button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-fast);
  height: 100%;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  border-color: var(--color-primary);
}

.project-card__content {
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.project-card__description {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: var(--spacing-lg);
  flex-grow: 1;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
}

.project-card__tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  background-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  border-radius: var(--radius-full);
}

.project-card__actions {
  display: flex;
  gap: var(--spacing-sm);
}

@media (max-width: 480px) {
  .project-card__actions {
    flex-direction: column;
  }
}
</style>
