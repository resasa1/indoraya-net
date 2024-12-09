import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardFooter,
    CardTitle,
} from '@/components/ui/card';

interface theProduct {
    name: string;
    price: number;
    description: string;
    image: string;
}

export function Price() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<theProduct | null>(null);

    const myProduct: theProduct[] = [
        {
            name: 'Helmet iron man',
            price: 125000,
            description: 'This helmet is made from ironman by mas amba',
            image: 'https://i.pinimg.com/736x/1c/91/71/1c9171ae502386c8594f487f279dd723.jpg',
        },
        {
            name: 'mas amba',
            price: 10000,
            description: 'Mas ambatukam ambasing owh ambasing',
            image: 'https://i.pinimg.com/736x/79/30/a7/7930a7090b95a0bef65d30b3065bf876.jpg',
        },
        // Add more products here
        {
            name: 'mas amba',
            price: 10000,
            description: 'Mas ambatukam ambasing owh ambasing',
            image: 'https://i.pinimg.com/736x/79/30/a7/7930a7090b95a0bef65d30b3065bf876.jpg',
        },
        {
            name: 'mas amba',
            price: 10000,
            description: 'Mas ambatukam ambasing owh ambasing',
            image: 'https://i.pinimg.com/736x/79/30/a7/7930a7090b95a0bef65d30b3065bf876.jpg',
        },
        {
            name: 'mas amba',
            price: 10000,
            description: 'Mas ambatukam ambasing owh ambasing',
            image: 'https://i.pinimg.com/736x/79/30/a7/7930a7090b95a0bef65d30b3065bf876.jpg',
        },
        {
            name: 'mas amba',
            price: 10000,
            description: 'Mas ambatukam ambasing owh ambasing',
            image: 'https://i.pinimg.com/736x/79/30/a7/7930a7090b95a0bef65d30b3065bf876.jpg',
        },
    ];

    const formatRupiah = (price: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    };

    const handleBuyClick = (product: theProduct) => {
        setSelectedProduct(product);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="flex items-center min-h-screen">
            <Card className="w-full max-w-screen-lg">
                <CardHeader>
                    <CardTitle>Mas Amba Product's</CardTitle>
                </CardHeader>
                <CardContent className="defscroll gap-4 max-h-full overflow-y-scroll">
                    {myProduct.map((product) => (
                        <div className="flex mb-4" key={product.name}>
                            <div>
                                <img
                                    src={product.image}
                                    className="w-48 h-48 object-cover rounded-lg"
                                    alt="product"
                                />
                            </div>
                            <div className="ml-5 flex-1">
                                <CardTitle>{product.name}</CardTitle>
                                <CardDescription>{product.description}</CardDescription>
                            </div>
                            <CardFooter className="flex gap-5 justify-between items-center">
                                <span>{formatRupiah(product.price)}</span>
                                <Button onClick={() => handleBuyClick(product)}>Buy</Button>
                            </CardFooter>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Pop-Up */}
            {isPopupOpen && selectedProduct && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold">Select Payment</h2>
                        <p className="mt-2">You are purchasing: {selectedProduct.name}</p>
                        <p className="mt-2">Price: {formatRupiah(selectedProduct.price)}</p>
                        <div className="mt-4 flex gap-4">
                            <Button onClick={handleClosePopup}>Cancel</Button>
                            <Button>Proceed to Payment</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
