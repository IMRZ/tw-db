
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { MainUnits } from "./MainUnits";
import { Agents } from "./Agents";

export namespace AgentSubtypeSubcultureOverrides {
  export const KEY = new CollectionKey("agent_subtype_subculture_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subtype: string;
    readonly _subculture: string;
    readonly _associatedUnitOverride: string;
    readonly _agent: string;
    readonly onscreenName: string;
    readonly description: string;
    readonly smallIcon: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subtype = values["subtype"];
      this._subculture = values["subculture"];
      this._associatedUnitOverride = values["associated_unit_override"];
      this._agent = values["agent"];
      this.onscreenName = values["onscreen_name"];
      this.description = values["description"];
      this.smallIcon = values["small_icon"];
    }
    
    get subtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._subtype);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get associatedUnitOverride(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._associatedUnitOverride);
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
  }
}

export default AgentSubtypeSubcultureOverrides;
