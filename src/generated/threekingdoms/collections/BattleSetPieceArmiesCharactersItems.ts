
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";

export namespace BattleSetPieceArmiesCharactersItems {
  export const KEY = new CollectionKey("battle_set_piece_armies_characters_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterName = values["character_name"];
    }
    
    get characterName(): BattleSetPieceArmiesCharacters.Entry | undefined {
      const collection = <BattleSetPieceArmiesCharacters.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmiesCharacters.KEY, BattleSetPieceArmiesCharacters.Entry);
      return collection.find(entry => entry.characterName === this._characterName);
    }
  }
}

export default BattleSetPieceArmiesCharactersItems;
