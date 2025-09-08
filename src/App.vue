<template>
  <!-- page background stretches edge-to-edge -->
  <div class="w-full min-h-screen bg-gray-900 text-gray-100">
    <!-- optional top bar: toggle dark class on <html> or use system preference -->
    <div class="w-full border-b border-gray-800">
      <div class="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <h1 class="text-lg font-semibold">My Portfolio</h1>
        <button @click="toggleDark" class="text-sm px-3 py-1 rounded bg-gray-800 hover:bg-gray-700">
          Toggle Dark
        </button>
      </div>
    </div>

    <!-- ===== Full-bleed YouTube hero (edge-to-edge) =====
         If you want the video to stretch edge-to-edge, keep it outside the centered container.
         If you want the video constrained with the content, move this block inside the "mx-auto" container. -->
    <section aria-label="hero-video" class="w-full">
      <div class="w-full aspect-video">
        <!-- wrapper keeps aspect ratio; iframe width/height set to 100% -->
        <iframe
          class="w-full h-full"
          src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
          title="Intro video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </section>

    <!-- ===== Centered main content (max width, centered) ===== -->
    <main class="mx-auto max-w-6xl px-6 py-12">
      <!-- Page title (centered) -->
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-10">Welcome to My Portfolio</h2>

      <!-- Projects grid: easy to add more items (keeps centered max-width) -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <article v-for="p in projects" :key="p.id"
                 class="bg-gray-800/50 p-5 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2">{{ p.title }}</h3>
          <p class="text-gray-300 mb-4">{{ p.description }}</p>
          <a v-if="p.link" :href="p.link" target="_blank"
             class="inline-block text-sm font-medium underline">
            Visit
          </a>
          <img v-if="p.image" :src="p.image" alt="" class="mt-4 w-full h-40 object-cover rounded" />
        </article>
      </section>

      <!-- Socials centered -->
      <footer class="flex justify-center space-x-6">
        <a :href="links.linkedin" target="_blank" class="text-gray-400 hover:text-white">LinkedIn</a>
        <a :href="links.github" target="_blank" class="text-gray-400 hover:text-white">GitHub</a>
        <a :href="links.youtube" target="_blank" class="text-gray-400 hover:text-white">YouTube</a>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  { id: 1, title: 'Project One', description: 'Short description of project 1', link: '#', image: '' },
  { id: 2, title: 'Project Two', description: 'Short description of project 2', link: '#', image: '' },
  { id: 3, title: 'Project Three', description: 'Short description of project 3', link: '#', image: '' }
]);

const links = {
  linkedin: 'https://www.linkedin.com/in/username',
  github: 'https://github.com/username',
  youtube: 'https://www.youtube.com/channel/CHANNEL_ID'
};

// toggles a "dark" class on html for demo; in your case you're already using dark mode
function toggleDark() {
  const el = document.documentElement;
  if (el.classList.contains('dark')) el.classList.remove('dark');
  else el.classList.add('dark');
}
</script>

<style>
/* optional: remove default body margins if not already done in index.html */
html, body {
  margin: 0;
  padding: 0;
}
</style>
