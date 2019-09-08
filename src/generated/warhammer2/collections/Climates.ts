
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Climates {
  export const KEY = new CollectionKey("climates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly climateType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.climateType = values["climate_type"];
    }
    
  }
}

export default Climates;
