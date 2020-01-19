
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";

export namespace CampaignMapRoads {
  export const KEY = new CollectionKey("campaign_map_roads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _campaign: string;
    readonly threshold: number;
    readonly turnsRequiredToUpgradeTo: number;
    readonly turnsRequiredToDowngradeFrom: number;
    readonly movementCost: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._campaign = values["campaign"];
      this.threshold = values["threshold"];
      this.turnsRequiredToUpgradeTo = values["turns_required_to_upgrade_to"];
      this.turnsRequiredToDowngradeFrom = values["turns_required_to_downgrade_from"];
      this.movementCost = values["movement_cost"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default CampaignMapRoads;
