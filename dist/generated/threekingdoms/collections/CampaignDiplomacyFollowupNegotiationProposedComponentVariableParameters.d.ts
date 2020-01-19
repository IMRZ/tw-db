import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationProposedComponents } from "./CampaignDiplomacyFollowupNegotiationProposedComponents";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
export declare namespace CampaignDiplomacyFollowupNegotiationProposedComponentVariableParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _variableParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyFollowupNegotiationProposedComponents.Entry | undefined;
        get variableParameter(): CampaignDiplomacyVariables.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiationProposedComponentVariableParameters;
