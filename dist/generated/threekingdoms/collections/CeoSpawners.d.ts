import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
import { Ceos } from "./Ceos";
import { CeoScriptedPermissions } from "./CeoScriptedPermissions";
export declare namespace CeoSpawners {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _existsInLocation: string;
        readonly _spawnsCeo: string;
        readonly spawnThreshold: number;
        readonly minPoints: number;
        readonly maxPoints: number;
        readonly pointsChangePerTurnIfSpawingEnabled: number;
        readonly pointsChangePerTurnIfSpawingDisabled: number;
        readonly resetIfPointGainDisabled: boolean;
        readonly resetIfSpawningDisabled: boolean;
        readonly destroyIfPointGainDisabled: boolean;
        readonly destroyIfSpawningDisabled: boolean;
        readonly _providesScriptedPermissionsOnSpawn: string;
        constructor(collectionCache: CollectionCache, values: any);
        get existsInLocation(): CeoTemplateManagerTypes.Entry | undefined;
        get spawnsCeo(): Ceos.Entry | undefined;
        get providesScriptedPermissionsOnSpawn(): CeoScriptedPermissions.Entry | undefined;
    }
}
export default CeoSpawners;
