import { Property } from './property';
export declare class PropertyComparator<T> extends Property<T> {
    gt(operand: T): PropertyComparator<T>;
    gte(operand: T): PropertyComparator<T>;
    lt(operand: T): PropertyComparator<T>;
    lte(operand: T): PropertyComparator<T>;
}
