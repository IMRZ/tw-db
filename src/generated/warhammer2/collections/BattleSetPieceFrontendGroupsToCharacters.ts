
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceFrontendGroups } from "./BattleSetPieceFrontendGroups";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";

export namespace BattleSetPieceFrontendGroupsToCharacters {
  export const KEY = new CollectionKey("battle_set_piece_frontend_groups_to_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _frontendGroup: string;
    readonly _character: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._frontendGroup = values["frontend_group"];
      this._character = values["character"];
    }
    
    get frontendGroup(): BattleSetPieceFrontendGroups.Entry | undefined {
      const collection = <BattleSetPieceFrontendGroups.Entry[]>this.collectionCache.getCollection(BattleSetPieceFrontendGroups.KEY, BattleSetPieceFrontendGroups.Entry);
      return collection.find(entry => entry.key === this._frontendGroup);
    }
    
    get character(): BattleSetPieceArmiesCharacters.Entry | undefined {
      const collection = <BattleSetPieceArmiesCharacters.Entry[]>this.collectionCache.getCollection(BattleSetPieceArmiesCharacters.KEY, BattleSetPieceArmiesCharacters.Entry);
      return collection.find(entry => entry.characterName === this._character);
    }
  }
}

export default BattleSetPieceFrontendGroupsToCharacters;
