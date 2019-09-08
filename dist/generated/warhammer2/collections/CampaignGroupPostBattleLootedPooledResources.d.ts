import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";
export declare namespace CampaignGroupPostBattleLootedPooledResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _resourceFactor: string;
        readonly exponentMultiplier: number;
        readonly exponent: number;
        readonly baseMultiplier: number;
        readonly minimum: number;
        readonly maximum: number;
        readonly baseAmount: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly resourceFactor: PooledResourceFactorJunctions.Entry | undefined;
    }
}
export default CampaignGroupPostBattleLootedPooledResources;
