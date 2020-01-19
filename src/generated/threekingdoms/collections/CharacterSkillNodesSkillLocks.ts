
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkillNodes } from "./CharacterSkillNodes";
import { CharacterSkills } from "./CharacterSkills";

export namespace CharacterSkillNodesSkillLocks {
  export const KEY = new CollectionKey("character_skill_nodes_skill_locks");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterSkillNode: string;
    readonly _characterSkill: string;
    readonly level: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterSkillNode = values["character_skill_node"];
      this._characterSkill = values["character_skill"];
      this.level = values["level"];
    }
    
    get characterSkillNode(): CharacterSkillNodes.Entry | undefined {
      const collection = <CharacterSkillNodes.Entry[]>this.collectionCache.getCollection(CharacterSkillNodes.KEY, CharacterSkillNodes.Entry);
      return collection.find(entry => entry.key === this._characterSkillNode);
    }
    
    get characterSkill(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._characterSkill);
    }
  }
}

export default CharacterSkillNodesSkillLocks;
