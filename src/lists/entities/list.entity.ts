import {Column, Model, Table} from "sequelize-typescript";

export type ListAttributes = {
    name: string;
};

@Table 
export class List extends Model<ListAttributes> {
    @Column
    name: string;
};
