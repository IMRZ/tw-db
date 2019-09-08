
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";
import { Ancillaries } from "./Ancillaries";

export namespace BattleSetPieceArmiesCharactersItems {
  export const KEY = new CollectionKey("battle_set_piece_armies_characters_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterName: string;
    readonly _characterItem: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterName = values["character_name"];
      this._characterItem = values["character_item"];
    }
    
    get characterName(): BattleSetPieceArmiesCharacters.Entry | undefined {
      const collection = <BattleSetPieceArmiesCharacters.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmiesCharacters.KEY, BattleSetPieceArmiesCharacters.Entry);
      return collection.find(entry => entry.characterName === this._characterName);
    }
    
    get characterItem(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._characterItem);
    }
  }
}

export default BattleSetPieceArmiesCharactersItems;
