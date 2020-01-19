import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationProposedComponents } from "./CampaignDiplomacyFollowupNegotiationProposedComponents";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";
export declare namespace CampaignDiplomacyFollowupNegotiationProposedComponentAllianceOathParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _allianceOathParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyFollowupNegotiationProposedComponents.Entry | undefined;
        get allianceOathParameter(): CampaignDiplomacyAllianceOaths.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiationProposedComponentAllianceOathParameters;
