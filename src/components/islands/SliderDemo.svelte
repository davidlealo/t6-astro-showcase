<script>
  import { onMount } from 'svelte';
  let el;
  let valor = 50;
  onMount(() => {
    const onChange = (e) => (valor = e.detail.value);
    el.addEventListener('change', onChange);
    return () => el.removeEventListener('change', onChange);
  });
</script>

<div style="display:flex; align-items:center; gap:16px">
  <mi-slider bind:this={el} min="0" max="100" value="50" step="5" style="max-width:240px; flex:1">
    <mi-slider-label>0</mi-slider-label>
    <mi-slider-label position="50">50</mi-slider-label>
    <mi-slider-label position="100">100</mi-slider-label>
  </mi-slider>
  <code style="font-family: ui-monospace, monospace; font-size:13px">
    Svelte lee: {valor}
  </code>
</div>
