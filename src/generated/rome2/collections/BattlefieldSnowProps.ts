
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildings } from "./BattlefieldBuildings";

export namespace BattlefieldSnowProps {
  export const KEY = new CollectionKey("battlefield_snow_props");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _prop: string;
    readonly _enableForSnow: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._prop = values["prop"];
      this._enableForSnow = values["enable_for_snow"];
    }
    
    get prop(): BattlefieldBuildings.Entry | undefined {
      const collection = <BattlefieldBuildings.Entry[]>this.collectionCache.getCollection(BattlefieldBuildings.KEY, BattlefieldBuildings.Entry);
      return collection.find(entry => entry.key === this._prop);
    }
  }
}

export default BattlefieldSnowProps;
