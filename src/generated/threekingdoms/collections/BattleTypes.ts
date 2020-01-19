
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleTypes {
  export const KEY = new CollectionKey("battle_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly onscreen: string;
    readonly sortOrder: number;
    readonly defenderFundsRatio: number;
    readonly maxTeamsize: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.onscreen = values["onscreen"];
      this.sortOrder = values["sort_order"];
      this.defenderFundsRatio = values["defender_funds_ratio"];
      this.maxTeamsize = values["max_teamsize"];
    }
    
  }
}

export default BattleTypes;
