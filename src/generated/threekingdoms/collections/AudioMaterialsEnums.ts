
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioMaterialsEnums {
  export const KEY = new CollectionKey("audio_materials_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AudioMaterialsEnums;
