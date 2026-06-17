<script>
  import { onMount } from 'svelte';

  let el;
  let valor = 0;

  onMount(() => {
    const onChange = (e) => (valor = e.detail.value);
    el.addEventListener('change', onChange);
    return () => el.removeEventListener('change', onChange);
  });
</script>

<div style="display:flex; align-items:center; gap:16px">
  <campo-numerico bind:this={el} value="0">Número:</campo-numerico>
  <code style="font-family: ui-monospace, monospace; font-size:13px">
    Svelte lee: {valor}
  </code>
</div>
