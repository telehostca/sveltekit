<script lang="ts">
    import { page } from '$app/stores';
</script>

<nav class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <a href="/" class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                <a href="/dashboard" class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium" class:active={$page.url.pathname === '/dashboard'}>Dashboard</a>
            </div>
        </div>
    </div>
</nav>