
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitiesTechnologyResearches {
  export const KEY = new CollectionKey("cai_personalities_technology_researches");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiPersonalitiesTechnologyResearches;
