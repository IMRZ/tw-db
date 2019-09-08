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
        readonly fortName: BattlefieldBuildings.Entry | undefined;
        readonly climate: Climates.Entry | undefined;
        readonly underlay: BattleTerrainFarms.Entry | undefined;
    }
}
export default FortUnderlayClimateJcts;
