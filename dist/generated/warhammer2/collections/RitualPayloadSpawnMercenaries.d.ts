import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { MainUnits } from "./MainUnits";
export declare namespace RitualPayloadSpawnMercenaries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _payload: string;
        readonly _spawnableUnit: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly payload: RitualPayloads.Entry | undefined;
        readonly spawnableUnit: MainUnits.Entry | undefined;
    }
}
export default RitualPayloadSpawnMercenaries;
