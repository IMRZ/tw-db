
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PresetColours {
  export const KEY = new CollectionKey("preset_colours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly red: number;
    readonly green: number;
    readonly blue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["Key"];
      this.red = values["red"];
      this.green = values["green"];
      this.blue = values["blue"];
    }
    
  }
}

export default PresetColours;
