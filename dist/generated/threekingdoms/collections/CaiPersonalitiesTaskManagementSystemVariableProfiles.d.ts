import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemVariableGroups } from "./CaiTaskManagementSystemVariableGroups";
export declare namespace CaiPersonalitiesTaskManagementSystemVariableProfiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _defaultVariableGroupKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get defaultVariableGroupKey(): CaiTaskManagementSystemVariableGroups.Entry | undefined;
    }
}
export default CaiPersonalitiesTaskManagementSystemVariableProfiles;
