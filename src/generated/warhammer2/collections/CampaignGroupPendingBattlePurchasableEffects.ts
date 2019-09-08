
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PurchasableEffects } from "./PurchasableEffects";

export namespace CampaignGroupPendingBattlePurchasableEffects {
  export const KEY = new CollectionKey("campaign_group_pending_battle_purchasable_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _purchasableEffect: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._purchasableEffect = values["purchasable_effect"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get purchasableEffect(): PurchasableEffects.Entry | undefined {
      const collection = <PurchasableEffects.Entry[]>this.collectionCache.getCollection(PurchasableEffects.KEY, PurchasableEffects.Entry);
      return collection.find(entry => entry.id === this._purchasableEffect);
    }
  }
}

export default CampaignGroupPendingBattlePurchasableEffects;
