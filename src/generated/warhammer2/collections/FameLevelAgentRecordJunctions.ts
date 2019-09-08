
import { CollectionCache, CollectionKey } from "../../../common";
import { FameLevels } from "./FameLevels";
import { Agents } from "./Agents";

export namespace FameLevelAgentRecordJunctions {
  export const KEY = new CollectionKey("fame_level_agent_record_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _fameLevel: number;
    readonly _agent: string;
    readonly cap: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._fameLevel = values["fame_level"];
      this._agent = values["agent"];
      this.cap = values["cap"];
    }
    
    get fameLevel(): FameLevels.Entry | undefined {
      const collection = <FameLevels.Entry[]>this.collectionCache.getCollection(FameLevels.KEY, FameLevels.Entry);
      return collection.find(entry => entry.key === this._fameLevel);
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
  }
}

export default FameLevelAgentRecordJunctions;
