
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Incidents } from "./Incidents";

export namespace CharacterSkillLevelToIncidentsJunctions {
  export const KEY = new CollectionKey("character_skill_level_to_incidents_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterSkillKey: string;
    readonly level: number;
    readonly _incidentKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterSkillKey = values["character_skill_key"];
      this.level = values["level"];
      this._incidentKey = values["incident_key"];
    }
    
    get characterSkillKey(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._characterSkillKey);
    }
    
    get incidentKey(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incidentKey);
    }
  }
}

export default CharacterSkillLevelToIncidentsJunctions;
