
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkillNodes } from "./CharacterSkillNodes";

export namespace CharacterSkillNodeLinks {
  export const KEY = new CollectionKey("character_skill_node_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _parentKey: string;
    readonly _childKey: string;
    readonly initialDescentTiers: number;
    readonly parentLinkPosition: number;
    readonly childLinkPosition: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._parentKey = values["parent_key"];
      this._childKey = values["child_key"];
      this.initialDescentTiers = values["initial_descent_tiers"];
      this.parentLinkPosition = values["parent_link_position"];
      this.childLinkPosition = values["child_link_position"];
    }
    
    get parentKey(): CharacterSkillNodes.Entry | undefined {
      const collection = <CharacterSkillNodes.Entry[]>this.collectionCache.getCollection(CharacterSkillNodes.KEY, CharacterSkillNodes.Entry);
      return collection.find(entry => entry.key === this._parentKey);
    }
    
    get childKey(): CharacterSkillNodes.Entry | undefined {
      const collection = <CharacterSkillNodes.Entry[]>this.collectionCache.getCollection(CharacterSkillNodes.KEY, CharacterSkillNodes.Entry);
      return collection.find(entry => entry.key === this._childKey);
    }
  }
}

export default CharacterSkillNodeLinks;
