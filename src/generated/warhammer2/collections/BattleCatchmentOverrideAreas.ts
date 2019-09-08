
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleCatchmentOverrideAreas {
  export const KEY = new CollectionKey("battle_catchment_override_areas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly area: string;
    readonly red: number;
    readonly green: number;
    readonly blue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.area = values["area"];
      this.red = values["red"];
      this.green = values["green"];
      this.blue = values["blue"];
    }
    
  }
}

export default BattleCatchmentOverrideAreas;
