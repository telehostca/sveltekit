<script lang="ts">
    import { page } from '$app/stores';
    interface Api {
        name: string;
        label: string;
    }
    export let apiList: Api[] = []; // Define el tipo de apiList
</script>

<aside class="w-64" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul class="space-y-2">
          {#each apiList as api}
            <li>
                <a href="/dashboard/{api.name}" class:active={$page.url.pathname === '/dashboard/' + api.name} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="ml-3">{api.label || api.name}</span>
                </a>
            </li>
            {/each}
        </ul>
    </div>
</aside>