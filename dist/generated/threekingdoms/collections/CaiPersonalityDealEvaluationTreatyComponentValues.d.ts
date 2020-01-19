import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealEvaluationComponents } from "./CaiPersonalityDealEvaluationComponents";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiValueSets } from "./CaiValueSets";
export declare namespace CaiPersonalityDealEvaluationTreatyComponentValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentKey: string;
        readonly _treatyComponentKey: string;
        readonly _valueSetKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get componentKey(): CaiPersonalityDealEvaluationComponents.Entry | undefined;
        get treatyComponentKey(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get valueSetKey(): CaiValueSets.Entry | undefined;
    }
}
export default CaiPersonalityDealEvaluationTreatyComponentValues;
