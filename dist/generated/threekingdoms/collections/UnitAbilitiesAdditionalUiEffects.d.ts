import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitAbilitiesAdditionalUiEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedText: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitAbilitiesAdditionalUiEffects;
