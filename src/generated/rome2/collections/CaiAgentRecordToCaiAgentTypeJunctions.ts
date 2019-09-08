
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiAgentTypes } from "./CaiAgentTypes";
import { Agents } from "./Agents";

export namespace CaiAgentRecordToCaiAgentTypeJunctions {
  export const KEY = new CollectionKey("cai_agent_record_to_cai_agent_type_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentTypeKey: string;
    readonly _agentRecordKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentTypeKey = values["agent_type_key"];
      this._agentRecordKey = values["agent_record_key"];
    }
    
    get agentTypeKey(): CaiAgentTypes.Entry | undefined {
      const collection = <CaiAgentTypes.Entry[]>this.collectionCache.getCollection(CaiAgentTypes.KEY, CaiAgentTypes.Entry);
      return collection.find(entry => entry.key === this._agentTypeKey);
    }
    
    get agentRecordKey(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentRecordKey);
    }
  }
}

export default CaiAgentRecordToCaiAgentTypeJunctions;
