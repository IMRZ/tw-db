
import { CollectionCache, CollectionKey } from "../../../common";
import { AncillariesCategories } from "./AncillariesCategories";
import { Agents } from "./Agents";

export namespace AncillariesCategoriesAgentTypeScores {
  export const KEY = new CollectionKey("ancillaries_categories_agent_type_scores");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _category: string;
    readonly _agentType: string;
    readonly score: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._category = values["category"];
      this._agentType = values["agent_type"];
      this.score = values["score"];
    }
    
    get category(): AncillariesCategories.Entry | undefined {
      const collection = <AncillariesCategories.Entry[]>this.collectionCache.getCollection(AncillariesCategories.KEY, AncillariesCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get agentType(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentType);
    }
  }
}

export default AncillariesCategoriesAgentTypeScores;
