import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationNodes } from "./CampaignDiplomacyNegotiationNodes";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
import { DiplomacyKeys } from "./DiplomacyKeys";
export declare namespace CampaignDiplomacyNegotiationNodeSpeeches {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _negotiationNode: string;
        readonly _participantSpeaking: string;
        readonly _speechType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get negotiationNode(): CampaignDiplomacyNegotiationNodes.Entry | undefined;
        get participantSpeaking(): CampaignDiplomacyNegotiationRoles.Entry | undefined;
        get speechType(): DiplomacyKeys.Entry | undefined;
    }
}
export default CampaignDiplomacyNegotiationNodeSpeeches;
