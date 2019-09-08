
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirMilitaryGeneratorUnitGroups {
  export const KEY = new CollectionKey("cdir_military_generator_unit_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CdirMilitaryGeneratorUnitGroups;
