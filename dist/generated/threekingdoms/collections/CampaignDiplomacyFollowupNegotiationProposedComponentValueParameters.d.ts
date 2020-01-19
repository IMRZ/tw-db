import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationProposedComponents } from "./CampaignDiplomacyFollowupNegotiationProposedComponents";
export declare namespace CampaignDiplomacyFollowupNegotiationProposedComponentValueParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly valueParameter: number;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyFollowupNegotiationProposedComponents.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiationProposedComponentValueParameters;
