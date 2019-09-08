
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitCategory {
  export const KEY = new CollectionKey("unit_category");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedName: string;
    readonly rColour: number;
    readonly gColour: number;
    readonly bColour: number;
    readonly minBattleRows: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedName = values["localised_name"];
      this.rColour = values["r_colour"];
      this.gColour = values["g_colour"];
      this.bColour = values["b_colour"];
      this.minBattleRows = values["min_battle_rows"];
    }
    
  }
}

export default UnitCategory;
