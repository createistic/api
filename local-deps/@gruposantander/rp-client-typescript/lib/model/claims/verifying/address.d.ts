import { Property } from './property';
export declare class Address {
    static formatted(): Property<string>;
    static streetAddress(): Property<string>;
    static locality(): Property<string>;
    static region(): Property<string>;
    static postalCode(): Property<string>;
    static country(): Property<string>;
}
