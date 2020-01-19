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
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get resourceFactor(): PooledResourceFactorJunctions.Entry | undefined;
    }
}
export default CampaignGroupPostBattleLootedPooledResources;
