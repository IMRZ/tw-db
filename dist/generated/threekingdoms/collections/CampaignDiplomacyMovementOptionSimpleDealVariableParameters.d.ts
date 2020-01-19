import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptionSimpleDeals } from "./CampaignDiplomacyMovementOptionSimpleDeals";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
export declare namespace CampaignDiplomacyMovementOptionSimpleDealVariableParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly parameterIndex: number;
        readonly _variableParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): CampaignDiplomacyMovementOptionSimpleDeals.Entry | undefined;
        get variableParameter(): CampaignDiplomacyVariables.Entry | undefined;
    }
}
export default CampaignDiplomacyMovementOptionSimpleDealVariableParameters;
