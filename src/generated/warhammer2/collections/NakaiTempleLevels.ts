
import { CollectionCache, CollectionKey } from "../../../common";
import { NakaiTemples } from "./NakaiTemples";
import { Factions } from "./Factions";
import { BuildingLevels } from "./BuildingLevels";
import { EffectBundles } from "./EffectBundles";

export namespace NakaiTempleLevels {
  export const KEY = new CollectionKey("nakai_temple_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _nakaiTemple: string;
    readonly level: number;
    readonly _factionSpawned: string;
    readonly _building: string;
    readonly minBuildingCount: number;
    readonly _effectBundle: string;
    readonly key: string;
    readonly _secondaryBuilding: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._nakaiTemple = values["nakai_temple"];
      this.level = values["level"];
      this._factionSpawned = values["faction_spawned"];
      this._building = values["building"];
      this.minBuildingCount = values["min_building_count"];
      this._effectBundle = values["effect_bundle"];
      this.key = values["key"];
      this._secondaryBuilding = values["secondary_building"];
    }
    
    get nakaiTemple(): NakaiTemples.Entry | undefined {
      const collection = <NakaiTemples.Entry[]>this.collectionCache.getCollection(NakaiTemples.KEY, NakaiTemples.Entry);
      return collection.find(entry => entry.key === this._nakaiTemple);
    }
    
    get factionSpawned(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionSpawned);
    }
    
    get building(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get secondaryBuilding(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding);
    }
  }
}

export default NakaiTempleLevels;
