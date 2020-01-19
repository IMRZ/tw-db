import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CombatPotentialsAdjustmentTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly combatPotentialAdjustmentType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CombatPotentialsAdjustmentTypes;
