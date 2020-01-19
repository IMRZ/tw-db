import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationParticipantSets } from "./CampaignDiplomacyNegotiationParticipantSets";
export declare namespace CampaignDiplomacyNegotiationNodes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _scope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get scope(): CampaignDiplomacyNegotiationParticipantSets.Entry | undefined;
    }
}
export default CampaignDiplomacyNegotiationNodes;
