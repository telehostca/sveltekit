import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const protectedRoutes = ['/dashboard']; // Rutas que requieren autenticación

    if (protectedRoutes.includes(event.url.pathname)) {
        // Aquí deberías verificar la sesión del usuario, cookies, tokens, etc.
        const userIsLoggedIn = false; // Simulación de verificación

        if (!userIsLoggedIn) {
            return new Response(null, {
                status: 303,
                headers: { location: '/' }, // Redirigir al login
            });
        }
    }

    return await resolve(event);
};