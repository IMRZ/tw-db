import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopeOwnerships } from "./CampaignEffectScopeOwnerships";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
export declare namespace CampaignEffectScopeOwnershipTreatyComponentSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _scopeOwnership: string;
        readonly _treatyComponentSet: string;
        readonly ownershipFactionHasSupersetOfSpecifiedSet: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get scopeOwnership(): CampaignEffectScopeOwnerships.Entry | undefined;
        get treatyComponentSet(): CampaignDiplomacyTreatyComponentSets.Entry | undefined;
    }
}
export default CampaignEffectScopeOwnershipTreatyComponentSets;
