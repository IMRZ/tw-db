
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";

export namespace NamesTitlesByAgent {
  export const KEY = new CollectionKey("names_titles_by_agent");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentType: string;
    readonly highestTitle: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentType = values["agent_type"];
      this.highestTitle = values["highest_title"];
    }
    
    get agentType(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentType);
    }
  }
}

export default NamesTitlesByAgent;
