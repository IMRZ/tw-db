
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiPersonalityStrategicComponents {
  export const KEY = new CollectionKey("cai_personality_strategic_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly maxFriendlyAttitude: number;
    readonly friendlyTowardsFriendMultiplier: number;
    readonly hostileTowardsFriendMultiplier: number;
    readonly maxHostileAttitude: number;
    readonly friendlyTowardsEnemyMultiplier: number;
    readonly hostileTowardsEnemyMultiplier: number;
    readonly unknownFactionMultiplier: number;
    readonly maxMercProportion: number;
    readonly minMercCap: number;
    readonly enemyStrengthModifier: number;
    readonly enemyThreatStrengthModifier: number;
    readonly minRetreatRatio: number;
    readonly minRetreatToSettlementRatio: number;
    readonly strategicBalanceOpportunismFactor: number;
    readonly fortifiedSettlementAssaultStrengthModifier: number;
    readonly fortifiedSettlementDefendStrengthModifier: number;
    readonly _shortDescription: string;
    readonly _longDescription: string;
    readonly lastSettlementModifier: number;
    readonly minRefuseTunnelingInterceptRatio: number;
    readonly useClassicStanceGenerationMechanics: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.maxFriendlyAttitude = values["max_friendly_attitude"];
      this.friendlyTowardsFriendMultiplier = values["friendly_towards_friend_multiplier"];
      this.hostileTowardsFriendMultiplier = values["hostile_towards_friend_multiplier"];
      this.maxHostileAttitude = values["max_hostile_attitude"];
      this.friendlyTowardsEnemyMultiplier = values["friendly_towards_enemy_multiplier"];
      this.hostileTowardsEnemyMultiplier = values["hostile_towards_enemy_multiplier"];
      this.unknownFactionMultiplier = values["unknown_faction_multiplier"];
      this.maxMercProportion = values["max_merc_proportion"];
      this.minMercCap = values["min_merc_cap"];
      this.enemyStrengthModifier = values["enemy_strength_modifier"];
      this.enemyThreatStrengthModifier = values["enemy_threat_strength_modifier"];
      this.minRetreatRatio = values["min_retreat_ratio"];
      this.minRetreatToSettlementRatio = values["min_retreat_to_settlement_ratio"];
      this.strategicBalanceOpportunismFactor = values["strategic_balance_opportunism_factor"];
      this.fortifiedSettlementAssaultStrengthModifier = values["fortified_settlement_assault_strength_modifier"];
      this.fortifiedSettlementDefendStrengthModifier = values["fortified_settlement_defend_strength_modifier"];
      this._shortDescription = values["short_description"];
      this._longDescription = values["long_description"];
      this.lastSettlementModifier = values["last_settlement_modifier"];
      this.minRefuseTunnelingInterceptRatio = values["min_refuse_tunneling_intercept_ratio"];
      this.useClassicStanceGenerationMechanics = !!values["use_classic_stance_generation_mechanics"];
    }
    
    get shortDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._shortDescription);
    }
    
    get longDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._longDescription);
    }
  }
}

export default CaiPersonalityStrategicComponents;
