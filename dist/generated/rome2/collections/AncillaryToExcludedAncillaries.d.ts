import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryInfo } from "./AncillaryInfo";
export declare namespace AncillaryToExcludedAncillaries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ancillary: string;
        readonly _excludedAncillary: any;
        constructor(collectionCache: CollectionCache, values: any);
        readonly ancillary: AncillaryInfo.Entry | undefined;
    }
}
export default AncillaryToExcludedAncillaries;
