
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionwideRecruitmentUnitExclusionsSets {
  export const KEY = new CollectionKey("factionwide_recruitment_unit_exclusions_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly set: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.set = values["set"];
    }
    
  }
}

export default FactionwideRecruitmentUnitExclusionsSets;
