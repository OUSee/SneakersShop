
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

export interface Filter {
    start_price: number;
    end_price: number;
    men: boolean;
    women: boolean;
    sizes: {
        size35: boolean;
        size36: boolean;
        size37: boolean;
        size38: boolean;
        size39: boolean;
        size40: boolean;
        size41: boolean;
        size42: boolean;
        size43: boolean;
    };
};