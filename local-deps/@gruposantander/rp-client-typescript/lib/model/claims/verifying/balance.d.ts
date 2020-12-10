import { Property } from './property';
import { PropertyComparator } from './property-comparator';
export declare class Balance {
    static currency(): Property<string>;
    static amount(): PropertyComparator<number>;
}
