
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmiesCharactersSkillsets } from "./BattleSetPieceArmiesCharactersSkillsets";
import { CharacterSkills } from "./CharacterSkills";

export namespace BattleSetPieceArmiesCharactersSkillsetsSkills {
  export const KEY = new CollectionKey("battle_set_piece_armies_characters_skillsets_skills");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _skillsetKey: string;
    readonly _skill: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._skillsetKey = values["skillset_key"];
      this._skill = values["skill"];
      this.sortOrder = values["sort_order"];
    }
    
    get skillsetKey(): BattleSetPieceArmiesCharactersSkillsets.Entry | undefined {
      const collection = <BattleSetPieceArmiesCharactersSkillsets.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmiesCharactersSkillsets.KEY, BattleSetPieceArmiesCharactersSkillsets.Entry);
      return collection.find(entry => entry.key === this._skillsetKey);
    }
    
    get skill(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._skill);
    }
  }
}

export default BattleSetPieceArmiesCharactersSkillsetsSkills;
