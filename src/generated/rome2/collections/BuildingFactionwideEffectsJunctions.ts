
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { Effects } from "./Effects";

export namespace BuildingFactionwideEffectsJunctions {
  export const KEY = new CollectionKey("building_factionwide_effects_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _building: string;
    readonly _effect: string;
    readonly effectValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._building = values["building"];
      this._effect = values["effect"];
      this.effectValue = values["effect_value"];
    }
    
    get building(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building);
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
  }
}

export default BuildingFactionwideEffectsJunctions;
