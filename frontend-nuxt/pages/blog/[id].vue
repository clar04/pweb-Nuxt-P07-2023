<template>
    <Getdetails :post="post"></Getdetails>
</template>

<script setup>
    const route = useRoute().params.id
    const { data: post } = await useFetch(`http://localhost:5000/api/Blogs/${route}`);

    if (!post.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page not found' });
    }
</script>