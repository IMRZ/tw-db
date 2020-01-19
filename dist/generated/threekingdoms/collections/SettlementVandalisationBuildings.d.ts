import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace SettlementVandalisationBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _building: string;
        readonly _campaignGroup: string;
        readonly frequency: number;
        constructor(collectionCache: CollectionCache, values: any);
        get building(): BuildingLevels.Entry | undefined;
        get campaignGroup(): CampaignGroups.Entry | undefined;
    }
}
export default SettlementVandalisationBuildings;
