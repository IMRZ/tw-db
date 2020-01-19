import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { Ancillaries } from "./Ancillaries";
export declare namespace RitualPayloadAncillaries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _payload: string;
        readonly _ancillary: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): RitualPayloads.Entry | undefined;
        get ancillary(): Ancillaries.Entry | undefined;
    }
}
export default RitualPayloadAncillaries;
