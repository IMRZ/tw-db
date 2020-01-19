
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmies } from "./BattleSetPieceArmies";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";

export namespace BattleSetPieceArmiesCharactersJunctions {
  export const KEY = new CollectionKey("battle_set_piece_armies_characters_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _armyName: string;
    readonly _characterName: string;
    readonly scriptName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._armyName = values["army_name"];
      this._characterName = values["character_name"];
      this.scriptName = values["script_name"];
    }
    
    get armyName(): BattleSetPieceArmies.Entry | undefined {
      const collection = <BattleSetPieceArmies.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmies.KEY, BattleSetPieceArmies.Entry);
      return collection.find(entry => entry.armyName === this._armyName);
    }
    
    get characterName(): BattleSetPieceArmiesCharacters.Entry | undefined {
      const collection = <BattleSetPieceArmiesCharacters.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmiesCharacters.KEY, BattleSetPieceArmiesCharacters.Entry);
      return collection.find(entry => entry.characterName === this._characterName);
    }
  }
}

export default BattleSetPieceArmiesCharactersJunctions;
