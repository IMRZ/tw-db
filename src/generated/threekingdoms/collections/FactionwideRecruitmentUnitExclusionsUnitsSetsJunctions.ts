
import { CollectionCache, CollectionKey } from "../../../common";
import { FactionwideRecruitmentUnitExclusionsSets } from "./FactionwideRecruitmentUnitExclusionsSets";
import { MainUnits } from "./MainUnits";

export namespace FactionwideRecruitmentUnitExclusionsUnitsSetsJunctions {
  export const KEY = new CollectionKey("factionwide_recruitment_unit_exclusions_units_sets_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _set: string;
    readonly _unit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._set = values["set"];
      this._unit = values["unit"];
    }
    
    get set(): FactionwideRecruitmentUnitExclusionsSets.Entry | undefined {
      const collection = <FactionwideRecruitmentUnitExclusionsSets.Entry[]>this.collectionCache.getCollection(FactionwideRecruitmentUnitExclusionsSets.KEY, FactionwideRecruitmentUnitExclusionsSets.Entry);
      return collection.find(entry => entry.set === this._set);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default FactionwideRecruitmentUnitExclusionsUnitsSetsJunctions;
