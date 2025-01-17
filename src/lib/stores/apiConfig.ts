// src/lib/stores/apiConfig.ts
import { writable } from 'svelte/store';
import { env } from '$env/dynamic/private'; // Para usar variables de entorno privadas

interface ApiConfig {
    name: string;
    label: string;
    baseUrl: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: { [key: string]: string };
    authType?: 'bearer' | 'basic' | 'apiKey' | 'none';
    apiKey?: string;
}

export const apiConfigs = writable<ApiConfig[]>([
    {
        name: 'users',
        label: 'Usuarios',
        baseUrl: env.USERS_API_BASE_URL || 'https://jsonplaceholder.typicode.com/users', // Usar variable de entorno
        method: 'GET',
        authType: 'none',
    },
    {
        name: 'products',
        label: 'Productos',
        baseUrl: env.PRODUCTS_API_BASE_URL || 'https://dummyjson.com/products', // Usar variable de entorno
        method: 'GET',
        authType: 'none',
    },
    // ...
]);