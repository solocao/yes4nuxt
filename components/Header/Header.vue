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
        <div class="locale-changer">
          <select v-model="$i18n.locale">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script setup>
  import { setLocale } from '@vee-validate/i18n';

  const label = ref('en')

  const setLanguage = (code) => {
    // const lan = code !== null ? code : 'en'
    console.log('Locale: ', $nuxt.i18n);
    $nuxt.$i18n.locale = code
    label.value = code;
    setLocale(lan)
  }
</script>