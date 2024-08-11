
export enum Status {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCSESS = "SUCSESS",
    ERROR = "ERROR",
}

export type Sneaker = {
    id: number;
    vendorСode: string;
    inStock: number;
    title: string;
    description: string;
    imgUrl: string;
    stars: number;
    sizes: number[];
    price: string;
    oldPrice: string;
    gender: string;
    color: string;
    compound: string;
    country: string;
};

export type TeamMember = {
    id: number;
    imgUrl: string;
    name: string;
    role: string;
};

export type Cart = { 
    uid: string;
    items: Sneaker[];
    id: number | undefined
}

export enum Endpoints {
    GET_SNEAKERS = "/sneakers",
    GET_TEAM = "/team",
    GET_CART_BY_UID = "/cart/?uid=",
    CREATE_CART="/cart",
}

export type PostCart = {
    uid: string;
    items: Sneaker[];
};