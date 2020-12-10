import { AssertionClaimSimple } from './assertion-claim-simple';
export declare class AssertionClaimComparator<T> extends AssertionClaimSimple<T> {
    gt(operand: T): AssertionClaimSimple<T>;
    gte(operand: T): AssertionClaimSimple<T>;
    lt(operand: T): AssertionClaimSimple<T>;
    lte(operand: T): AssertionClaimSimple<T>;
}
