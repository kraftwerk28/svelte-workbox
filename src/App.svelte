<script>
  import { onMount } from 'svelte';
  let name = 'world';
  onMount(() => {
    console.log('Mounted');
  });
</script>

<style>
  h2 { word-break: break-word; }
</style>

<h1>Hello, {name}</h1>
<h2>Location: {location.href}</h2>
