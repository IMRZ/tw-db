
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PooledResourceFactorJunctions } from "./PooledResourceFactorJunctions";
import { PooledResourceScopes } from "./PooledResourceScopes";

export namespace CampaignGroupPostBattleCasualtyResources {
  export const KEY = new CollectionKey("campaign_group_post_battle_casualty_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _campaignGroup: string;
    readonly _resourceFactor: string;
    readonly amountPerEnemyCasualty: number;
    readonly amountPerOwnCasualty: number;
    readonly _resourceTransactionScope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._campaignGroup = values["campaign_group"];
      this._resourceFactor = values["resource_factor"];
      this.amountPerEnemyCasualty = values["amount_per_enemy_casualty"];
      this.amountPerOwnCasualty = values["amount_per_own_casualty"];
      this._resourceTransactionScope = values["resource_transaction_scope"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get resourceFactor(): PooledResourceFactorJunctions.Entry | undefined {
      const collection = <PooledResourceFactorJunctions.Entry[]>this.collectionCache.getCollection(PooledResourceFactorJunctions.KEY, PooledResourceFactorJunctions.Entry);
      return collection.find(entry => entry.key === this._resourceFactor);
    }
    
    get resourceTransactionScope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._resourceTransactionScope);
    }
  }
}

export default CampaignGroupPostBattleCasualtyResources;
