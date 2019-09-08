
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { BretonniaVows } from "./BretonniaVows";

export namespace AgentSubtypeToVows {
  export const KEY = new CollectionKey("agent_subtype_to_vows");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentSubtype: string;
    readonly _vow: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentSubtype = values["agent_subtype"];
      this._vow = values["vow"];
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
    
    get vow(): BretonniaVows.Entry | undefined {
      const collection = <BretonniaVows.Entry[]>this.collectionCache.getCollection(BretonniaVows.KEY, BretonniaVows.Entry);
      return collection.find(entry => entry.key === this._vow);
    }
  }
}

export default AgentSubtypeToVows;
