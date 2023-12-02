<template>
    <Card :posts="limitedPosts"></Card>
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

const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + '...';
  }
  return description;
};

const rawPosts = posts._rawValue.docs;
const limitedPosts = rawPosts.map(post => ({
  ...post,
  postMeta: {
    ...post.postMeta,
    description: truncateDescription(post.postMeta.description, 150),
  },
}));
</script>

<style>
.card {
  margin-top: 50px;
}
</style>
