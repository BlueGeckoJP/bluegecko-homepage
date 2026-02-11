<script lang="ts">
	import avatar from '$lib/assets/avatar.png';
</script>

<nav class="fixed top-1/2 left-16 flex -translate-y-1/2 flex-col gap-4 text-text-main">
	<a href="#about">About</a>
	<a href="#projects">Projects</a>
	<a href="#contact">Contact</a>
</nav>

<main
	class="m-0 h-screen w-screen overflow-x-hidden overflow-y-auto bg-base leading-loose text-text-main"
>
	<div class="mx-auto h-screen w-1/2 py-24">
		<section id="about">
			<div class="flex items-center">
				<img
					src={avatar}
					alt="Avatar"
					class="border-text h-24 w-24 rounded-full border border-white object-cover p-0.5"
				/>
				<div class="ml-6">
					<h1 class="text-4xl font-bold">BlueGecko</h1>
					<span>A hobby programmer, A rustacean</span>
				</div>
			</div>
			<span class="mt-8 mb-2 block border-b border-text-sub pb-1 text-xl font-bold">About Me</span>
			<span class="block wrap-break-word">
				Kon'nichiwa, Hello, Bonjour!<br />
				I am BlueGecko from Japan, a high school student usually codes in Rust and TypeScript.<br />
				I am interested in web development, application development, open source, and artificial intelligence.<br
				/>
				I am studying English to study abroad, and I am also studying French a little as a hobby.<br
				/>
			</span>
			<span class="mt-8 mb-2 block border-b border-text-sub pb-1 text-xl font-bold"
				>What I Like</span
			>
			<ul>
				<li>- Coding: ~ LIFE ~</li>
				<li>- Rust: I think it's the best programming language. I really love it.</li>
				<li>- TypeScript: I use it for web development. My second language.</li>
				<li>- Arch Linux: My favorite linux distribution. The Japanese wiki is very helpful.</li>
				<li>- Visual Studio Code: My main code editor. Thank you always.</li>
				<li>- Vim/Neovim: I'm using the Vim Extension in VSCode.</li>
			</ul>
		</section>
		<section id="projects"></section>
		<section id="contact"></section>
	</div>
</main>
