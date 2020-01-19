import { CollectionCache, CollectionKey } from "../../../common";
import { CeoSpawners } from "./CeoSpawners";
import { Ceos } from "./Ceos";
import { CeoTemplateManagerTypes } from "./CeoTemplateManagerTypes";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";
export declare namespace CeoSpawnerCanSpawnRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _spawner: string;
        readonly _requiredCeo1: string;
        readonly _requiredCeo2: string;
        readonly _requiredCeo3: string;
        readonly _targetCeoManager: string;
        readonly _targetEquipmentManager: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get spawner(): CeoSpawners.Entry | undefined;
        get requiredCeo1(): Ceos.Entry | undefined;
        get requiredCeo2(): Ceos.Entry | undefined;
        get requiredCeo3(): Ceos.Entry | undefined;
        get targetCeoManager(): CeoTemplateManagerTypes.Entry | undefined;
        get targetEquipmentManager(): CeoEquipmentManagerTypes.Entry | undefined;
    }
}
export default CeoSpawnerCanSpawnRequirements;
