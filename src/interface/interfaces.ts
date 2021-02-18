export interface IToken {
    name: string;
    _id?: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
export interface IData {
    tokens: Array<IToken>
    count: number
}