/// <reference types="@sveltejs/kit" />
declare global {
	namespace App {
		interface Error {}
		interface Locals {}
		interface PageData {}
		interface Platform {}
	}

	namespace svelteHTML {
		interface HTMLAttributes {
			class?: string;
		}
	}
}

export {};