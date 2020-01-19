import { CollectionCache, CollectionKey } from "../../../common";
import { CeoGroups } from "./CeoGroups";
import { CeoSpawners } from "./CeoSpawners";
export declare namespace CeoGroupSpawners {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceoGroup: string;
        readonly _ceoSpawner: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ceoGroup(): CeoGroups.Entry | undefined;
        get ceoSpawner(): CeoSpawners.Entry | undefined;
    }
}
export default CeoGroupSpawners;
