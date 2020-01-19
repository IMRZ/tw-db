
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitTrainingLevelEnum {
  export const KEY = new CollectionKey("unit_training_level_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitTrainingLevelEnum;
