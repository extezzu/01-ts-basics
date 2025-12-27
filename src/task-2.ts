console.log("\n========== TASK 2 ==========\n");

interface Product {
    readonly id: number,
    title: string,
    description?: string;  
}

const product: Product = {
    id: 1,
    title: "Tablet",
    description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);