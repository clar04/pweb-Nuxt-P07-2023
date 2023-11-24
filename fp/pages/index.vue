<template>
  <Nav></Nav>
  <div>
    <header class="masthead">
      <div
        class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center"
      >
        <div class="d-flex justify-content-center">
          <div class="text-center">
            <h1 class="mx-auto my-0 text-uppercase">Welcome to Our Blogs!</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              Embark on a Journey of Discovery: Dive Deeper into the Intriguing
              Realms of Our Blog!
            </h2>
            <router-link to="/home" class="btn btn-primary"
              >Get Started</router-link
            >
          </div>
        </div>
      </div>
    </header>
  </div>
  <home></home>
  <get></get>
  <about></about>
</template>
<style>
@import "~/assets/index.scss";
</style>
