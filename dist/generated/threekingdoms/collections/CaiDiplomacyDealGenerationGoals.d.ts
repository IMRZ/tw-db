import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyDealGenerationGoalNames } from "./CaiDiplomacyDealGenerationGoalNames";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CaiDiplomacyDealGenerationGoals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _treatyKey: string;
        readonly isCrucial: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): CaiDiplomacyDealGenerationGoalNames.Entry | undefined;
        get treatyKey(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CaiDiplomacyDealGenerationGoals;
