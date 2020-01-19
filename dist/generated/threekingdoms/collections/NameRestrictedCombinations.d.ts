import { CollectionCache, CollectionKey } from "../../../common";
import { Names } from "./Names";
export declare namespace NameRestrictedCombinations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _foundName: number;
        readonly _restrictedCombination: number;
        readonly _replaceFoundNameWith: number;
        constructor(collectionCache: CollectionCache, values: any);
        get foundName(): Names.Entry | undefined;
        get restrictedCombination(): Names.Entry | undefined;
        get replaceFoundNameWith(): Names.Entry | undefined;
    }
}
export default NameRestrictedCombinations;
