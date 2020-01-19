import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { RitualPayloadBasicComponentTypes } from "./RitualPayloadBasicComponentTypes";
export declare namespace RitualPayloadBasicComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _payload: string;
        readonly _component: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): RitualPayloads.Entry | undefined;
        get component(): RitualPayloadBasicComponentTypes.Entry | undefined;
    }
}
export default RitualPayloadBasicComponents;
