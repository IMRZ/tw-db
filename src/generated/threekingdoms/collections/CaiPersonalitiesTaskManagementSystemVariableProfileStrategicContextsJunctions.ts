
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesTaskManagementSystemVariableProfiles } from "./CaiPersonalitiesTaskManagementSystemVariableProfiles";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiTaskManagementSystemVariableGroups } from "./CaiTaskManagementSystemVariableGroups";

export namespace CaiPersonalitiesTaskManagementSystemVariableProfileStrategicContextsJunctions {
  export const KEY = new CollectionKey("cai_personalities_task_management_system_variable_profile_strategic_contexts_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _variableGroupProfileKey: string;
    readonly _caiFactionStatusKey: string;
    readonly _caiStrategicContextKey: string;
    readonly _variableGroupKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._variableGroupProfileKey = values["variable_group_profile_key"];
      this._caiFactionStatusKey = values["cai_faction_status_key"];
      this._caiStrategicContextKey = values["cai_strategic_context_key"];
      this._variableGroupKey = values["variable_group_key"];
    }
    
    get variableGroupProfileKey(): CaiPersonalitiesTaskManagementSystemVariableProfiles.Entry | undefined {
      const collection = <CaiPersonalitiesTaskManagementSystemVariableProfiles.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesTaskManagementSystemVariableProfiles.KEY, CaiPersonalitiesTaskManagementSystemVariableProfiles.Entry);
      return collection.find(entry => entry.key === this._variableGroupProfileKey);
    }
    
    get caiFactionStatusKey(): CaiFactionStatuses.Entry | undefined {
      const collection = <CaiFactionStatuses.Entry[]>this.collectionCache.getCollection(CaiFactionStatuses.KEY, CaiFactionStatuses.Entry);
      return collection.find(entry => entry.factionStatus === this._caiFactionStatusKey);
    }
    
    get caiStrategicContextKey(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._caiStrategicContextKey);
    }
    
    get variableGroupKey(): CaiTaskManagementSystemVariableGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemVariableGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemVariableGroups.KEY, CaiTaskManagementSystemVariableGroups.Entry);
      return collection.find(entry => entry.key === this._variableGroupKey);
    }
  }
}

export default CaiPersonalitiesTaskManagementSystemVariableProfileStrategicContextsJunctions;
