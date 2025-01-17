<script>
    // Lógica para manejar el estado del usuario, si es necesario
    import Navbar from '$lib/components/Navbar.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import { onMount } from 'svelte';

    let apiList = [
        { name: 'users', label: 'Usuarios' },
        { name: 'products', label: 'Productos' },
        { name: 'orders', label: 'Pedidos' },
      ];


</script>

<Navbar />
<div class="flex">
    <Sidebar {apiList}/>
    <main class="flex-1 p-4">
        <slot />
    </main>
</div>