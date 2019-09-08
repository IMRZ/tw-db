import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";
export declare namespace CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _defaultGeneratorGroupWhenOwningRegions: string;
        readonly _defaultGeneratorGroupWhenNoOwnedRegions: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly defaultGeneratorGroupWhenOwningRegions: CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
        readonly defaultGeneratorGroupWhenNoOwnedRegions: CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
    }
}
export default CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles;
