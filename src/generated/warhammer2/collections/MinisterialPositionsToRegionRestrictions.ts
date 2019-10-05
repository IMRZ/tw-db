
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { Regions } from "./Regions";

export namespace MinisterialPositionsToRegionRestrictions {
  export const KEY = new CollectionKey("ministerial_positions_to_region_restrictions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ministerialPosition: string;
    readonly _requiredRegion: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ministerialPosition = values["ministerial_position"];
      this._requiredRegion = values["required_region"];
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
    
    get requiredRegion(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._requiredRegion);
    }
  }
}

export default MinisterialPositionsToRegionRestrictions;
