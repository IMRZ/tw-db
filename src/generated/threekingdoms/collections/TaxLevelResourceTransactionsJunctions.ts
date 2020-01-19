
import { CollectionCache, CollectionKey } from "../../../common";
import { TaxesLevels } from "./TaxesLevels";
import { ResourceTransactions } from "./ResourceTransactions";
import { PooledResourceScopes } from "./PooledResourceScopes";
import { Campaigns } from "./Campaigns";
import { PlayerGameDifficultyTypes } from "./PlayerGameDifficultyTypes";

export namespace TaxLevelResourceTransactionsJunctions {
  export const KEY = new CollectionKey("tax_level_resource_transactions_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _taxLevel: string;
    readonly _transaction: string;
    readonly _transactionScope: string;
    readonly _optionalCampaignFilter: string;
    readonly _optionalDifficultyOverride: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._taxLevel = values["tax_level"];
      this._transaction = values["transaction"];
      this._transactionScope = values["transaction_scope"];
      this._optionalCampaignFilter = values["optional_campaign_filter"];
      this._optionalDifficultyOverride = values["optional_difficulty_override"];
    }
    
    get taxLevel(): TaxesLevels.Entry | undefined {
      const collection = <TaxesLevels.Entry[]>this.collectionCache.getCollection(TaxesLevels.KEY, TaxesLevels.Entry);
      return collection.find(entry => entry.taxLevel === this._taxLevel);
    }
    
    get transaction(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._transaction);
    }
    
    get transactionScope(): PooledResourceScopes.Entry | undefined {
      const collection = <PooledResourceScopes.Entry[]>this.collectionCache.getCollection(PooledResourceScopes.KEY, PooledResourceScopes.Entry);
      return collection.find(entry => entry.key === this._transactionScope);
    }
    
    get optionalCampaignFilter(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._optionalCampaignFilter);
    }
    
    get optionalDifficultyOverride(): PlayerGameDifficultyTypes.Entry | undefined {
      const collection = <PlayerGameDifficultyTypes.Entry[]>this.collectionCache.getCollection(PlayerGameDifficultyTypes.KEY, PlayerGameDifficultyTypes.Entry);
      return collection.find(entry => entry.difficultyType === this._optionalDifficultyOverride);
    }
  }
}

export default TaxLevelResourceTransactionsJunctions;
