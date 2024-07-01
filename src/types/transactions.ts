export type Transaction = {
    id: string;
    status: "completed" | "Pening" | "Cancelado";
    payment_deets: {
        name: string;
        number: number;
        type: string;
        amt: number;
        date: string;
        vender: string;
    };
};
