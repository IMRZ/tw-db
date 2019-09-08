
import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { SpawnableForces } from "./SpawnableForces";
import { Factions } from "./Factions";

export namespace RitualPayloadSpawnArmies {
  export const KEY = new CollectionKey("ritual_payload_spawn_armies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _payload: string;
    readonly _spawnableForce: string;
    readonly spawnAtRitualSite: boolean;
    readonly _factionOverride: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._payload = values["payload"];
      this._spawnableForce = values["spawnable_force"];
      this.spawnAtRitualSite = !!values["spawn_at_ritual_site"];
      this._factionOverride = values["faction_override"];
    }
    
    get payload(): RitualPayloads.Entry | undefined {
      const collection = <RitualPayloads.Entry[]>this.collectionCache.getCollection(RitualPayloads.KEY, RitualPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get spawnableForce(): SpawnableForces.Entry | undefined {
      const collection = <SpawnableForces.Entry[]>this.collectionCache.getCollection(SpawnableForces.KEY, SpawnableForces.Entry);
      return collection.find(entry => entry.key === this._spawnableForce);
    }
    
    get factionOverride(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionOverride);
    }
  }
}

export default RitualPayloadSpawnArmies;
