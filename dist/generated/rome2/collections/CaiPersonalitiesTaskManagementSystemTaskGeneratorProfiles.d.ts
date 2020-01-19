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
        get defaultGeneratorGroupWhenOwningRegions(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
        get defaultGeneratorGroupWhenNoOwnedRegions(): CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
    }
}
export default CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles;
