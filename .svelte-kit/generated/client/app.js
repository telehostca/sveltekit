export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/api-tarjeta-regalo": [5],
		"/api-tarjeta-virtual": [6],
		"/dashboard": [7,[2]],
		"/metodo-pago-facturas": [8],
		"/metodo-recarga-movil": [9],
		"/recarga-movil": [10],
		"/registro-envio": [11],
		"/registros-pago-facturas": [12],
		"/registros-retiro": [13],
		"/tarifas-cargos": [14],
		"/users/[id]": [15],
		"/ver-comerciantes": [16],
		"/vista": [17],
		"/[api]": [4]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';