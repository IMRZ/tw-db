import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { Dilemmas } from "./Dilemmas";
export declare namespace RitualPayloadTriggerDilemmas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _dilemma: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly payload: RitualPayloads.Entry | undefined;
        readonly dilemma: Dilemmas.Entry | undefined;
    }
}
export default RitualPayloadTriggerDilemmas;
