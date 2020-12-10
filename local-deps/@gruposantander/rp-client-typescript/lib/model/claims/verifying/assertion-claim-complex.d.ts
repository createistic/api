import { AssertionClaim } from './assertion-claim';
import { Property } from './property';
export declare class AssertionClaimComplex extends AssertionClaim {
    private _properties;
    readonly properties: any[];
    withAssertion<T>(property: Property<T>): AssertionClaimComplex;
}
