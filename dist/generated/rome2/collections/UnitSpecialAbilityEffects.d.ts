import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitSpecialAbilityEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _id: any;
        readonly _unitStatModifier: any;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitSpecialAbilityEffects;
