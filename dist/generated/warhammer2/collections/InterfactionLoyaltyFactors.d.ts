import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace InterfactionLoyaltyFactors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minimumValue: number;
        readonly maximumValue: number;
        readonly localisedNegativeName: string;
        readonly localisedPositiveName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default InterfactionLoyaltyFactors;
