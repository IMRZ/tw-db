import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiDiplomacyDealEvaluationCriterionTypes } from "./CaiDiplomacyDealEvaluationCriterionTypes";
import { CaiDiplomacyDealEvaluationComponentCriterionVariableTypes } from "./CaiDiplomacyDealEvaluationComponentCriterionVariableTypes";
export declare namespace CaiDiplomacyDealEvaluationDealComponent {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treatyComponent: string;
        readonly _criterionType: string;
        readonly _componentCriterionVariableType: string;
        readonly negate: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get criterionType(): CaiDiplomacyDealEvaluationCriterionTypes.Entry | undefined;
        get componentCriterionVariableType(): CaiDiplomacyDealEvaluationComponentCriterionVariableTypes.Entry | undefined;
    }
}
export default CaiDiplomacyDealEvaluationDealComponent;
