// ======================================================
//Mini Project — Simple Orders - intermediário (Early)
// ======================================================

type Progress = "in progress" | "ready";

type Order = {
    orderId: string,
    price: number
}

type Client = {
    name: string;
    password: number;
    progress: Progress;
    orders: Order[];
}

const clients : Client[] = [];

// Functions to generaty aleatory passwords
function generate3DigitPassword(): number {
    return Math.floor(100 + Math.random() * 900);
}

// Function to create order
function createOrder ( name: string, progress: Progress, orders: Order[]) {
    const newOrder: Client = {
        name,
        password: generate3DigitPassword(),
        progress,
        orders
    }
    clients.push(newOrder);
}

createOrder("Client1", "in progress",  [{ orderId: "A1", price: 100 }, {orderId: "B2", price: 250 }]);
createOrder("Client2", "ready" ,  [{ orderId: "A3", price: 200 }, {orderId: "B5", price: 150 }]);

clients.forEach(orders => {
    console.log(orders);
})


/*
concepts:
- Types
- Relationship one → many(Client → Orders[])
- Random -  Automatic password generation
- Composite types
 */
