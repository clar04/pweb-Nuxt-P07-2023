<template>
  <!-- Page Content-->
  <section class="py-5">
    <div class="container px-5 my-5">
      <div class="row gx-5">
        <div class="col-lg-9">
          <!-- Post content-->
          <article>
            <!-- Post header-->
            <header class="mb-4">
              <!-- Post title-->
              <h1 class="fw-bolder mb-1">{{ post.postMeta.title }}</h1>
              <!-- Post meta content-->
              <div class="text-muted fst-italic mb-2">{{ formatDate(post.createdAt) }}</div>
            </header>
            <!-- Preview image figure-->
            <figure class="mb-4">
              <img
                class="img-fluid rounded"
                :src="post.postMeta.ImageURL"
                alt="{{ post.postMeta.title }}"
              />
            </figure>
            <!-- Post content-->
            <section class="mb-5">
              <p class="card-text mb-0">
                  {{ post.postMeta.description }}
                </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
@import'~/assets/index.scss';
</style>

<script setup>
const route = useRoute().params.id
const page = ref(1)
const { data: post } = await useAsyncData('post', () => $fetch(`http://localhost:5000/api/Blogs/${route}`));


const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

console.log(post)
console.log(route)
</script>

