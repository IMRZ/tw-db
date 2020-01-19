
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypeWeightedSelectionSets } from "./AgentSubtypeWeightedSelectionSets";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace AgentSubtypeWeightedSelectionSetToWeights {
  export const KEY = new CollectionKey("agent_subtype_weighted_selection_set_to_weights");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subtypeSet: string;
    readonly _agentSubtype: string;
    readonly isMale: boolean;
    readonly selectionWeight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subtypeSet = values["subtype_set"];
      this._agentSubtype = values["agent_subtype"];
      this.isMale = !!values["is_male"];
      this.selectionWeight = values["selection_weight"];
    }
    
    get subtypeSet(): AgentSubtypeWeightedSelectionSets.Entry | undefined {
      const collection = <AgentSubtypeWeightedSelectionSets.Entry[]>this.collectionCache.getCollection(AgentSubtypeWeightedSelectionSets.KEY, AgentSubtypeWeightedSelectionSets.Entry);
      return collection.find(entry => entry.key === this._subtypeSet);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
  }
}

export default AgentSubtypeWeightedSelectionSetToWeights;
