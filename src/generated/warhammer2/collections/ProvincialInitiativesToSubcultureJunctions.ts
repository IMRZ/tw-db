
import { CollectionCache, CollectionKey } from "../../../common";
import { ProvincialInitiativeRecords } from "./ProvincialInitiativeRecords";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace ProvincialInitiativesToSubcultureJunctions {
  export const KEY = new CollectionKey("provincial_initiatives_to_subculture_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _provincialInitiativeKey: string;
    readonly _subculture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._provincialInitiativeKey = values["provincial_initiative_key"];
      this._subculture = values["subculture"];
    }
    
    get provincialInitiativeKey(): ProvincialInitiativeRecords.Entry | undefined {
      const collection = <ProvincialInitiativeRecords.Entry[]>this.collectionCache.getCollection(ProvincialInitiativeRecords.KEY, ProvincialInitiativeRecords.Entry);
      return collection.find(entry => entry.key === this._provincialInitiativeKey);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default ProvincialInitiativesToSubcultureJunctions;
