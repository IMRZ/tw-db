
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Dilemmas } from "./Dilemmas";

export namespace CharacterSkillLevelToDilemmasJunctions {
  export const KEY = new CollectionKey("character_skill_level_to_dilemmas_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterSkillKey: string;
    readonly level: number;
    readonly _dilemmaKey: string;
    readonly randomSelection: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterSkillKey = values["character_skill_key"];
      this.level = values["level"];
      this._dilemmaKey = values["dilemma_key"];
      this.randomSelection = !!values["random_selection"];
    }
    
    get characterSkillKey(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._characterSkillKey);
    }
    
    get dilemmaKey(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._dilemmaKey);
    }
  }
}

export default CharacterSkillLevelToDilemmasJunctions;
