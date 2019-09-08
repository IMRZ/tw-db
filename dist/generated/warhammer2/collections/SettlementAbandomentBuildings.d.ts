import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace SettlementAbandomentBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _building: string;
        readonly _campaignGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly building: BuildingLevels.Entry | undefined;
        readonly campaignGroup: CampaignGroups.Entry | undefined;
    }
}
export default SettlementAbandomentBuildings;
