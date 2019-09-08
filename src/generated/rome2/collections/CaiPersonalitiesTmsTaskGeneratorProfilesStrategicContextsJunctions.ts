
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles } from "./CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";

export namespace CaiPersonalitiesTmsTaskGeneratorProfilesStrategicContextsJunctions {
  export const KEY = new CollectionKey("cai_personalities_tms_task_generator_profiles_strategic_contexts_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _taskGeneratorProfileKey: string;
    readonly _strategicContextKey: string;
    readonly forUseWhenTheFactionHasRegions: boolean;
    readonly _generatorGroupKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._taskGeneratorProfileKey = values["task_generator_profile_key"];
      this._strategicContextKey = values["strategic_context_key"];
      this.forUseWhenTheFactionHasRegions = !!values["for_use_when_the_faction_has_regions"];
      this._generatorGroupKey = values["generator_group_key"];
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
  }
}

export default CaiPersonalitiesTmsTaskGeneratorProfilesStrategicContextsJunctions;
