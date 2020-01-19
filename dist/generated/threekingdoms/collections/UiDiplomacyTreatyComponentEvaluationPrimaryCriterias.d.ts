import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiDiplomacyDealEvaluationCriterionTypes } from "./CaiDiplomacyDealEvaluationCriterionTypes";
export declare namespace UiDiplomacyTreatyComponentEvaluationPrimaryCriterias {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treatyComponent: string;
        readonly _criterionType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get criterionType(): CaiDiplomacyDealEvaluationCriterionTypes.Entry | undefined;
    }
}
export default UiDiplomacyTreatyComponentEvaluationPrimaryCriterias;
