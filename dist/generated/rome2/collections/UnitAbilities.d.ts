import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitAbilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly stationaryForTurn: boolean;
        readonly supersedesAbility: string;
        readonly requiresEffectEnabling: boolean;
        readonly tooltipText: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitAbilities;
