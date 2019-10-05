
import { CollectionCache, CollectionKey } from "../../../common";
import { MilitaryForceTypes } from "./MilitaryForceTypes";

export namespace FactionFeatureSetMilitaryForceTypes {
  export const KEY = new CollectionKey("faction_feature_set_military_force_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _defaultArmy: string;
    readonly _defaultNavy: string;
    readonly _seaLockedSpecialist: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._defaultArmy = values["default_army"];
      this._defaultNavy = values["default_navy"];
      this._seaLockedSpecialist = values["sea_locked_specialist"];
    }
    
    get defaultArmy(): MilitaryForceTypes.Entry | undefined {
      const collection = <MilitaryForceTypes.Entry[]>this.collectionCache.getCollection(MilitaryForceTypes.KEY, MilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._defaultArmy);
    }
    
    get defaultNavy(): MilitaryForceTypes.Entry | undefined {
      const collection = <MilitaryForceTypes.Entry[]>this.collectionCache.getCollection(MilitaryForceTypes.KEY, MilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._defaultNavy);
    }
    
    get seaLockedSpecialist(): MilitaryForceTypes.Entry | undefined {
      const collection = <MilitaryForceTypes.Entry[]>this.collectionCache.getCollection(MilitaryForceTypes.KEY, MilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._seaLockedSpecialist);
    }
  }
}

export default FactionFeatureSetMilitaryForceTypes;
