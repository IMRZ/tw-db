
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitRegimentNamesLocalisationLookup {
  export const KEY = new CollectionKey("unit_regiment_names_localisation_lookup");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly unitName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.unitName = values["unit_name"];
    }
    
  }
}

export default UnitRegimentNamesLocalisationLookup;
