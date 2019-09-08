import { CollectionCache, CollectionKey } from "../../../common";
import { Mounts } from "./Mounts";
export declare namespace MountVariants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _mountKey: string;
        readonly displayKey: string;
        readonly weight: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly mountKey: Mounts.Entry | undefined;
    }
}
export default MountVariants;
