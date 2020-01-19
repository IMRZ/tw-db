
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleVortexCollisionResponses {
  export const KEY = new CollectionKey("battle_vortex_collision_responses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly vortexCollisionType: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.vortexCollisionType = values["vortex_collision_type"];
      this.description = values["description"];
    }
    
  }
}

export default BattleVortexCollisionResponses;
