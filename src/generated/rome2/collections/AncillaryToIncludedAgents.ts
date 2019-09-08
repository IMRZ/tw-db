
import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryInfo } from "./AncillaryInfo";
import { Agents } from "./Agents";

export namespace AncillaryToIncludedAgents {
  export const KEY = new CollectionKey("ancillary_to_included_agents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ancillary: string;
    readonly _agent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ancillary = values["ancillary"];
      this._agent = values["agent"];
    }
    
    get ancillary(): AncillaryInfo.Entry | undefined {
      const collection = <AncillaryInfo.Entry[]>this.collectionCache.getCollection(AncillaryInfo.KEY, AncillaryInfo.Entry);
      return collection.find(entry => entry.ancillary === this._ancillary);
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
  }
}

export default AncillaryToIncludedAgents;
