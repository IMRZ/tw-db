import { CollectionCache, CollectionKey } from "../../../common";
import { AncillaryTriggers } from "./AncillaryTriggers";
import { AncillaryInfo } from "./AncillaryInfo";
export declare namespace AncillaryTriggerEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _trigger: string;
        readonly _ancillary: string;
        readonly chance: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly trigger: AncillaryTriggers.Entry | undefined;
        readonly ancillary: AncillaryInfo.Entry | undefined;
    }
}
export default AncillaryTriggerEffects;
