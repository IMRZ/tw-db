
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { EncyclopediaBlocks } from "./EncyclopediaBlocks";

export namespace EncyclopediaAgentManualBlockLinks {
  export const KEY = new CollectionKey("encyclopedia_agent_manual_block_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentKey: string;
    readonly _blockKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentKey = values["agent_key"];
      this._blockKey = values["block_key"];
    }
    
    get agentKey(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentKey);
    }
    
    get blockKey(): EncyclopediaBlocks.Entry | undefined {
      const collection = <EncyclopediaBlocks.Entry[]>this.collectionCache.getCollection(EncyclopediaBlocks.KEY, EncyclopediaBlocks.Entry);
      return collection.find(entry => entry.blockKey === this._blockKey);
    }
  }
}

export default EncyclopediaAgentManualBlockLinks;
