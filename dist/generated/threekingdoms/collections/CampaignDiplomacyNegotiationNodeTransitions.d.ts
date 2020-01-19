import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationNodes } from "./CampaignDiplomacyNegotiationNodes";
import { CampaignDiplomacyNegotiationNodeTransitionTypes } from "./CampaignDiplomacyNegotiationNodeTransitionTypes";
export declare namespace CampaignDiplomacyNegotiationNodeTransitions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _from: string;
        readonly _to: string;
        readonly _transition: string;
        constructor(collectionCache: CollectionCache, values: any);
        get from(): CampaignDiplomacyNegotiationNodes.Entry | undefined;
        get to(): CampaignDiplomacyNegotiationNodes.Entry | undefined;
        get transition(): CampaignDiplomacyNegotiationNodeTransitionTypes.Entry | undefined;
    }
}
export default CampaignDiplomacyNegotiationNodeTransitions;
