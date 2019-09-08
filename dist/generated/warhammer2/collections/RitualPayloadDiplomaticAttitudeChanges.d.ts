import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
export declare namespace RitualPayloadDiplomaticAttitudeChanges {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly attitudeDelta: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly payload: RitualPayloads.Entry | undefined;
    }
}
export default RitualPayloadDiplomaticAttitudeChanges;
