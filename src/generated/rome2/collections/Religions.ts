
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Religions {
  export const KEY = new CollectionKey("religions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly religionKey: string;
    readonly onscreen: string;
    readonly convertibility: number;
    readonly uiIconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.religionKey = values["religion_key"];
      this.onscreen = values["onscreen"];
      this.convertibility = values["convertibility"];
      this.uiIconPath = values["ui_icon_path"];
    }
    
  }
}

export default Religions;
