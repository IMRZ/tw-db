
import { CollectionCache, CollectionKey } from "../../../common";
import { Ancillaries } from "./Ancillaries";
import { CharacterSkills } from "./CharacterSkills";

export namespace AncillariesRequiredSkills {
  export const KEY = new CollectionKey("ancillaries_required_skills");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ancillary: string;
    readonly _requiredSkill: string;
    readonly requiredSkillLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ancillary = values["ancillary"];
      this._requiredSkill = values["required_skill"];
      this.requiredSkillLevel = values["required_skill_level"];
    }
    
    get ancillary(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillary);
    }
    
    get requiredSkill(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._requiredSkill);
    }
  }
}

export default AncillariesRequiredSkills;
