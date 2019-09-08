
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Ancillaries } from "./Ancillaries";

export namespace CharacterSkillLevelToAncillariesJunctions {
  export const KEY = new CollectionKey("character_skill_level_to_ancillaries_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _skill: string;
    readonly _grantedAncillary: string;
    readonly level: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._skill = values["skill"];
      this._grantedAncillary = values["granted_ancillary"];
      this.level = values["level"];
    }
    
    get skill(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._skill);
    }
    
    get grantedAncillary(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._grantedAncillary);
    }
  }
}

export default CharacterSkillLevelToAncillariesJunctions;
