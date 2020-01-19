
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealGenerationGenerators } from "./CaiPersonalityDealGenerationGenerators";
import { CaiDiplomacyDealGenerationGoals } from "./CaiDiplomacyDealGenerationGoals";
import { CaiDiplomacyDealEvaluationDiplomaticEventRespondents } from "./CaiDiplomacyDealEvaluationDiplomaticEventRespondents";
import { CaiTargetGroups } from "./CaiTargetGroups";
import { CaiConditionSets } from "./CaiConditionSets";

export namespace CaiDiplomacyDealGenerationGeneratorAndGoalJunctions {
  export const KEY = new CollectionKey("cai_diplomacy_deal_generation_generator_and_goal_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _generatorKey: string;
    readonly _goalKey: string;
    readonly _from: string;
    readonly _recipientGroup: string;
    readonly _conditionSet: string;
    readonly _to: string;
    readonly _thirdPartyGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._generatorKey = values["generator_key"];
      this._goalKey = values["goal_key"];
      this._from = values["from"];
      this._recipientGroup = values["recipient_group"];
      this._conditionSet = values["condition_set"];
      this._to = values["to"];
      this._thirdPartyGroup = values["third_party_group"];
    }
    
    get generatorKey(): CaiPersonalityDealGenerationGenerators.Entry | undefined {
      const collection = <CaiPersonalityDealGenerationGenerators.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealGenerationGenerators.KEY, CaiPersonalityDealGenerationGenerators.Entry);
      return collection.find(entry => entry.id === this._generatorKey);
    }
    
    get goalKey(): CaiDiplomacyDealGenerationGoals.Entry | undefined {
      const collection = <CaiDiplomacyDealGenerationGoals.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealGenerationGoals.KEY, CaiDiplomacyDealGenerationGoals.Entry);
      return collection.find(entry => entry._key === this._goalKey);
    }
    
    get from(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationDiplomaticEventRespondents.KEY, CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry);
      return collection.find(entry => entry.key === this._from);
    }
    
    get recipientGroup(): CaiTargetGroups.Entry | undefined {
      const collection = <CaiTargetGroups.Entry[]>this.collectionCache.getCollection(CaiTargetGroups.KEY, CaiTargetGroups.Entry);
      return collection.find(entry => entry.key === this._recipientGroup);
    }
    
    get conditionSet(): CaiConditionSets.Entry | undefined {
      const collection = <CaiConditionSets.Entry[]>this.collectionCache.getCollection(CaiConditionSets.KEY, CaiConditionSets.Entry);
      return collection.find(entry => entry.key === this._conditionSet);
    }
    
    get to(): CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry | undefined {
      const collection = <CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyDealEvaluationDiplomaticEventRespondents.KEY, CaiDiplomacyDealEvaluationDiplomaticEventRespondents.Entry);
      return collection.find(entry => entry.key === this._to);
    }
    
    get thirdPartyGroup(): CaiTargetGroups.Entry | undefined {
      const collection = <CaiTargetGroups.Entry[]>this.collectionCache.getCollection(CaiTargetGroups.KEY, CaiTargetGroups.Entry);
      return collection.find(entry => entry.key === this._thirdPartyGroup);
    }
  }
}

export default CaiDiplomacyDealGenerationGeneratorAndGoalJunctions;
