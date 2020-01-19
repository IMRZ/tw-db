import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiMilitaryAggressivenessPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _shortDescription: string;
        readonly _longDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
        get shortDescription(): DiplomacyStrings.Entry | undefined;
        get longDescription(): DiplomacyStrings.Entry | undefined;
    }
}
export default CaiMilitaryAggressivenessPolicies;
