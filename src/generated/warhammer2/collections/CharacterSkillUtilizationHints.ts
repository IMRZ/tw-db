
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterSkillUtilizationHints {
  export const KEY = new CollectionKey("character_skill_utilization_hints");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CharacterSkillUtilizationHints;
