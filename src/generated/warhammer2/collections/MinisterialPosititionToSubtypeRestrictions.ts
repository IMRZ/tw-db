
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace MinisterialPosititionToSubtypeRestrictions {
  export const KEY = new CollectionKey("ministerial_positition_to_subtype_restrictions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ministerialPosition: string;
    readonly _agentSubtype: string;
    readonly localisedRestrictionReason: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ministerialPosition = values["ministerial_position"];
      this._agentSubtype = values["agent_subtype"];
      this.localisedRestrictionReason = values["localised_restriction_reason"];
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
  }
}

export default MinisterialPosititionToSubtypeRestrictions;
