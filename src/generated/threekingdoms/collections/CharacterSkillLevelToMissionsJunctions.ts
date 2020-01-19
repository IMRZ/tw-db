
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Missions } from "./Missions";

export namespace CharacterSkillLevelToMissionsJunctions {
  export const KEY = new CollectionKey("character_skill_level_to_missions_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterSkillKey: string;
    readonly level: number;
    readonly _missionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterSkillKey = values["character_skill_key"];
      this.level = values["level"];
      this._missionKey = values["mission_key"];
    }
    
    get characterSkillKey(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._characterSkillKey);
    }
    
    get missionKey(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._missionKey);
    }
  }
}

export default CharacterSkillLevelToMissionsJunctions;
