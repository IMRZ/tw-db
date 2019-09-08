
import { CollectionCache, CollectionKey } from "../../../common";
import { TraitInfo } from "./TraitInfo";
import { Agents } from "./Agents";

export namespace TraitToIncludedAgents {
  export const KEY = new CollectionKey("trait_to_included_agents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _trait: string;
    readonly _agent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._trait = values["trait"];
      this._agent = values["agent"];
    }
    
    get trait(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._trait);
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
  }
}

export default TraitToIncludedAgents;
