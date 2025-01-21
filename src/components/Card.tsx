

interface CardProps {
    name: string;
    price: number;
    change: number;
    image: string;
    id: string;
    setID: React.Dispatch<React.SetStateAction<string>>
}

export const Card: React.FC<CardProps> = ({name, price, change, image,id,setID}) => {


    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    const formattedChange = change.toFixed(2) + "%"; // Limita el cambio a 2 decimales

    const changeColor = change > 0 ? "text-green-500" : "text-red-500";

    
    return (
        <div className="flex flex-col gap-3 px-6 py-4 text-white border rounded-lg border-1 border-white/20 w-[350px] hover:bg-gray-800 hover:cursor-pointer"
        onClick={() => setID(id)}
        >
            <div className="flex flex-row justify-between">
                <p>{name}</p>
                <img className="w-7" src={image} alt="Logo de criptomoneda" />
            </div>
            <div>
            <h3 className="text-2xl font-bold">{formattedPrice} USD</h3>
            <p className={`text-sm ${changeColor}`}> {formattedChange}</p>
            </div>
        </div>
    )
}
