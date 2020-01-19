import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiDiplomacyAutomaticParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly parameterType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiDiplomacyAutomaticParameters;
