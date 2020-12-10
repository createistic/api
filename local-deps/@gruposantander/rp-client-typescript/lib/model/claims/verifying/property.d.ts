import { Operator } from './operator';
export declare class Property<T> {
    protected _operand: T;
    protected _operator: Operator;
    private _propertyName;
    constructor(propertyName: string);
    readonly operand: T;
    readonly operator: Operator;
    readonly propertyName: string;
    eq(operand: T): Property<T>;
}
