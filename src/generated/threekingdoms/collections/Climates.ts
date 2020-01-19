
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Climates {
  export const KEY = new CollectionKey("climates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly climateType: string;
    readonly name: string;
    readonly description: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.climateType = values["climate_type"];
      this.name = values["name"];
      this.description = values["description"];
      this.iconPath = values["icon_path"];
    }
    
  }
}

export default Climates;
