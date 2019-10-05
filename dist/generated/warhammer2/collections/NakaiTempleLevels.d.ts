import { CollectionCache, CollectionKey } from "../../../common";
import { NakaiTemples } from "./NakaiTemples";
import { Factions } from "./Factions";
import { BuildingLevels } from "./BuildingLevels";
import { EffectBundles } from "./EffectBundles";
export declare namespace NakaiTempleLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _nakaiTemple: string;
        readonly level: number;
        readonly _factionSpawned: string;
        readonly _building: string;
        readonly minBuildingCount: number;
        readonly _effectBundle: string;
        readonly key: string;
        readonly _secondaryBuilding: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly nakaiTemple: NakaiTemples.Entry | undefined;
        readonly factionSpawned: Factions.Entry | undefined;
        readonly building: BuildingLevels.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
        readonly secondaryBuilding: BuildingLevels.Entry | undefined;
    }
}
export default NakaiTempleLevels;
