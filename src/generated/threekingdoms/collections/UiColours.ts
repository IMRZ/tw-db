
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiColours {
  export const KEY = new CollectionKey("ui_colours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly description: string;
    readonly showInUied: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.red = values["red"];
      this.green = values["green"];
      this.blue = values["blue"];
      this.description = values["description"];
      this.showInUied = !!values["show_in_uied"];
    }
    
  }
}

export default UiColours;
