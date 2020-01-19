import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemVariableGroups } from "./CaiTaskManagementSystemVariableGroups";
export declare namespace CaiTaskManagementSystemVariableGroupOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _groupKey: string;
        readonly _parentGroupKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get groupKey(): CaiTaskManagementSystemVariableGroups.Entry | undefined;
        get parentGroupKey(): CaiTaskManagementSystemVariableGroups.Entry | undefined;
    }
}
export default CaiTaskManagementSystemVariableGroupOverrides;
