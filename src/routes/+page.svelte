<script lang="ts">
	import avatar from '$lib/assets/avatar.png';
</script>

<nav class="fixed top-1/2 left-16 flex -translate-y-1/2 flex-col gap-4 text-xl text-text-main">
	<a href="#about">About</a>
	<a href="#projects">Projects</a>
	<a href="#contact">Contact</a>
</nav>

<main
	class="m-0 h-screen w-screen overflow-x-hidden overflow-y-auto bg-base leading-loose text-text-main"
>
	<div class="mx-auto h-fit w-1/2 py-24">
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
				<br />
				I am currently working at a company founded by my colleagues.<br />
				I am responsible for frontend/backend development, mobile app development, and website/web-service
				deployment.<br />
			</span>
			<span class="mt-8 mb-2 block pb-1 text-xl font-bold">What I Like</span>
			<ul>
				<li>- Coding: ~ LIFE ~</li>
				<li>- Rust: I think it's the best programming language. I really love it.</li>
				<li>- TypeScript: I use it for web development. My second language.</li>
				<li>- Arch Linux: My favorite linux distribution. The Japanese wiki is very helpful.</li>
				<li>- Visual Studio Code: My main code editor. Thank you always.</li>
				<li>- Vim/Neovim: I'm using the Vim Extension in VSCode.</li>
			</ul>
		</section>
		<section id="projects">
			<span class="mt-8 mb-2 block border-b border-text-sub pb-1 text-xl font-bold"
				>My Projects</span
			>
			<div class="mt-4 mb-4 flex gap-1">
				-
				<div class="flex flex-col">
					<span>
						<a href="https://kopi-chat.com" class="border-accent text-accent hover:border-b"
							>Kopi Chat (kopi-chat.com)</a
						>:
					</span>
					<br />Bulletin Board Community for Japanese students studying in Malaysia.<br />I am
					responsible for deploying the website.<br />
					Please visit and use it if you are interested! :D
				</div>
			</div>
			<ul>
				<li>
					- <a
						href="https://github.com/BlueGeckoJP/rustic-viewer"
						class="border-accent text-accent hover:border-b">rustic-viewer</a
					>: An experimental image viewer built with Tauri/React.
				</li>
				<li>
					- <a
						href="https://github.com/BlueGeckoJP/gridx2"
						class="border-accent text-accent hover:border-b">gridx2</a
					>: The successor project of parax2. faster and simpler.
				</li>
				<li>
					- <a
						href="https://github.com/BlueGeckoJP/FramelessViewer"
						class="border-accent text-accent hover:border-b">FramelessViewer</a
					>: Image viewer with tiling.
				</li>
				<li>
					- <a
						href="https://github.com/BlueGeckoJP/explotty"
						class="border-accent text-accent hover:border-b">explotty</a
					>: Combined terminal and file explorer application.
				</li>
				<li>
					- <a
						href="https://github.com/BlueGeckoJP/bluegecko-homepage"
						class="border-accent text-accent hover:border-b">bluegecko-homepage</a
					>: My homepage!
				</li>
			</ul>
			<span class="mt-8 block">Other projects/repositories in my GitHub.</span>
		</section>
		<section id="contact">
			<span class="mt-8 mb-2 block border-b border-text-sub pb-1 text-xl font-bold">Contact</span>
			My GitHub:
			<a class="border-accent text-accent hover:border-b" href="https://github.com/BlueGeckoJP"
				>BlueGeckoJP</a
			>
			<br />
			My Discord: bluegeckojp
			<br />
			My Twitter (X):
			<a class="border-accent text-accent hover:border-b" href="https://x.com/BlueGeckoJP"
				>@BlueGeckoJP</a
			>
		</section>
	</div>
</main>
