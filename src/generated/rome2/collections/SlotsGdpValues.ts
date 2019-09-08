
import { CollectionCache, CollectionKey } from "../../../common";
import { Slots } from "./Slots";

export namespace SlotsGdpValues {
  export const KEY = new CollectionKey("slots_gdp_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _slot: string;
    readonly level: number;
    readonly gdpValue: number;
    readonly buildingGdpModifier: number;
    readonly onscreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._slot = values["slot"];
      this.level = values["level"];
      this.gdpValue = values["gdp_value"];
      this.buildingGdpModifier = values["building_gdp_modifier"];
      this.onscreenName = values["onscreen_name"];
    }
    
    get slot(): Slots.Entry | undefined {
      const collection = <Slots.Entry[]>this.collectionCache.getCollection(Slots.KEY, Slots.Entry);
      return collection.find(entry => entry.slot === this._slot);
    }
  }
}

export default SlotsGdpValues;
