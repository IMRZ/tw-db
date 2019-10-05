
import { CollectionCache, CollectionKey } from "../../../common";
import { MilitaryForceTypes } from "./MilitaryForceTypes";

export namespace MilitaryForceTypeConversions {
  export const KEY = new CollectionKey("military_force_type_conversions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _from: string;
    readonly _to: string;
    readonly automatic: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._from = values["from"];
      this._to = values["to"];
      this.automatic = !!values["automatic"];
    }
    
    get from(): MilitaryForceTypes.Entry | undefined {
      const collection = <MilitaryForceTypes.Entry[]>this.collectionCache.getCollection(MilitaryForceTypes.KEY, MilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._from);
    }
    
    get to(): MilitaryForceTypes.Entry | undefined {
      const collection = <MilitaryForceTypes.Entry[]>this.collectionCache.getCollection(MilitaryForceTypes.KEY, MilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._to);
    }
  }
}

export default MilitaryForceTypeConversions;
