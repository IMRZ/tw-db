import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";
export declare namespace CampaignDiplomacyTreatyComponentResourceTransactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treatyComponent: string;
        readonly _resourceTransaction: string;
        readonly _pooledResourceScope: string;
        readonly recurring: boolean;
        readonly appliedToProposer: boolean;
        readonly _reasonIfUnavailable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get resourceTransaction(): ResourceTransactions.Entry | undefined;
        get pooledResourceScope(): PooledResourceScopes.Entry | undefined;
        get reasonIfUnavailable(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentResourceTransactions;
