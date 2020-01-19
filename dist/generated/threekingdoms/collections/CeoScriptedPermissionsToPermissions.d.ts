import { CollectionCache, CollectionKey } from "../../../common";
import { CeoScriptedPermissions } from "./CeoScriptedPermissions";
import { CeoPermissions } from "./CeoPermissions";
export declare namespace CeoScriptedPermissionsToPermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _scriptedPermissions: string;
        readonly _permissions: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get scriptedPermissions(): CeoScriptedPermissions.Entry | undefined;
        get permissions(): CeoPermissions.Entry | undefined;
    }
}
export default CeoScriptedPermissionsToPermissions;
