<script setup>
import { ref } from 'vue';
const valor = ref(50);
function onChange(e) {
  valor.value = e.detail.value;
}
</script>

<template>
  <div style="display:flex; align-items:center; gap:16px">
    <mi-slider @change="onChange" min="0" max="100" value="50" step="5" style="max-width:240px; flex:1">
      <mi-slider-label>0</mi-slider-label>
      <mi-slider-label position="50">50</mi-slider-label>
      <mi-slider-label position="100">100</mi-slider-label>
    </mi-slider>
    <code style="font-family: ui-monospace, monospace; font-size:13px">
      Vue lee: {{ valor }}
    </code>
  </div>
</template>
