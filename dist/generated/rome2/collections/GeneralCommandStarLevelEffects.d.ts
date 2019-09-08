import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace GeneralCommandStarLevelEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly commandStarLevel: number;
        readonly aliveMoraleBonus: number;
        readonly nearbyMoraleBonus: number;
        readonly meleeAttackBonus: number;
        readonly meleeDefenceBonus: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default GeneralCommandStarLevelEffects;
