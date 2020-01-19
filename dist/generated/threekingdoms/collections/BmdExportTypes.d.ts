import { CollectionCache, CollectionKey } from "../../../common";
import { BmdLayerGroups } from "./BmdLayerGroups";
export declare namespace BmdExportTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly description: string;
        readonly _group: string;
        readonly default: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): BmdLayerGroups.Entry | undefined;
    }
}
export default BmdExportTypes;
