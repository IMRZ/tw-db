
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingFlavourTexts {
  export const KEY = new CollectionKey("building_flavour_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly flavour: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.flavour = values["flavour"];
    }
    
  }
}

export default BuildingFlavourTexts;
