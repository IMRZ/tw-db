
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { Regions } from "./Regions";
import { Ancillaries } from "./Ancillaries";
import { MainUnits } from "./MainUnits";

export namespace ElectorCounts {
  export const KEY = new CollectionKey("elector_counts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ministerialKey: string;
    readonly _capitalRegion: string;
    readonly _ancillaryReward: string;
    readonly _unitReward: string;
    readonly mapPosX: number;
    readonly mapPosY: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ministerialKey = values["ministerial_key"];
      this._capitalRegion = values["capital_region"];
      this._ancillaryReward = values["ancillary_reward"];
      this._unitReward = values["unit_reward"];
      this.mapPosX = values["map_pos_x"];
      this.mapPosY = values["map_pos_y"];
    }
    
    get ministerialKey(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialKey);
    }
    
    get capitalRegion(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._capitalRegion);
    }
    
    get ancillaryReward(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillaryReward);
    }
    
    get unitReward(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitReward);
    }
  }
}

export default ElectorCounts;
