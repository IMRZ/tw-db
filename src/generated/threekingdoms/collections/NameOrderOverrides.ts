
import { CollectionCache, CollectionKey } from "../../../common";
import { NameTypes } from "./NameTypes";
import { Factions } from "./Factions";

export namespace NameOrderOverrides {
  export const KEY = new CollectionKey("name_order_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _type: string;
    readonly order: number;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._type = values["type"];
      this.order = values["order"];
      this._faction = values["faction"];
    }
    
    get type(): NameTypes.Entry | undefined {
      const collection = <NameTypes.Entry[]>this.collectionCache.getCollection(NameTypes.KEY, NameTypes.Entry);
      return collection.find(entry => entry.key === this._type);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default NameOrderOverrides;
