
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeAnimated } from "./WarscapeAnimated";

export namespace WarscapeAnimatedLod {
  export const KEY = new CollectionKey("warscape_animated_lod");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly filename: string;
    readonly range: number;
    readonly _animated: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.filename = values["filename"];
      this.range = values["range"];
      this._animated = values["animated"];
    }
    
    get animated(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._animated);
    }
  }
}

export default WarscapeAnimatedLod;
