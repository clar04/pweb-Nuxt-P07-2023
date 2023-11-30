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
              <p class="fs-5 mb-4">
                Science is an enterprise that should be cherished as an activity
                of the free human mind. Because it transforms who we are, how we
                live, and it gives us an understanding of our place in the
                universe.
              </p>
              <p class="fs-5 mb-4">
                The universe is large and old, and the ingredients for life as
                we know it are everywhere, so there's no reason to think that
                Earth would be unique in that regard. Whether of not the life
                became intelligent is a different question, and we'll see if we
                find that.
              </p>
              <p class="fs-5 mb-4">
                If you get asteroids about a kilometer in size, those are large
                enough and carry enough energy into our system to disrupt
                transportation, communication, the food chains, and that can be
                a really bad day on Earth.
              </p>
              <h2 class="fw-bolder mb-4 mt-5">
                I have odd cosmic thoughts every day
              </h2>
              <p class="fs-5 mb-4">
                For me, the most fascinating interface is Twitter. I have odd
                cosmic thoughts every day and I realized I could hold them to
                myself or share them with people who might be interested.
              </p>
              <p class="fs-5 mb-4">
                Venus has a runaway greenhouse effect. I kind of want to know
                what happened there because we're twirling knobs here on Earth
                without knowing the consequences of it. Mars once had running
                water. It's bone dry today. Something bad happened there as
                well.
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

