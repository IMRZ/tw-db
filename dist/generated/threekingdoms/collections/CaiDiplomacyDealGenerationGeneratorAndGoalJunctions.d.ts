import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealGenerationGenerators } from "./CaiPersonalityDealGenerationGenerators";
import { CaiDiplomacyDealGenerationGoals } from "./CaiDiplomacyDealGenerationGoals";
import { CaiDiplomacyDealEvaluationDiplomaticEventRespondents } from "./CaiDiplomacyDealEvaluationDiplomaticEventRespondents";
import { CaiTargetGroups } from "./CaiTargetGroups";
import { CaiConditionSets } from "./CaiConditionSets";
export declare namespace CaiDiplomacyDealGenerationGeneratorAndGoalJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _generatorKey: string;
        readonly _goalKey: string;
        readonly _from: string;
        readonly _recipientGroup: string;
        readonly _conditionSet: string;
        readonly _to: string;
        readonly _thirdPartyGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get generatorKey(): CaiPersonalityDealGenerationGenerators.Entry | undefined;
        get goalKey(): CaiDiplomacyDealGenerationGoals.Entry | undefined;
        get from(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined;
        get recipientGroup(): CaiTargetGroups.Entry | undefined;
        get conditionSet(): CaiConditionSets.Entry | undefined;
        get to(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined;
        get thirdPartyGroup(): CaiTargetGroups.Entry | undefined;
    }
}
export default CaiDiplomacyDealGenerationGeneratorAndGoalJunctions;
