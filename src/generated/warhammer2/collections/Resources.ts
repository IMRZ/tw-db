
import { CollectionCache, CollectionKey } from "../../../common";
import { CommodityUnitNames } from "./CommodityUnitNames";

export namespace Resources {
  export const KEY = new CollectionKey("resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly iconFilepath: string;
    readonly key: string;
    readonly onscreenText: string;
    readonly _unit: string;
    readonly tradeValue: number;
    readonly strategicValue: number;
    readonly description: string;
    readonly longDescription: string;
    readonly inEncyclopedia: boolean;
    readonly showOnCityInfobar: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.iconFilepath = values["icon_filepath"];
      this.key = values["key"];
      this.onscreenText = values["onscreen_text"];
      this._unit = values["unit"];
      this.tradeValue = values["trade_value"];
      this.strategicValue = values["strategic_value"];
      this.description = values["description"];
      this.longDescription = values["long_description"];
      this.inEncyclopedia = !!values["in_encyclopedia"];
      this.showOnCityInfobar = !!values["show_on_city_infobar"];
    }
    
    get unit(): CommodityUnitNames.Entry | undefined {
      const collection = <CommodityUnitNames.Entry[]>this.collectionCache.getCollection(CommodityUnitNames.KEY, CommodityUnitNames.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default Resources;
