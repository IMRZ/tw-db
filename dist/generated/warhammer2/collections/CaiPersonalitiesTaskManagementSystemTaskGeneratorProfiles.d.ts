import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorGroups } from "./CaiTaskManagementSystemTaskGeneratorGroups";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _defaultGeneratorGroup: string;
        readonly _shortDescription: string;
        readonly _longDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly defaultGeneratorGroup: CaiTaskManagementSystemTaskGeneratorGroups.Entry | undefined;
        readonly shortDescription: DiplomacyStrings.Entry | undefined;
        readonly longDescription: DiplomacyStrings.Entry | undefined;
    }
}
export default CaiPersonalitiesTaskManagementSystemTaskGeneratorProfiles;
