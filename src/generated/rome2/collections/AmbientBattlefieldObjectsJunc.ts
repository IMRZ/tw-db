
import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";

export namespace AmbientBattlefieldObjectsJunc {
  export const KEY = new CollectionKey("ambient_battlefield_objects_junc");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _climate: string;
    readonly _season: any;
    readonly _ambientBattlefieldObject: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._climate = values["climate"];
      this._season = values["season"];
      this._ambientBattlefieldObject = values["ambient_battlefield_object"];
    }
    
    get climate(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._climate);
    }
  }
}

export default AmbientBattlefieldObjectsJunc;
