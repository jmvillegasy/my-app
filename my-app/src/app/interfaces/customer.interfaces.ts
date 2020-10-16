export type CustomerType = 'regular' | 'vip';

export interface Customer{
    name:string;
    status: CustomerType;
}