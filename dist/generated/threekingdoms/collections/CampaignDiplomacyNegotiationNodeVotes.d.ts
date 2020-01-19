import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationNodes } from "./CampaignDiplomacyNegotiationNodes";
import { CampaignDiplomacyNegotiationVotingSuccessCriterias } from "./CampaignDiplomacyNegotiationVotingSuccessCriterias";
export declare namespace CampaignDiplomacyNegotiationNodeVotes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _negotiationNode: string;
        readonly proposers: boolean;
        readonly primary: boolean;
        readonly _successCriteria: string;
        readonly canRejectIndividualComponents: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get negotiationNode(): CampaignDiplomacyNegotiationNodes.Entry | undefined;
        get successCriteria(): CampaignDiplomacyNegotiationVotingSuccessCriterias.Entry | undefined;
    }
}
export default CampaignDiplomacyNegotiationNodeVotes;
