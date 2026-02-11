<script lang="ts">
	import avatar from '$lib/assets/avatar.webp';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={avatar} /><title>BlueGecko Homepage</title></svelte:head>
{@render children()}
