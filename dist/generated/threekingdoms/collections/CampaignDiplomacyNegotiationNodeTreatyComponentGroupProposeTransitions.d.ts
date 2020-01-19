import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationNodes } from "./CampaignDiplomacyNegotiationNodes";
import { CampaignDiplomacyTreatyComponentGroups } from "./CampaignDiplomacyTreatyComponentGroups";
export declare namespace CampaignDiplomacyNegotiationNodeTreatyComponentGroupProposeTransitions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _nodeFrom: string;
        readonly _nodeTo: string;
        readonly _treatyComponentGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get nodeFrom(): CampaignDiplomacyNegotiationNodes.Entry | undefined;
        get nodeTo(): CampaignDiplomacyNegotiationNodes.Entry | undefined;
        get treatyComponentGroup(): CampaignDiplomacyTreatyComponentGroups.Entry | undefined;
    }
}
export default CampaignDiplomacyNegotiationNodeTreatyComponentGroupProposeTransitions;
