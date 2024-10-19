<script setup lang="ts"></script>

<template>
  <header>
    <nav
      id="navbar"
      class="navbar fixed-top navbar-expand-lg navbar-light bg-light"
    >
      <div class="container-fluid">
        <RouterLink to="/" class="nav-link">
          <img src="" alt="" width="50" height="50" />
        </RouterLink>
        <span class="navbar-brand">Wild World Academy</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/mini-games" class="nav-link"
                >Mini Games</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/magic-cards" class="nav-link">
                Magic Cards Series
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/colouring-pages" class="nav-link">
                <span>Colouring Pages</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/blog" class="nav-link">
                <span>Blog</span>
              </RouterLink>
            </li>
          </ul>
          <ul class="navbar-nav d-flex">
            <li class="nav-item me-2">
              <RouterLink to="/login" class="btn purple-btn login-btn">
                Log in
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <NuxtPage />
</template>
