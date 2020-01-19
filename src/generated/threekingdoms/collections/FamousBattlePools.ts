
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";

export namespace FamousBattlePools {
  export const KEY = new CollectionKey("famous_battle_pools");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly poolId: number;
    readonly poolPosX: number;
    readonly poolPosY: number;
    readonly poolRadius: number;
    readonly battleName: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.poolId = values["pool_id"];
      this.poolPosX = values["pool_posX"];
      this.poolPosY = values["pool_posY"];
      this.poolRadius = values["pool_radius"];
      this.battleName = values["battle_name"];
      this._campaign = values["campaign"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default FamousBattlePools;
