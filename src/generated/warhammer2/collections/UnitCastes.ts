
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitCastes {
  export const KEY = new CollectionKey("unit_castes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly caste: string;
    readonly localisedName: string;
    readonly sortPriority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.caste = values["caste"];
      this.localisedName = values["localised_name"];
      this.sortPriority = values["sort_priority"];
    }
    
  }
}

export default UnitCastes;
