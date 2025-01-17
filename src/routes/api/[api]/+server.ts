import type { RequestHandler, PageParams } from '@sveltejs/kit'; // Cambia la importacion
import axios from 'axios';

interface ApiBaseUrls {
    users: string;
    products: string;
    orders: string;
}

const API_BASE_URLS: ApiBaseUrls = {
    users: 'https://jsonplaceholder.typicode.com/users',
    products: 'https://dummyjson.com/products',
    orders: 'https://dummyjson.com/carts',
};

export const GET: RequestHandler = async ({ params }: { params: PageParams }) => {
    const apiName = params.api as keyof ApiBaseUrls;
    const baseUrl = API_BASE_URLS[apiName];

    if (!baseUrl) {
        return new Response(JSON.stringify({ error: 'API no encontrada' }), { status: 404 });
    }

    try {
        const response = await axios.get(baseUrl);
        const data = response.data.products || response.data;
        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Error al conectar con la API' }), { status: 500 });
    }
};