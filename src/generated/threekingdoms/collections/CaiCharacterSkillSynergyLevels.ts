
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiCharacterSkillSynergyLevels {
  export const KEY = new CollectionKey("cai_character_skill_synergy_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly relativeEffect: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.relativeEffect = values["relative_effect"];
    }
    
  }
}

export default CaiCharacterSkillSynergyLevels;
