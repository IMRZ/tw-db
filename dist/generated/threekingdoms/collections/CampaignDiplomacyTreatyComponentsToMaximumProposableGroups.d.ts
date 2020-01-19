import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponentMaximumProposableGroups } from "./CampaignDiplomacyTreatyComponentMaximumProposableGroups";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CampaignDiplomacyTreatyComponentsToMaximumProposableGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _component: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignDiplomacyTreatyComponentMaximumProposableGroups.Entry | undefined;
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentsToMaximumProposableGroups;
