
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace CharacterSkillCategories {
  export const KEY = new CollectionKey("character_skill_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly minIndent: number;
    readonly maxIndent: number;
    readonly order: number;
    readonly colR: number;
    readonly colG: number;
    readonly colB: number;
    readonly _agentSubtypeOverride: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minIndent = values["min_indent"];
      this.maxIndent = values["max_indent"];
      this.order = values["order"];
      this.colR = values["col_r"];
      this.colG = values["col_g"];
      this.colB = values["col_b"];
      this._agentSubtypeOverride = values["agent_subtype_override"];
    }
    
    get agentSubtypeOverride(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtypeOverride);
    }
  }
}

export default CharacterSkillCategories;
