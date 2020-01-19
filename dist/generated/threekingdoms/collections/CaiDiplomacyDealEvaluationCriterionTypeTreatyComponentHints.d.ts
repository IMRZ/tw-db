import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CaiDiplomacyDealEvaluationCriterionTypeTreatyComponentHints {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mainComponentKey: string;
        readonly _hintComponentKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get mainComponentKey(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get hintComponentKey(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CaiDiplomacyDealEvaluationCriterionTypeTreatyComponentHints;
