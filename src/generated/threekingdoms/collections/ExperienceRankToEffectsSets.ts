
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ExperienceRankToEffectsSets {
  export const KEY = new CollectionKey("experience_rank_to_effects_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly setName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.setName = values["set_name"];
    }
    
  }
}

export default ExperienceRankToEffectsSets;
