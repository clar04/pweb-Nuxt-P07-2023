<template>
  <div>
    <section class="py-5">
      <div class="container">
        <div class="row gx-5">
          <div v-for="post in posts" :key="post.id" class="col-lg-4 mb-5">
            <div class="card h-100 shadow border-0">
              <img
                class="card-img-top"
                :src="post.postMeta.ImageURL"
                :alt="post.postMeta.title"
              />
              <div class="card-body p-4">
                <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                  {{ post.postMeta.Tags.Tags }}
                </div>
                <router-link :to="`/blog/${post.id}`" class="text-decoration-none link-dark stretched-link">
                  <div class="h5 card-title mb-3">{{ post.postMeta.title }}</div>
                </router-link>
                <p class="card-text mb-0">
                  {{ post.postMeta.description }}
                </p>
              </div>
              <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div class="d-flex align-items-end justify-content-between">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle me-3"
                      :src="post.postMeta.ImageURL2"
                    />
                    <div class="small">
                      <div class="fw-bold">{{ post.postMeta.Author }}</div>
                      <div class="text-muted">
                        {{ formatDate(post.createdAt) }} &middot; {{ post.postMeta.readMin }} min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import "~/assets/index.scss";
</style>

<script setup>
const { posts } = defineProps([
  'posts'
]);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

console.log(posts);
</script>

