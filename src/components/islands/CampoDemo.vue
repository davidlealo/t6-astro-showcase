<script setup>
import { ref } from 'vue';

// Vue es el caso "limpio": @change se compila a addEventListener('change'),
// y como en astro.config marcamos los custom elements, no se queja.
const valor = ref(0);
function onChange(e) {
  valor.value = e.detail.value;
}
</script>

<template>
  <div style="display:flex; align-items:center; gap:16px">
    <campo-numerico @change="onChange" value="0">Número:</campo-numerico>
    <code style="font-family: ui-monospace, monospace; font-size:13px">
      Vue lee: {{ valor }}
    </code>
  </div>
</template>
