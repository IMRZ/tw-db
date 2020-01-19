import { CollectionCache, CollectionKey } from "../../../common";
import { CeoPermissions } from "./CeoPermissions";
import { CeoGroups } from "./CeoGroups";
export declare namespace CeoPermissionsGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _permissions: string;
        readonly _group: string;
        readonly pointGainEnabledOverride: boolean;
        readonly pointGainDisabledOverride: boolean;
        readonly stateActiveOverride: boolean;
        readonly stateInactiveOverride: boolean;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get permissions(): CeoPermissions.Entry | undefined;
        get group(): CeoGroups.Entry | undefined;
    }
}
export default CeoPermissionsGroups;
