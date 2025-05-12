interface IProduct {
    id?: number;
    name: string;
    description?: string;
    price: number;
    stock?: number;
    image: string;
    categoryId?: number;
}

interface ICategory {
    id: number;
    name: string;
    products: IProduct[];
}

enum eOrderStatus {
    PENDING = "pending",
    APPOVED = "approved",
    REJECTED = "rejected"
}

interface IOrder {
    id: number;
    status: string;
    date: string;
    userId: string;
    products: IProduct[];
}

enum eRole {
    ADMIN = "admin",
    USER = "user"
}

interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: eRole;
    orders: IOrder[];
}

export default IProduct;