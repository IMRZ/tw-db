import { CollectionCache, CollectionKey } from "../../../common";
import { CeoSets } from "./CeoSets";
export declare namespace LoyaltyFactors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minimumValue: number;
        readonly maximumValue: number;
        readonly localisedNegativeName: string;
        readonly localisedPositiveName: string;
        readonly ignoreReset: boolean;
        readonly _dataDrivenFactorRequiresCeoEquippedInSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get dataDrivenFactorRequiresCeoEquippedInSet(): CeoSets.Entry | undefined;
    }
}
export default LoyaltyFactors;
