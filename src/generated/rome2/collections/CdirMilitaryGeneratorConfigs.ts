
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirMilitaryGeneratorConfigs {
  export const KEY = new CollectionKey("cdir_military_generator_configs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CdirMilitaryGeneratorConfigs;
