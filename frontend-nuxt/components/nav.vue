<template>
    <div class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand">P07</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link"><NuxtLink to="/">Home</NuxtLink></a></li>
                    <li class="nav-item"><a class="nav-link"><NuxtLink to="/blog">Blogs</NuxtLink></a></li>
                    <li class="nav-item"><a class="nav-link"><NuxtLink to="/about">About</NuxtLink></a></li>
                </ul>
            </div>
        </div>
    </div>
    </template>
    <style>
    @import'~/assets/index.scss';
    .nav-item {
        color: white;
    }
    </style>
