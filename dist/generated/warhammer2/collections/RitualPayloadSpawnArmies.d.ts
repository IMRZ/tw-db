import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { SpawnableForces } from "./SpawnableForces";
import { Factions } from "./Factions";
export declare namespace RitualPayloadSpawnArmies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _payload: string;
        readonly _spawnableForce: string;
        readonly spawnAtRitualSite: boolean;
        readonly _factionOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): RitualPayloads.Entry | undefined;
        get spawnableForce(): SpawnableForces.Entry | undefined;
        get factionOverride(): Factions.Entry | undefined;
    }
}
export default RitualPayloadSpawnArmies;
