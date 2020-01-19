import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
export declare namespace CeoScriptedPermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _existsInAndProvidesPermissionToLocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get existsInAndProvidesPermissionToLocation(): CeoTemplateManagerTypes.Entry | undefined;
    }
}
export default CeoScriptedPermissions;
