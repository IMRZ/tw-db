
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignTerritoryTypes {
  export const KEY = new CollectionKey("campaign_territory_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _campaignGroup: string;
    readonly countsAsEnemyLands: boolean;
    readonly countsTowardsPublicOrderWarHappiness: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._campaignGroup = values["campaign_group"];
      this.countsAsEnemyLands = !!values["counts_as_enemy_lands"];
      this.countsTowardsPublicOrderWarHappiness = !!values["counts_towards_public_order_war_happiness"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
  }
}

export default CampaignTerritoryTypes;
