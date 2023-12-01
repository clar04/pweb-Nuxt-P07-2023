<template>
    <Card :posts="rawPosts"></Card>
</template>

<script setup>
const page = ref(1)
const { data: posts } = await useAsyncData(
  'posts',
  () => $fetch('http://localhost:5000/api/Blogs', {
    params: {
      page: page.value
    }
  }), {
    watch: [page]
  }
)
const rawPosts = posts._rawValue.docs;
</script>

<style>
.card {
  margin-top: 50px;
}
</style>
