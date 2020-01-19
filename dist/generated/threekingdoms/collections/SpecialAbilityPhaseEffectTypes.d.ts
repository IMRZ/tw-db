import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SpecialAbilityPhaseEffectTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly effectType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SpecialAbilityPhaseEffectTypes;
