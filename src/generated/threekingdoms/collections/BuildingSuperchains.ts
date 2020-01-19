
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingSuperchains {
  export const KEY = new CollectionKey("building_superchains");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly name: string;
    readonly description: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
      this.description = values["description"];
      this.iconPath = values["icon_path"];
    }
    
  }
}

export default BuildingSuperchains;
