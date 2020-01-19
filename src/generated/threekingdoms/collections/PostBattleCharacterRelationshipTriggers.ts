
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleResultTypes } from "./BattleResultTypes";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";

export namespace PostBattleCharacterRelationshipTriggers {
  export const KEY = new CollectionKey("post_battle_character_relationship_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleResult: string;
    readonly _triggerSet: string;
    readonly _characterDeathTriggerSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleResult = values["battle_result"];
      this._triggerSet = values["trigger_set"];
      this._characterDeathTriggerSet = values["character_death_trigger_set"];
    }
    
    get battleResult(): BattleResultTypes.Entry | undefined {
      const collection = <BattleResultTypes.Entry[]>this.collectionCache.getCollection(BattleResultTypes.KEY, BattleResultTypes.Entry);
      return collection.find(entry => entry.battleResultType === this._battleResult);
    }
    
    get triggerSet(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._triggerSet);
    }
    
    get characterDeathTriggerSet(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._characterDeathTriggerSet);
    }
  }
}

export default PostBattleCharacterRelationshipTriggers;
