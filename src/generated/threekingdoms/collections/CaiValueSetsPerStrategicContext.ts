
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiValueSets } from "./CaiValueSets";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiValueTypes } from "./CaiValueTypes";

export namespace CaiValueSetsPerStrategicContext {
  export const KEY = new CollectionKey("cai_value_sets_per_strategic_context");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _valueSetKey: string;
    readonly _perItemKey: string;
    readonly value: number;
    readonly _valueTypeKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._valueSetKey = values["value_set_key"];
      this._perItemKey = values["per_item_key"];
      this.value = values["value"];
      this._valueTypeKey = values["value_type_key"];
    }
    
    get valueSetKey(): CaiValueSets.Entry | undefined {
      const collection = <CaiValueSets.Entry[]>this.collectionCache.getCollection(CaiValueSets.KEY, CaiValueSets.Entry);
      return collection.find(entry => entry.key === this._valueSetKey);
    }
    
    get perItemKey(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._perItemKey);
    }
    
    get valueTypeKey(): CaiValueTypes.Entry | undefined {
      const collection = <CaiValueTypes.Entry[]>this.collectionCache.getCollection(CaiValueTypes.KEY, CaiValueTypes.Entry);
      return collection.find(entry => entry.key === this._valueTypeKey);
    }
  }
}

export default CaiValueSetsPerStrategicContext;
