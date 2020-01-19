import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SpecialAbilityStances {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly splashAttack: boolean;
        readonly useShootStance: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SpecialAbilityStances;
