
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { FactionwideRecruitmentUnitExclusionsSets } from "./FactionwideRecruitmentUnitExclusionsSets";

export namespace FactionFactionwideRecruitmentUnitExclusionsSetJunctions {
  export const KEY = new CollectionKey("faction_factionwide_recruitment_unit_exclusions_set_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _set: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._set = values["set"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get set(): FactionwideRecruitmentUnitExclusionsSets.Entry | undefined {
      const collection = <FactionwideRecruitmentUnitExclusionsSets.Entry[]>this.collectionCache.getCollection(FactionwideRecruitmentUnitExclusionsSets.KEY, FactionwideRecruitmentUnitExclusionsSets.Entry);
      return collection.find(entry => entry.set === this._set);
    }
  }
}

export default FactionFactionwideRecruitmentUnitExclusionsSetJunctions;
