<script lang="ts">
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';

	interface User {
		id: number;
		name: string;
		email: string;
	}

	// Datos de usuarios simulados (normalmente provendrían de una API)
	const users: User[] = [
		{ id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
		{ id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
		{ id: 3, name: 'Usuario 3', email: 'usuario3@example.com' }
	];

	// Obtener el ID del usuario de los parámetros de la ruta
	const userId = Number($page.params.id);

	// Buscar el usuario por ID
	const user = users.find((u) => u.id === userId);
</script>

<Navbar />

<div class="container mx-auto p-4">
	{#if user}
		<h1 class="text-2xl font-bold mb-4">Detalles del Usuario: {user.name}</h1>
		<p>ID: {user.id}</p>
		<p>Email: {user.email}</p>
		<a href="/users" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>Volver al listado</a
		>
	{:else}
		<p class="text-red-500">Usuario no encontrado</p>
	{/if}
</div>