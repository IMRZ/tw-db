import { CollectionCache, CollectionKey } from "../../../common";
import { TraitInfo } from "./TraitInfo";
export declare namespace TraitToAntitraits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _trait: string;
        readonly _antitrait: string;
        constructor(collectionCache: CollectionCache, values: any);
        get trait(): TraitInfo.Entry | undefined;
        get antitrait(): TraitInfo.Entry | undefined;
    }
}
export default TraitToAntitraits;
