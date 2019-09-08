import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryInfo } from "./AncillaryInfo";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace AncillaryIncludedSubcultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ancillary: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly ancillary: AncillaryInfo.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
    }
}
export default AncillaryIncludedSubcultures;
