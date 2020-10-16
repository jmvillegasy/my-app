export type CustomerType = 'regular' | 'vip' | 'new' | boolean;
export type Category = 'entrace' | 'main' | 'dessert';

export interface Customer{
    name:string;
    level: CustomerType;
}