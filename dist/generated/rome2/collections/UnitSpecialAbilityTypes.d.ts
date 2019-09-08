import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitSpecialAbilityTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly specialAbilityType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitSpecialAbilityTypes;
