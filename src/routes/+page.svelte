<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';

	let pieCanvas: HTMLCanvasElement;
	let barCanvas: HTMLCanvasElement;
	let barCanvasM: HTMLCanvasElement;
	let lineCanvas: HTMLCanvasElement;

	onMount(() => {
		const pieCtx = pieCanvas.getContext('2d');
		const barCtx = barCanvas.getContext('2d');
		const barCtxM = barCanvasM.getContext('2d');
		const lineCtx = lineCanvas.getContext('2d');

		if (pieCtx) {
			new Chart(pieCtx, {
				type: 'pie',
				data: pieData,
				options: options
			});
		}

		if (barCtx) {
			new Chart(barCtx, {
				type: 'bar',
				data: barData,
				options: {
					...optionsM,
					plugins: {
						...optionsM.plugins,
						legend: { display: false }
					},
					scales: {
						y: {
							beginAtZero: true,
							max: Math.max(...barData.datasets[0].data) + 1,
							display: false
						},
						x: {
							display: false
						}
					}
				}
			});
		}

		if (barCtxM) {
			new Chart(barCtxM, {
				type: 'bar',
				data: barDataM,
				options: optionsM
			});
		}

		if (lineCtx) {
			new Chart(lineCtx, {
				type: 'line',
				data: lineData,
				options: optionsM
			});
		}
	});

	const pieData = {
		labels: ['Active', 'Banned', 'Unverified', 'All'],
		datasets: [
			{
				data: [50, 20, 10, 20],
				backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0']
			}
		]
	};

	const barData = {
		labels: [
			'Jan 25',
			'05 Jan',
			'08 Jan',
			'11 Jan',
			'14 Jan',
			'17 Jan',
			'20 Jan',
			'23 Jan',
			'26 Jan',
			'29 Jan'
		],
		datasets: [
			{
				label: 'Transacciones',
				data: [0, 3, 2, 1, 3, 0, 1, 2, 1, 0],
				backgroundColor: '#4BC0C0'
			}
		]
	};

	const barDataM = {
		labels: ['Jan 125', '07 Jan', '13 Jan', '19 Jan', '25 Jan'],
		datasets: [
			{
				label: 'Remesas',
				data: [0, 1, 0, 1, 0],
				backgroundColor: '#4BC0C0'
			}
		]
	};

	const lineData = {
		labels: ['0.0', '0.4', '0.8', '1.2', '1.6', '2.0'],
		datasets: [
			{
				label: 'Promedio',
				data: [0, 19, 25, 31, 0, 19],
				borderColor: '#4BC0C0',
				tension: 0.4
			}
		]
	};

	const options = {
		plugins: {
			title: {
				display: true,
				text: 'Estado de Usuarios (Porcentaje)',
				position: 'top' as const
			},
			legend: {
				display: true,
				position: 'bottom' as const
			}
		},
		responsive: true,
		maintainAspectRatio: true
	};
	const optionsM = {
		plugins: {
			title: {
				display: true,
				text: 'Monto (Porcentaje)',
				position: 'top' as const
			},
			legend: {
				display: true,
				position: 'bottom' as const
			}
		},
		responsive: true,
		maintainAspectRatio: true
	};
</script>

<Navbar />

<div class="container mx-auto p-4">
	<h1 class="text-2xl font-bold mb-4">Dashboard</h1>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
		<a href="/currency" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">Configurar moneda</h2>
			<p>Aquí puedes configurar la moneda por defecto.</p>
		</a>
		<a href="/tarifas-cargos" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">Tarifas y cargos</h2>
			<p>Aquí puedes configurar las tarifas y cargos.</p>
		</a>
		<a href="/api-tarjeta-virtual" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">API de tarjeta virtual</h2>
			<p>Aquí puedes configurar la API de tarjeta virtual.</p>
		</a>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
		<a href="/api-enlace" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">API de enlace de pago</h2>
			<p>Aquí puedes configurar la API de enlace de pago.</p>
		</a>
		<a href="/api-tarjeta-regalo" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">API de tarjeta de regalo</h2>
			<p>Aquí puedes configurar la API de tarjeta de regalo.</p>
		</a>
		<div class="bg-gray-200 p-4 row-span-2">
			<h2 class="font-bold mb-2 text-center">Transacciones y Asignadas</h2>
			<canvas bind:this={lineCanvas}></canvas>
		</div>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
		<a href="/metodo-pago-facturas" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">Método de pago de facturas</h2>
			<p>Aquí puedes configurar el método de pago de facturas.</p>
		</a>

		<a href="/metodo-recarga-movil" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">Método de recarga móvil</h2>
			<p>Aquí puedes configurar el método de recarga móvil.</p>
		</a>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
		<div class="bg-gray-200 p-4 col-span-full">
			<h2 class="font-bold mb-2">Cuadro de egresos mensuales de dinero</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				{#each barData.labels as label, i}
					{@const value = barData.datasets[0].data[i]}
					{@const formattedLabel = value === 0 ? label : `${label}\n${value}`}
					<div class="flex flex-col items-center">
						<span class="text-sm">{formattedLabel}</span>
						<canvas bind:this={barCanvas}></canvas>
					</div>
				{/each}
			</div>
			<div class="flex justify-center mt-2">
				<a
					href="/vista"
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
				>
					Vista
				</a>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
		<div class="bg-gray-200 p-4">
			<h2 class="font-bold mb-2 text-center">Análisis de usuarios</h2>
			<div class="flex justify-center">
				<canvas bind:this={pieCanvas}></canvas>
			</div>
			<div class="flex justify-center mt-2">
				<a
					href="/users"
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
				>
					Ver usuarios
				</a>
			</div>
		</div>

		<div class="bg-gray-200 p-4">
			<h2 class="font-bold mb-2 text-center">Análisis de comerciantes</h2>
			<div class="flex justify-center">
				<canvas bind:this={pieCanvas}></canvas>
			</div>
			<div class="flex justify-center mt-2">
				<a
					href="/ver-comerciantes"
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
				>
					Ver comerciantes
				</a>
			</div>
		</div>
	</div>

	<h2 class="text-2xl font-bold mb-4">Transacciones y Registros</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
		<a href="/agregar-registros" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">Agregar registros de dinero</h2>
			<p>Aquí puedes agregar registros de dinero.</p>
		</a>
		<a href="/registros-retiro" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">Registros de retiro de dinero</h2>
			<p>Aquí puedes ver los registros de retiro de dinero.</p>
		</a>
		<div class="bg-gray-200 p-4 row-span-2">
			<h2 class="font-bold mb-2 text-center">Cuadro de Remesa</h2>
			<canvas bind:this={barCanvasM}></canvas>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
		<a href="/registros-pago-facturas" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">Registros de pago de facturas</h2>
			<p>Aquí puedes ver los registros de pago de facturas.</p>
		</a>
		<a href="/recarga-movil" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">Recarga de móvil</h2>
			<p>Aquí puedes recargar tu móvil.</p>
		</a>
		<a href="/registro-envio" class="bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer">
			<h2 class="font-bold mb-2">Registro de envío de dinero</h2>
			<p>Aquí puedes ver los registros de envío de dinero.</p>
		</a>
	</div>
</div>