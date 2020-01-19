import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignSiegeEscalationLevels } from "./CampaignSiegeEscalationLevels";
export declare namespace SiegeObstacles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevel: string;
        readonly _siegeEscalationLevel: number;
        readonly numObstacles: number;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get siegeEscalationLevel(): CampaignSiegeEscalationLevels.Entry | undefined;
    }
}
export default SiegeObstacles;
