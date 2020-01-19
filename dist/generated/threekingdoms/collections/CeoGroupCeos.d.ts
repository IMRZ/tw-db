import { CollectionCache, CollectionKey } from "../../../common";
import { CeoGroups } from "./CeoGroups";
import { Ceos } from "./Ceos";
export declare namespace CeoGroupCeos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceoGroup: string;
        readonly _ceo: string;
        readonly triggerWeighting: number;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ceoGroup(): CeoGroups.Entry | undefined;
        get ceo(): Ceos.Entry | undefined;
    }
}
export default CeoGroupCeos;
