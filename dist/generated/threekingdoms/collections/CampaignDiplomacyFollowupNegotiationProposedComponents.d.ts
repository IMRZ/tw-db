import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiations } from "./CampaignDiplomacyFollowupNegotiations";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CampaignDiplomacyFollowupNegotiationProposedComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _negotiation: string;
        readonly _proposer: string;
        readonly _recipient: string;
        readonly _component: string;
        constructor(collectionCache: CollectionCache, values: any);
        get negotiation(): CampaignDiplomacyFollowupNegotiations.Entry | undefined;
        get proposer(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined;
        get recipient(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined;
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiationProposedComponents;
