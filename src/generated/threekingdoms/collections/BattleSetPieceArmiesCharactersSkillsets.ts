
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleSetPieceArmiesCharactersSkillsets {
  export const KEY = new CollectionKey("battle_set_piece_armies_characters_skillsets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BattleSetPieceArmiesCharactersSkillsets;
