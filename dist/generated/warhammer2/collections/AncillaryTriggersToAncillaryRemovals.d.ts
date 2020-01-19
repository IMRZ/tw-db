import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryTriggers } from "./AncillaryTriggers";
import { AncillaryInfo } from "./AncillaryInfo";
export declare namespace AncillaryTriggersToAncillaryRemovals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _trigger: string;
        readonly _ancillary: string;
        constructor(collectionCache: CollectionCache, values: any);
        get trigger(): AncillaryTriggers.Entry | undefined;
        get ancillary(): AncillaryInfo.Entry | undefined;
    }
}
export default AncillaryTriggersToAncillaryRemovals;
