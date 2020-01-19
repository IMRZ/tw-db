
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptions } from "./CampaignDiplomacyMovementOptions";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CampaignDiplomacyMovementOptionSimpleDeals {
  export const KEY = new CollectionKey("campaign_diplomacy_movement_option_simple_deals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _movementOption: string;
    readonly _proposerVariable: string;
    readonly _recipientVariable: string;
    readonly _component: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._movementOption = values["movement_option"];
      this._proposerVariable = values["proposer_variable"];
      this._recipientVariable = values["recipient_variable"];
      this._component = values["component"];
    }
    
    get movementOption(): CampaignDiplomacyMovementOptions.Entry | undefined {
      const collection = <CampaignDiplomacyMovementOptions.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyMovementOptions.KEY, CampaignDiplomacyMovementOptions.Entry);
      return collection.find(entry => entry._requirement === this._movementOption);
    }
    
    get proposerVariable(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._proposerVariable);
    }
    
    get recipientVariable(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._recipientVariable);
    }
    
    get component(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._component);
    }
  }
}

export default CampaignDiplomacyMovementOptionSimpleDeals;
