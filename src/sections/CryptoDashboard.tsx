import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import Coin from "../types/CoinType";
import Chart from "../components/Chart";

export const CryptoDashboard = () => {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [dolar, setDolar] = useState<number>(0);
    const [cryptoId, setCryptoId] = useState<string>("bitcoin");
    const [pesos, setPesos] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    const fetchCoins = async () => {
        const cachedData = sessionStorage.getItem("coins");
        if (cachedData) {
            setCoins(JSON.parse(cachedData));
            return;
        }

        try {
            const res = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            const data = await (await res).json();
            setCoins(data);
            sessionStorage.setItem("coins", JSON.stringify(data));
        } catch (error) {
            setError("Error fetching coins:" + error);
        }
    };

    useEffect(() => {
        fetchCoins();
    }, []);

    useEffect(() => {
        fetch("https://dolarapi.com/v1/dolares/blue")
            .then((res) => res.json())
            .then((res) => setDolar(res.compra));
    }, []);

    useEffect(() => {
        const precio = coins.find((coin) => coin.id === cryptoId)?.current_price;
        if (precio) {
            setPesos(precio * dolar);
        }
    }, [cryptoId, dolar, coins]);

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "ARS",
    }).format(pesos);

    return (
        <section id="mercado" className="min-h-[120vh] bg-black flex justify-center gap-32 relative">
            <h2 className="hidden 2xl:flex absolute text-3xl font-bold text-white top-20 left-[220px]">Mercado de criptomonedas</h2>
            <div className="flex flex-col items-center gap-10 xl:flex-row">
            <div className="px-4 py-12 max-w-7xl sm:px-6 lg:px-8">
                {error ? <p>Error fetching coins: {error}</p> : <div className="grid grid-cols-1 gap-4 py-24 2xl:grid-cols-2">
                    {coins.map((coin) => (
                        <Card
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            change={coin.price_change_percentage_24h}
                            image={coin.image}
                            id={coin.id}
                            setID={setCryptoId}
                        />
                    ))}
                </div>}
            </div>
            <div className="relative w-1/2 p-5 mr-10 mb-8 border-b border-l rounded-lg min-w-[400px] md:min-w-[600px] border-white/20 self-start xl:mt-64">
                <Chart cryptoId={cryptoId} />
                <p className="absolute text-2xl text-white -top-20 left-[34%]">{formattedPrice}</p>
            </div>
            </div>
        </section>
    );
};
