
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositionsCultureDetails } from "./MinisterialPositionsCultureDetails";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace MinisterialPostionValidAgentSubtypes {
  export const KEY = new CollectionKey("ministerial_postion_valid_agent_subtypes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ministerialPositionCulturalVariant: string;
    readonly _agentSubtype: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ministerialPositionCulturalVariant = values["ministerial_position_cultural_variant"];
      this._agentSubtype = values["agent_subtype"];
    }
    
    get ministerialPositionCulturalVariant(): MinisterialPositionsCultureDetails.Entry | undefined {
      const collection = <MinisterialPositionsCultureDetails.Entry[]>this.collectionCache.getCollection(MinisterialPositionsCultureDetails.KEY, MinisterialPositionsCultureDetails.Entry);
      return collection.find(entry => entry.ministerialPositionCulturalVariant === this._ministerialPositionCulturalVariant);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
  }
}

export default MinisterialPostionValidAgentSubtypes;
