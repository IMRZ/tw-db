
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleSetPieceFrontendGroups {
  export const KEY = new CollectionKey("battle_set_piece_frontend_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.sortOrder = values["sort_order"];
    }
    
  }
}

export default BattleSetPieceFrontendGroups;
