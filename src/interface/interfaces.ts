export interface IToken {
    name: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
export interface IData {
    tokens: Array<IToken>
    count: number
}