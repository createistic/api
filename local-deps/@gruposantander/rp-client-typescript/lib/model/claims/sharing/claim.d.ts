import { IAL } from '../ial';
export declare class Claim {
    private readonly _claimName;
    private _purpose;
    private _essential;
    private _ial;
    constructor(claimName: string);
    readonly claimName: string;
    readonly purpose: string;
    readonly essential: boolean;
    readonly ial: IAL;
    withPurpose(purpose: string): Claim;
    withEssential(essential: boolean): Claim;
    withIAL(ial: IAL): Claim;
}
