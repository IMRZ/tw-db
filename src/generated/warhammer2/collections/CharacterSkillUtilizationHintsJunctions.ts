
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { CharacterSkillUtilizationHints } from "./CharacterSkillUtilizationHints";

export namespace CharacterSkillUtilizationHintsJunctions {
  export const KEY = new CollectionKey("character_skill_utilization_hints_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _hint: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._hint = values["hint"];
    }
    
    get key(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get hint(): CharacterSkillUtilizationHints.Entry | undefined {
      const collection = <CharacterSkillUtilizationHints.Entry[]>this.collectionCache.getCollection(CharacterSkillUtilizationHints.KEY, CharacterSkillUtilizationHints.Entry);
      return collection.find(entry => entry.key === this._hint);
    }
  }
}

export default CharacterSkillUtilizationHintsJunctions;
