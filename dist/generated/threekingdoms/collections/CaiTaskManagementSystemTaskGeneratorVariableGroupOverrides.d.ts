import { CollectionCache, CollectionKey } from "../../../common";
import { CaiTaskManagementSystemTaskGeneratorVariableGroups } from "./CaiTaskManagementSystemTaskGeneratorVariableGroups";
export declare namespace CaiTaskManagementSystemTaskGeneratorVariableGroupOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _parentKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry | undefined;
        get parentKey(): CaiTaskManagementSystemTaskGeneratorVariableGroups.Entry | undefined;
    }
}
export default CaiTaskManagementSystemTaskGeneratorVariableGroupOverrides;
