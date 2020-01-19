
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles {
  export const KEY = new CollectionKey("cai_personalities_task_management_system_task_generator_profiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _defaultGeneratorGroup: string;
    readonly _shortDescription: string;
    readonly _longDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._defaultGeneratorGroup = values["default_generator_group"];
      this._shortDescription = values["short_description"];
      this._longDescription = values["long_description"];
    }
    
    get defaultGeneratorGroup(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined {
      const collection = <CaiTaskManagementSystemTaskGeneratorGroups.Entry[]>this.collectionCache.getCollection(CaiTaskManagementSystemTaskGeneratorGroups.KEY, CaiTaskManagementSystemTaskGeneratorGroups.Entry);
      return collection.find(entry => entry.key === this._defaultGeneratorGroup);
    }
    
    get shortDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._shortDescription);
    }
    
    get longDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._longDescription);
    }
  }
}

export default CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles;
