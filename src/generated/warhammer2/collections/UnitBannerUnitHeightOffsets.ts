
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace UnitBannerUnitHeightOffsets {
  export const KEY = new CollectionKey("unit_banner_unit_height_offsets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitRecord: string;
    readonly heightOffset: number;
    readonly campaignHeightOffset: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitRecord = values["unit_record"];
      this.heightOffset = values["height_offset"];
      this.campaignHeightOffset = values["campaign_height_offset"];
    }
    
    get unitRecord(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitRecord);
    }
  }
}

export default UnitBannerUnitHeightOffsets;
