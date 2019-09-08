
import { CollectionCache, CollectionKey } from "../../../common";
import { Cursors } from "./Cursors";
import { UnitAttributes } from "./UnitAttributes";

export namespace GroundTypes {
  export const KEY = new CollectionKey("ground_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly enumValue: number;
    readonly tooltip: string;
    readonly _standardCursor: string;
    readonly _selectionCursor: string;
    readonly _penaltyImmuneAttribute: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.enumValue = values["enum_value"];
      this.tooltip = values["tooltip"];
      this._standardCursor = values["standard_cursor"];
      this._selectionCursor = values["selection_cursor"];
      this._penaltyImmuneAttribute = values["penalty_immune_attribute"];
    }
    
    get standardCursor(): Cursors.Entry | undefined {
      const collection = <Cursors.Entry[]>this.collectionCache.getCollection(Cursors.KEY, Cursors.Entry);
      return collection.find(entry => entry.key === this._standardCursor);
    }
    
    get selectionCursor(): Cursors.Entry | undefined {
      const collection = <Cursors.Entry[]>this.collectionCache.getCollection(Cursors.KEY, Cursors.Entry);
      return collection.find(entry => entry.key === this._selectionCursor);
    }
    
    get penaltyImmuneAttribute(): UnitAttributes.Entry | undefined {
      const collection = <UnitAttributes.Entry[]>this.collectionCache.getCollection(UnitAttributes.KEY, UnitAttributes.Entry);
      return collection.find(entry => entry.key === this._penaltyImmuneAttribute);
    }
  }
}

export default GroundTypes;
