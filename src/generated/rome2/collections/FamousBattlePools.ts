
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FamousBattlePools {
  export const KEY = new CollectionKey("famous_battle_pools");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly poolId: number;
    readonly poolPosX: number;
    readonly poolPosY: number;
    readonly poolRadius: number;
    readonly battleName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.poolId = values["pool_id"];
      this.poolPosX = values["pool_posX"];
      this.poolPosY = values["pool_posY"];
      this.poolRadius = values["pool_radius"];
      this.battleName = values["battle_name"];
    }
    
  }
}

export default FamousBattlePools;
