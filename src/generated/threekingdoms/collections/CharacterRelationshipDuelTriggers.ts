
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleDuelOutcomes } from "./BattleDuelOutcomes";
import { BattleDuelWithdrawReasons } from "./BattleDuelWithdrawReasons";
import { CharacterRelationshipDuelScopedTriggerSets } from "./CharacterRelationshipDuelScopedTriggerSets";

export namespace CharacterRelationshipDuelTriggers {
  export const KEY = new CollectionKey("character_relationship_duel_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _duelOutcome: string;
    readonly _loserWithdrawReason: string;
    readonly _triggers: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._duelOutcome = values["duel_outcome"];
      this._loserWithdrawReason = values["loser_withdraw_reason"];
      this._triggers = values["triggers"];
    }
    
    get duelOutcome(): BattleDuelOutcomes.Entry | undefined {
      const collection = <BattleDuelOutcomes.Entry[]>this.collectionCache.getCollection(BattleDuelOutcomes.KEY, BattleDuelOutcomes.Entry);
      return collection.find(entry => entry.outcomeType === this._duelOutcome);
    }
    
    get loserWithdrawReason(): BattleDuelWithdrawReasons.Entry | undefined {
      const collection = <BattleDuelWithdrawReasons.Entry[]>this.collectionCache.getCollection(BattleDuelWithdrawReasons.KEY, BattleDuelWithdrawReasons.Entry);
      return collection.find(entry => entry.key === this._loserWithdrawReason);
    }
    
    get triggers(): CharacterRelationshipDuelScopedTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipDuelScopedTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipDuelScopedTriggerSets.KEY, CharacterRelationshipDuelScopedTriggerSets.Entry);
      return collection.find(entry => entry.key === this._triggers);
    }
  }
}

export default CharacterRelationshipDuelTriggers;
