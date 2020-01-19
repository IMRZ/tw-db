import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyDealGenerationGoals } from "./CaiDiplomacyDealGenerationGoals";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CaiDiplomacyDealGenerationGoalSecondaryTreaties {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _goalKey: string;
        readonly _treatyKey: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get goalKey(): CaiDiplomacyDealGenerationGoals.Entry | undefined;
        get treatyKey(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CaiDiplomacyDealGenerationGoalSecondaryTreaties;
