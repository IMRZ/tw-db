import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";
export declare namespace CampaignMercenaryUnitCharacterLevelRestrictions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly characterLevel: number;
        readonly _factionOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unit: MainUnits.Entry | undefined;
        readonly factionOverride: Factions.Entry | undefined;
    }
}
export default CampaignMercenaryUnitCharacterLevelRestrictions;
