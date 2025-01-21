import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js'; // Importamos los tipos necesarios

// Registrar los componentes necesarios para Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CryptoChart: React.FC<{ cryptoId: string }> = ({ cryptoId }) => {
    // Tipamos el estado chartData correctamente con los tipos de Chart.js
    const [chartData, setChartData] = useState<ChartData<'line', number[], string>>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchPriceHistory = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart`, {
                    params: {
                        vs_currency: 'usd',
                        days: '25', // Últimos 5 días
                    }
                });

                const prices = response.data.prices;
                // Acortar la fecha a "día/mes"
                const labels = prices.map((price: [number, number]) => new Date(price[0]).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                }));
                const data = prices.map((price: [number, number]) => price[1]); // Precios

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Price (USD)', // Añadimos una etiqueta para la línea del gráfico
                            data: data,
                            borderColor: 'rgb(255, 255, 255)', // Cambiamos el color del borde a blanco
                            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Cambiamos el fondo a blanco con opacidad
                            fill: true,
                        }
                    ]
                });
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchPriceHistory();
    }, [cryptoId]);

    // Aseguramos que haya datos antes de renderizar el gráfico
    if (chartData.labels?.length === 0) {
        return <div>Loading...</div>;
    }

    // Opciones del gráfico
    const chartOptions: ChartOptions<'line'> = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    display: false, // Ocultamos las fechas debajo del gráfico
                }
            }
        },
        plugins: {
            legend: {
                display: false, // Ocultamos la leyenda del gráfico
            }
        }
    };

    return (
        <div>
            <h2 className='font-bold text-white md:text-2xl'>{cryptoId} Historial de Precios (30 dias)</h2> {/* Título sin leyenda extra */}
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default CryptoChart;


