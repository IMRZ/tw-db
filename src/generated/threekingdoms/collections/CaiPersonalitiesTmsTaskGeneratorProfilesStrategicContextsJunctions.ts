
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles } from "./CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";
import { CaiFactionStatuses } from "./CaiFactionStatuses";

export namespace CaiPersonalitiesTmsTaskGeneratorProfilesStrategicContextsJunctions {
  export const KEY = new CollectionKey("cai_personalities_tms_task_generator_profiles_strategic_contexts_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _taskGeneratorProfileKey: string;
    readonly _strategicContextKey: string;
    readonly _generatorGroupKey: string;
    readonly _caiFactionStatusKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._taskGeneratorProfileKey = values["task_generator_profile_key"];
      this._strategicContextKey = values["strategic_context_key"];
      this._generatorGroupKey = values["generator_group_key"];
      this._caiFactionStatusKey = values["cai_faction_status_key"];
    }
    
    get taskGeneratorProfileKey(): CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry | undefined {
      const collection = <CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.KEY, CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry);
      return collection.find(entry => entry.key === this._taskGeneratorProfileKey);
    }
    
    get strategicContextKey(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._strategicContextKey);
    }
    
    get generatorGroupKey(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorGroups.KEY, CaiTaskManagementSystemTaskGeneratorGroups.Entry);
      return collection.find(entry => entry.key === this._generatorGroupKey);
    }
    
    get caiFactionStatusKey(): CaiFactionStatuses.Entry | undefined {
      const collection = <CaiFactionStatuses.Entry[]>this.collectionCache.getCollection(CaiFactionStatuses.KEY, CaiFactionStatuses.Entry);
      return collection.find(entry => entry.factionStatus === this._caiFactionStatusKey);
    }
  }
}

export default CaiPersonalitiesTmsTaskGeneratorProfilesStrategicContextsJunctions;
