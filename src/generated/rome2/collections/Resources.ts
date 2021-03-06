
import { CollectionCache, CollectionKey } from "../../../common";
import { CommodityUnitNames } from "./CommodityUnitNames";
import { Slots } from "./Slots";

export namespace Resources {
  export const KEY = new CollectionKey("resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly iconFilepath: string;
    readonly key: string;
    readonly onscreenText: string;
    readonly _unit: string;
    readonly _slotBed: string;
    readonly tradeValue: number;
    readonly strategicValue: number;
    readonly description: string;
    readonly longDescription: string;
    readonly inEncyclopedia: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.iconFilepath = values["icon_filepath"];
      this.key = values["key"];
      this.onscreenText = values["onscreen_text"];
      this._unit = values["unit"];
      this._slotBed = values["slot_bed"];
      this.tradeValue = values["trade_value"];
      this.strategicValue = values["strategic_value"];
      this.description = values["description"];
      this.longDescription = values["long_description"];
      this.inEncyclopedia = !!values["in_encyclopedia"];
    }
    
    get unit(): CommodityUnitNames.Entry | undefined {
      const collection = <CommodityUnitNames.Entry[]>this.collectionCache.getCollection(CommodityUnitNames.KEY, CommodityUnitNames.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
    
    get slotBed(): Slots.Entry | undefined {
      const collection = <Slots.Entry[]>this.collectionCache.getCollection(Slots.KEY, Slots.Entry);
      return collection.find(entry => entry.slot === this._slotBed);
    }
  }
}

export default Resources;
