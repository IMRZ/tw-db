
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitDrillSetEnum {
  export const KEY = new CollectionKey("unit_drill_set_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly unitDrillSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.unitDrillSet = values["unit_drill_set"];
    }
    
  }
}

export default UnitDrillSetEnum;
