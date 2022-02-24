<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Yes4mkt</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div class="d-flex pe-5 me-5">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{ label }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" @click="setLanguage('en')">English</a></li>
              <li><a class="dropdown-item" @click="setLanguage('pt')">Portuguese</a></li>
              <li><a class="dropdown-item" @click="setLanguage('mn')">Mongolia</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script setup>
  import { setLocale } from '@vee-validate/i18n';

  const label = ref('en')

  const setLanguage = (code) => {
    const lan = code !== null ? code : 'en'
    label.value = code;
    setLocale(lan)
  }
</script>