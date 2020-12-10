import { AssertionClaim } from './assertion-claim';
import { Operator } from './operator';
export declare class AssertionClaimSimple<T> extends AssertionClaim {
    protected _operand: T;
    protected _operator: Operator;
    readonly operand: T;
    readonly operator: Operator;
    equal(operand: T): AssertionClaimSimple<T>;
}
