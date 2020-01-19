import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";
import { PooledResourceScopes } from "./PooledResourceScopes";
export declare namespace CampaignGroupPostBattleCasualtyResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _campaignGroup: string;
        readonly _resourceFactor: string;
        readonly amountPerEnemyCasualty: number;
        readonly amountPerOwnCasualty: number;
        readonly _resourceTransactionScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get resourceFactor(): PooledResourceFactorJunctions.Entry | undefined;
        get resourceTransactionScope(): PooledResourceScopes.Entry | undefined;
    }
}
export default CampaignGroupPostBattleCasualtyResources;
