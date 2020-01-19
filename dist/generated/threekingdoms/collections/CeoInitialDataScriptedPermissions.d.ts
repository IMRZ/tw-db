import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
import { CeoScriptedPermissions } from "./CeoScriptedPermissions";
export declare namespace CeoInitialDataScriptedPermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _initialDataStage: string;
        readonly _scriptedPermissions: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get initialDataStage(): CeoInitialDataStages.Entry | undefined;
        get scriptedPermissions(): CeoScriptedPermissions.Entry | undefined;
    }
}
export default CeoInitialDataScriptedPermissions;
