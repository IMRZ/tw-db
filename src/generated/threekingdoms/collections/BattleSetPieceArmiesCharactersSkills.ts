
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";
import { CharacterSkills } from "./CharacterSkills";

export namespace BattleSetPieceArmiesCharactersSkills {
  export const KEY = new CollectionKey("battle_set_piece_armies_characters_skills");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterName: string;
    readonly _skill: string;
    readonly level: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterName = values["character_name"];
      this._skill = values["skill"];
      this.level = values["level"];
    }
    
    get characterName(): BattleSetPieceArmiesCharacters.Entry | undefined {
      const collection = <BattleSetPieceArmiesCharacters.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmiesCharacters.KEY, BattleSetPieceArmiesCharacters.Entry);
      return collection.find(entry => entry.characterName === this._characterName);
    }
    
    get skill(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._skill);
    }
  }
}

export default BattleSetPieceArmiesCharactersSkills;
