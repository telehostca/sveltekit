<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    interface Item {
        [key: string]: any; // Podrías definir una interfaz más específica si conoces la estructura de los datos
    }

    let data: Item[] = [];
    let loading: boolean = true;
    let error: string | null = null;

    const apiName = $page.params.api;

    onMount(async () => {
        try {
            const response = await fetch(`/api/${apiName}`);
            if (!response.ok) {
                throw new Error(`Error al obtener datos: ${response.status}`);
            }
            const responseData = await response.json();
            if (Array.isArray(responseData)) {
              data = responseData;
            } else {
              data = [responseData]; // Convertir a array si no lo es
            }
        } catch (e: unknown) {
            if (e instanceof Error) {
                error = e.message;
            } else {
                error = 'Ocurrió un error desconocido';
            }
        } finally {
            loading = false;
        }
    });
</script>

<h1 class="text-2xl font-bold">Datos de la API: {apiName}</h1>

{#if loading}
    <p>Cargando...</p>
{:else if error}
    <p class="text-red-500">Error: {error}</p>
{:else}
    <table>
        <thead>
            <tr>
                {#each Object.keys(data[0] || {}) as key}
                    <th>{key}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each data as item}
                <tr>
                    {#each Object.values(item) as value}
                        <td>{value}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
{/if}