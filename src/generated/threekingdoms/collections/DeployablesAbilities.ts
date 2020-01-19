
import { CollectionCache, CollectionKey } from "../../../common";
import { Deployables } from "./Deployables";
import { BattleAiAbilitiesUsageTemplateNames } from "./BattleAiAbilitiesUsageTemplateNames";
import { SpecialAbilityStances } from "./SpecialAbilityStances";

export namespace DeployablesAbilities {
  export const KEY = new CollectionKey("deployables_abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly abilityKey: string;
    readonly _deployable: string;
    readonly uniqueId: number;
    readonly numUses: number;
    readonly rechargeTime: number;
    readonly windUpTime: number;
    readonly dragGround: boolean;
    readonly clickGround: boolean;
    readonly interceptDistance: number;
    readonly _aiUsage: string;
    readonly _windUpStance: string;
    readonly effectText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.abilityKey = values["ability_key"];
      this._deployable = values["deployable"];
      this.uniqueId = values["unique_id"];
      this.numUses = values["num_uses"];
      this.rechargeTime = values["recharge_time"];
      this.windUpTime = values["wind_up_time"];
      this.dragGround = !!values["drag_ground"];
      this.clickGround = !!values["click_ground"];
      this.interceptDistance = values["intercept_distance"];
      this._aiUsage = values["ai_usage"];
      this._windUpStance = values["wind_up_stance"];
      this.effectText = values["effect_text"];
    }
    
    get deployable(): Deployables.Entry | undefined {
      const collection = <Deployables.Entry[]>this.collectionCache.getCollection(Deployables.KEY, Deployables.Entry);
      return collection.find(entry => entry.key === this._deployable);
    }
    
    get aiUsage(): BattleAiAbilitiesUsageTemplateNames.Entry | undefined {
      const collection = <BattleAiAbilitiesUsageTemplateNames.Entry[]>this.collectionCache.getCollection(BattleAiAbilitiesUsageTemplateNames.KEY, BattleAiAbilitiesUsageTemplateNames.Entry);
      return collection.find(entry => entry.aiAbilityUsageTemplateKey === this._aiUsage);
    }
    
    get windUpStance(): SpecialAbilityStances.Entry | undefined {
      const collection = <SpecialAbilityStances.Entry[]>this.collectionCache.getCollection(SpecialAbilityStances.KEY, SpecialAbilityStances.Entry);
      return collection.find(entry => entry.key === this._windUpStance);
    }
  }
}

export default DeployablesAbilities;
