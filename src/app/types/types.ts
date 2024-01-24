
export enum Genre {
    MALE, FEMALE
}

export interface User {
    id: number;
    name: string;
    email: string;
    genre: Genre;
    phone: string;
    birthday: Date;

    createdAt: Date;
    updatedAt:Date;
}

export interface Category {
    name: string;
    group: Group;
}

export interface Group {
    id: number;
    name: string;
    description: string;
    code: string;
    user: User[]

    createdBy: User;
    createdAt: Date;
    updatedAt:Date;
}

export interface Job {
    id: number;
    name: string;
    description: string;
    quantity: number;
    check: boolean;
    category: Category

    group: Group;
    createdBy: User;
    createdAt: Date;
    updatedAt:Date;
}