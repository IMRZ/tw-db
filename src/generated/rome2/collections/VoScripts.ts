
import { CollectionCache, CollectionKey } from "../../../common";


export namespace VoScripts {
  export const KEY = new CollectionKey("vo_scripts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.name = values["name"];
    }
    
  }
}

export default VoScripts;
