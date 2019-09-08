
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";

export namespace CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles {
  export const KEY = new CollectionKey("cai_personalities_task_management_system_task_generator_profiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _defaultGeneratorGroupWhenOwningRegions: string;
    readonly _defaultGeneratorGroupWhenNoOwnedRegions: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._defaultGeneratorGroupWhenOwningRegions = values["default_generator_group_when_owning_regions"];
      this._defaultGeneratorGroupWhenNoOwnedRegions = values["default_generator_group_when_no_owned_regions"];
    }
    
    get defaultGeneratorGroupWhenOwningRegions(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorGroups.KEY, CaiTaskManagementSystemTaskGeneratorGroups.Entry);
      return collection.find(entry => entry.key === this._defaultGeneratorGroupWhenOwningRegions);
    }
    
    get defaultGeneratorGroupWhenNoOwnedRegions(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorGroups.KEY, CaiTaskManagementSystemTaskGeneratorGroups.Entry);
      return collection.find(entry => entry.key === this._defaultGeneratorGroupWhenNoOwnedRegions);
    }
  }
}

export default CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles;
