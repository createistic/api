import { IAL } from '../ial';
export declare class AssertionClaim {
    private readonly _claimName;
    private _purpose;
    private _essential;
    private _ial;
    constructor(claimName: string);
    readonly claimName: string;
    readonly purpose: string;
    readonly essential: boolean;
    readonly ial: IAL;
    withPurpose(purpose: string): AssertionClaim;
    withEssential(essential: boolean): AssertionClaim;
    withIAL(ial: IAL): AssertionClaim;
}
