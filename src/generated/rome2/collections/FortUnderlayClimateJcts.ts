
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildings } from "./BattlefieldBuildings";
import { Climates } from "./Climates";
import { BattleTerrainFarms } from "./BattleTerrainFarms";

export namespace FortUnderlayClimateJcts {
  export const KEY = new CollectionKey("fort_underlay_climate_jcts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _fortName: string;
    readonly _climate: string;
    readonly snowUnderlay: boolean;
    readonly _underlay: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._fortName = values["fort_name"];
      this._climate = values["climate"];
      this.snowUnderlay = !!values["snow_underlay"];
      this._underlay = values["underlay"];
    }
    
    get fortName(): BattlefieldBuildings.Entry | undefined {
      const collection = <BattlefieldBuildings.Entry[]>this.collectionCache.getCollection(BattlefieldBuildings.KEY, BattlefieldBuildings.Entry);
      return collection.find(entry => entry.key === this._fortName);
    }
    
    get climate(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._climate);
    }
    
    get underlay(): BattleTerrainFarms.Entry | undefined {
      const collection = <BattleTerrainFarms.Entry[]>this.collectionCache.getCollection(BattleTerrainFarms.KEY, BattleTerrainFarms.Entry);
      return collection.find(entry => entry.farm === this._underlay);
    }
  }
}

export default FortUnderlayClimateJcts;
