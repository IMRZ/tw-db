import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildings } from "./BattlefieldBuildings";
import { Climates } from "./Climates";
import { BattleTerrainFarms } from "./BattleTerrainFarms";
export declare namespace FortUnderlayClimateJcts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _fortName: string;
        readonly _climate: string;
        readonly snowUnderlay: boolean;
        readonly _underlay: string;
        constructor(collectionCache: CollectionCache, values: any);
        get fortName(): BattlefieldBuildings.Entry | undefined;
        get climate(): Climates.Entry | undefined;
        get underlay(): BattleTerrainFarms.Entry | undefined;
    }
}
export default FortUnderlayClimateJcts;
