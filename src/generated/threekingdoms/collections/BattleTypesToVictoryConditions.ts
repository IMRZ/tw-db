
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleTypes } from "./BattleTypes";
import { VictoryConditions } from "./VictoryConditions";

export namespace BattleTypesToVictoryConditions {
  export const KEY = new CollectionKey("battle_types_to_victory_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleType: string;
    readonly _attackerVictoryCondition: string;
    readonly _defenderVictoryCondition: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleType = values["battle_type"];
      this._attackerVictoryCondition = values["attacker_victory_condition"];
      this._defenderVictoryCondition = values["defender_victory_condition"];
    }
    
    get battleType(): BattleTypes.Entry | undefined {
      const collection = <BattleTypes.Entry[]>this.collectionCache.getCollection(BattleTypes.KEY, BattleTypes.Entry);
      return collection.find(entry => entry.type === this._battleType);
    }
    
    get attackerVictoryCondition(): VictoryConditions.Entry | undefined {
      const collection = <VictoryConditions.Entry[]>this.collectionCache.getCollection(VictoryConditions.KEY, VictoryConditions.Entry);
      return collection.find(entry => entry.condition === this._attackerVictoryCondition);
    }
    
    get defenderVictoryCondition(): VictoryConditions.Entry | undefined {
      const collection = <VictoryConditions.Entry[]>this.collectionCache.getCollection(VictoryConditions.KEY, VictoryConditions.Entry);
      return collection.find(entry => entry.condition === this._defenderVictoryCondition);
    }
  }
}

export default BattleTypesToVictoryConditions;
