import { CollectionCache, CollectionKey } from "../../../common";
import { CeoTemplateManagers } from "./CeoTemplateManagers";
import { Ceos } from "./Ceos";
export declare namespace CeoTemplateManagerCeoSpawnLimits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _templateManager: string;
        readonly _ceo: string;
        readonly spawnLimit: number;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get templateManager(): CeoTemplateManagers.Entry | undefined;
        get ceo(): Ceos.Entry | undefined;
    }
}
export default CeoTemplateManagerCeoSpawnLimits;
