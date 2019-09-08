
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles } from "./CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";

export namespace CaiPersonalitiesTmsTaskGeneratorProfileFactionStatusesJunctions {
  export const KEY = new CollectionKey("cai_personalities_tms_task_generator_profile_faction_statuses_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _taskGeneratorPolicyKey: string;
    readonly _caiActionStatusKey: string;
    readonly _taskGeneratorGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._taskGeneratorPolicyKey = values["task_generator_policy_key"];
      this._caiActionStatusKey = values["cai_action_status_key"];
      this._taskGeneratorGroup = values["task_generator_group"];
    }
    
    get taskGeneratorPolicyKey(): CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry | undefined {
      const collection = <CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.KEY, CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles.Entry);
      return collection.find(entry => entry.key === this._taskGeneratorPolicyKey);
    }
    
    get caiActionStatusKey(): CaiFactionStatuses.Entry | undefined {
      const collection = <CaiFactionStatuses.Entry[]>this.collectionCache.getCollection(CaiFactionStatuses.KEY, CaiFactionStatuses.Entry);
      return collection.find(entry => entry.factionStatus === this._caiActionStatusKey);
    }
    
    get taskGeneratorGroup(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorGroups.KEY, CaiTaskManagementSystemTaskGeneratorGroups.Entry);
      return collection.find(entry => entry.key === this._taskGeneratorGroup);
    }
  }
}

export default CaiPersonalitiesTmsTaskGeneratorProfileFactionStatusesJunctions;
