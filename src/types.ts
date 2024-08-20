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
};

export enum Endpoints {
    GET_SNEAKERS = "/sneakers",
    GET_TEAM = "/team",
    GET_CART_BY_UID = "/cart/?uid=",
    CREATE_CART = "/cart",
}

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
}

export const mapPrice = (price: number) => {
    var n = price.toString();
    var separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
};
