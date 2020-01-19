
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { EncyclopediaPages } from "./EncyclopediaPages";

export namespace EncyclopediaAgentManualPageLinks {
  export const KEY = new CollectionKey("encyclopedia_agent_manual_page_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentKey: string;
    readonly _pageKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentKey = values["agent_key"];
      this._pageKey = values["page_key"];
    }
    
    get agentKey(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentKey);
    }
    
    get pageKey(): EncyclopediaPages.Entry | undefined {
      const collection = <EncyclopediaPages.Entry[]>this.collectionCache.getCollection(EncyclopediaPages.KEY, EncyclopediaPages.Entry);
      return collection.find(entry => entry.pageKey === this._pageKey);
    }
  }
}

export default EncyclopediaAgentManualPageLinks;
