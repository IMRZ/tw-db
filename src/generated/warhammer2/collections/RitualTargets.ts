
import { CollectionCache, CollectionKey } from "../../../common";
import { RitualFactionTargetCriterias } from "./RitualFactionTargetCriterias";
import { RitualMilitaryForceTargetCriterias } from "./RitualMilitaryForceTargetCriterias";
import { RitualRegionTargetCriterias } from "./RitualRegionTargetCriterias";

export namespace RitualTargets {
  export const KEY = new CollectionKey("ritual_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _factionCriteria: string;
    readonly _militaryForceCriteria: string;
    readonly _regionCriteria: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._factionCriteria = values["faction_criteria"];
      this._militaryForceCriteria = values["military_force_criteria"];
      this._regionCriteria = values["region_criteria"];
    }
    
    get factionCriteria(): RitualFactionTargetCriterias.Entry | undefined {
      const collection = <RitualFactionTargetCriterias.Entry[]>this.collectionCache.getCollection(RitualFactionTargetCriterias.KEY, RitualFactionTargetCriterias.Entry);
      return collection.find(entry => entry.key === this._factionCriteria);
    }
    
    get militaryForceCriteria(): RitualMilitaryForceTargetCriterias.Entry | undefined {
      const collection = <RitualMilitaryForceTargetCriterias.Entry[]>this.collectionCache.getCollection(RitualMilitaryForceTargetCriterias.KEY, RitualMilitaryForceTargetCriterias.Entry);
      return collection.find(entry => entry.key === this._militaryForceCriteria);
    }
    
    get regionCriteria(): RitualRegionTargetCriterias.Entry | undefined {
      const collection = <RitualRegionTargetCriterias.Entry[]>this.collectionCache.getCollection(RitualRegionTargetCriterias.KEY, RitualRegionTargetCriterias.Entry);
      return collection.find(entry => entry.key === this._regionCriteria);
    }
  }
}

export default RitualTargets;
