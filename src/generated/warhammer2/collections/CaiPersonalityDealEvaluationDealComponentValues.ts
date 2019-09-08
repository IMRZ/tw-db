
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealEvaluationComponents } from "./CaiPersonalityDealEvaluationComponents";
import { CaiPersonalityDealEvaluationDealComponentNames } from "./CaiPersonalityDealEvaluationDealComponentNames";

export namespace CaiPersonalityDealEvaluationDealComponentValues {
  export const KEY = new CollectionKey("cai_personality_deal_evaluation_deal_component_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _personalityComponent: string;
    readonly _dealComponent: string;
    readonly bestFriendsValue: number;
    readonly veryFriendlyValue: number;
    readonly friendlyValue: number;
    readonly neutralValue: number;
    readonly unfriendlyValue: number;
    readonly veryUnfriendlyValue: number;
    readonly bitterEnemiesValue: number;
    readonly lastStandBalanceFactor: number;
    readonly totalWarBalanceFactor: number;
    readonly warBalanceFactor: number;
    readonly tensionBalanceFactor: number;
    readonly peaceBalanceFactor: number;
    readonly treacheryValue: number;
    readonly lastStandOpponentStrengthModifier: number;
    readonly totalWarOpponentStrengthModifier: number;
    readonly warOpponentStrengthModifier: number;
    readonly tensionOpponentStrengthModifier: number;
    readonly peaceOpponentStrengthModifier: number;
    readonly opponentTreacheryModifier: number;
    readonly opponentRespectModifier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._personalityComponent = values["personality_component"];
      this._dealComponent = values["deal_component"];
      this.bestFriendsValue = values["best_friends_value"];
      this.veryFriendlyValue = values["very_friendly_value"];
      this.friendlyValue = values["friendly_value"];
      this.neutralValue = values["neutral_value"];
      this.unfriendlyValue = values["unfriendly_value"];
      this.veryUnfriendlyValue = values["very_unfriendly_value"];
      this.bitterEnemiesValue = values["bitter_enemies_value"];
      this.lastStandBalanceFactor = values["last_stand_balance_factor"];
      this.totalWarBalanceFactor = values["total_war_balance_factor"];
      this.warBalanceFactor = values["war_balance_factor"];
      this.tensionBalanceFactor = values["tension_balance_factor"];
      this.peaceBalanceFactor = values["peace_balance_factor"];
      this.treacheryValue = values["treachery_value"];
      this.lastStandOpponentStrengthModifier = values["last_stand_opponent_strength_modifier"];
      this.totalWarOpponentStrengthModifier = values["total_war_opponent_strength_modifier"];
      this.warOpponentStrengthModifier = values["war_opponent_strength_modifier"];
      this.tensionOpponentStrengthModifier = values["tension_opponent_strength_modifier"];
      this.peaceOpponentStrengthModifier = values["peace_opponent_strength_modifier"];
      this.opponentTreacheryModifier = values["opponent_treachery_modifier"];
      this.opponentRespectModifier = values["opponent_respect_modifier"];
    }
    
    get personalityComponent(): CaiPersonalityDealEvaluationComponents.Entry | undefined {
      const collection = <CaiPersonalityDealEvaluationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealEvaluationComponents.KEY, CaiPersonalityDealEvaluationComponents.Entry);
      return collection.find(entry => entry.id === this._personalityComponent);
    }
    
    get dealComponent(): CaiPersonalityDealEvaluationDealComponentNames.Entry | undefined {
      const collection = <CaiPersonalityDealEvaluationDealComponentNames.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealEvaluationDealComponentNames.KEY, CaiPersonalityDealEvaluationDealComponentNames.Entry);
      return collection.find(entry => entry.id === this._dealComponent);
    }
  }
}

export default CaiPersonalityDealEvaluationDealComponentValues;
