
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkillNodes } from "./CharacterSkillNodes";

export namespace CharacterSkillNodeLevelUnlocks {
  export const KEY = new CollectionKey("character_skill_node_level_unlocks");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _requiredSkillNode: string;
    readonly requiredSkillLevel: number;
    readonly _unlockSkillNode: string;
    readonly unlockSkillLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._requiredSkillNode = values["required_skill_node"];
      this.requiredSkillLevel = values["required_skill_level"];
      this._unlockSkillNode = values["unlock_skill_node"];
      this.unlockSkillLevel = values["unlock_skill_level"];
    }
    
    get requiredSkillNode(): CharacterSkillNodes.Entry | undefined {
      const collection = <CharacterSkillNodes.Entry[]>this.collectionCache.getCollection(CharacterSkillNodes.KEY, CharacterSkillNodes.Entry);
      return collection.find(entry => entry.key === this._requiredSkillNode);
    }
    
    get unlockSkillNode(): CharacterSkillNodes.Entry | undefined {
      const collection = <CharacterSkillNodes.Entry[]>this.collectionCache.getCollection(CharacterSkillNodes.KEY, CharacterSkillNodes.Entry);
      return collection.find(entry => entry.key === this._unlockSkillNode);
    }
  }
}

export default CharacterSkillNodeLevelUnlocks;
