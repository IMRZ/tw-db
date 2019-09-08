
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { MilitaryForceTypes } from "./MilitaryForceTypes";

export namespace AgentSubtypeMilitaryForceCreationOverrides {
  export const KEY = new CollectionKey("agent_subtype_military_force_creation_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentSubtype: string;
    readonly _militaryForceType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentSubtype = values["agent_subtype"];
      this._militaryForceType = values["military_force_type"];
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
    
    get militaryForceType(): MilitaryForceTypes.Entry | undefined {
      const collection = <MilitaryForceTypes.Entry[]>this.collectionCache.getCollection(MilitaryForceTypes.KEY, MilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._militaryForceType);
    }
  }
}

export default AgentSubtypeMilitaryForceCreationOverrides;
