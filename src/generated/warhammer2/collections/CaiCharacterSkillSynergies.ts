
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { CaiCharacterSkillSynergyLevels } from "./CaiCharacterSkillSynergyLevels";

export namespace CaiCharacterSkillSynergies {
  export const KEY = new CollectionKey("cai_character_skill_synergies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _existingCharacterSkillKey: string;
    readonly _potentialCharacterSkillKey: string;
    readonly _synergyLevelKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._existingCharacterSkillKey = values["existing_character_skill_key"];
      this._potentialCharacterSkillKey = values["potential_character_skill_key"];
      this._synergyLevelKey = values["synergy_level_key"];
    }
    
    get existingCharacterSkillKey(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._existingCharacterSkillKey);
    }
    
    get potentialCharacterSkillKey(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._potentialCharacterSkillKey);
    }
    
    get synergyLevelKey(): CaiCharacterSkillSynergyLevels.Entry | undefined {
      const collection = <CaiCharacterSkillSynergyLevels.Entry[]>this.collectionCache.getCollection(CaiCharacterSkillSynergyLevels.KEY, CaiCharacterSkillSynergyLevels.Entry);
      return collection.find(entry => entry.key === this._synergyLevelKey);
    }
  }
}

export default CaiCharacterSkillSynergies;
