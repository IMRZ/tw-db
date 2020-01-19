import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationNodes } from "./CampaignDiplomacyNegotiationNodes";
import { CampaignDiplomacyNegotiationParticipantSets } from "./CampaignDiplomacyNegotiationParticipantSets";
export declare namespace CampaignDiplomacyNegotiationTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _startNode: string;
        readonly _participants: string;
        constructor(collectionCache: CollectionCache, values: any);
        get startNode(): CampaignDiplomacyNegotiationNodes.Entry | undefined;
        get participants(): CampaignDiplomacyNegotiationParticipantSets.Entry | undefined;
    }
}
export default CampaignDiplomacyNegotiationTypes;
