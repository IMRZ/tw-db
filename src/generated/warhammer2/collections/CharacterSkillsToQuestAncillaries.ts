
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Ancillaries } from "./Ancillaries";

export namespace CharacterSkillsToQuestAncillaries {
  export const KEY = new CollectionKey("character_skills_to_quest_ancillaries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _skill: string;
    readonly _ancillary: string;
    readonly useQuestForPrefix: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._skill = values["skill"];
      this._ancillary = values["ancillary"];
      this.useQuestForPrefix = !!values["use_quest_for_prefix"];
    }
    
    get skill(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._skill);
    }
    
    get ancillary(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillary);
    }
  }
}

export default CharacterSkillsToQuestAncillaries;
