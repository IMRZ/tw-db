
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiValueSets } from "./CaiValueSets";
import { CaiValueTypes } from "./CaiValueTypes";

export namespace CaiValueSetsPerValueType {
  export const KEY = new CollectionKey("cai_value_sets_per_value_type");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _valueSetKey: string;
    readonly _valueTypeKey: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._valueSetKey = values["value_set_key"];
      this._valueTypeKey = values["value_type_key"];
      this.value = values["value"];
    }
    
    get valueSetKey(): CaiValueSets.Entry | undefined {
      const collection = <CaiValueSets.Entry[]>this.collectionCache.getCollection(CaiValueSets.KEY, CaiValueSets.Entry);
      return collection.find(entry => entry.key === this._valueSetKey);
    }
    
    get valueTypeKey(): CaiValueTypes.Entry | undefined {
      const collection = <CaiValueTypes.Entry[]>this.collectionCache.getCollection(CaiValueTypes.KEY, CaiValueTypes.Entry);
      return collection.find(entry => entry.key === this._valueTypeKey);
    }
  }
}

export default CaiValueSetsPerValueType;
