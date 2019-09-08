
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { ArmySpecialAbilities } from "./ArmySpecialAbilities";

export namespace BattleContextArmySpecialAbilityJunctions {
  export const KEY = new CollectionKey("battle_context_army_special_ability_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _battleContext: string;
    readonly _armySpecialAbility: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._battleContext = values["battle_context"];
      this._armySpecialAbility = values["army_special_ability"];
    }
    
    get battleContext(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined {
      const collection = <CampaignBonusValueBattleContextSpecifiers.Entry[]>this.collectionCache.getCollection(CampaignBonusValueBattleContextSpecifiers.KEY, CampaignBonusValueBattleContextSpecifiers.Entry);
      return collection.find(entry => entry.key === this._battleContext);
    }
    
    get armySpecialAbility(): ArmySpecialAbilities.Entry | undefined {
      const collection = <ArmySpecialAbilities.Entry[]>this.collectionCache.getCollection(ArmySpecialAbilities.KEY, ArmySpecialAbilities.Entry);
      return collection.find(entry => entry.armySpecialAbility === this._armySpecialAbility);
    }
  }
}

export default BattleContextArmySpecialAbilityJunctions;
