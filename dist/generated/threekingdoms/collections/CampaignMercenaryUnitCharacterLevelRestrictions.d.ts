import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace CampaignMercenaryUnitCharacterLevelRestrictions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly characterLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        get unit(): MainUnits.Entry | undefined;
    }
}
export default CampaignMercenaryUnitCharacterLevelRestrictions;
