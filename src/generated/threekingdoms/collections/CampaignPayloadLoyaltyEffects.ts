
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { LoyaltyEffects } from "./LoyaltyEffects";
import { CampaignPayloadLoyaltyScopes } from "./CampaignPayloadLoyaltyScopes";
import { CeoSets } from "./CeoSets";

export namespace CampaignPayloadLoyaltyEffects {
  export const KEY = new CollectionKey("campaign_payload_loyalty_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _payload: string;
    readonly _loyaltyEffect: string;
    readonly _scope: string;
    readonly _requiredCharacterCeos: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._payload = values["payload"];
      this._loyaltyEffect = values["loyalty_effect"];
      this._scope = values["scope"];
      this._requiredCharacterCeos = values["required_character_ceos"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get loyaltyEffect(): LoyaltyEffects.Entry | undefined {
      const collection = <LoyaltyEffects.Entry[]>this.collectionCache.getCollection(LoyaltyEffects.KEY, LoyaltyEffects.Entry);
      return collection.find(entry => entry.key === this._loyaltyEffect);
    }
    
    get scope(): CampaignPayloadLoyaltyScopes.Entry | undefined {
      const collection = <CampaignPayloadLoyaltyScopes.Entry[]>this.collectionCache.getCollection(CampaignPayloadLoyaltyScopes.KEY, CampaignPayloadLoyaltyScopes.Entry);
      return collection.find(entry => entry.id === this._scope);
    }
    
    get requiredCharacterCeos(): CeoSets.Entry | undefined {
      const collection = <CeoSets.Entry[]>this.collectionCache.getCollection(CeoSets.KEY, CeoSets.Entry);
      return collection.find(entry => entry.key === this._requiredCharacterCeos);
    }
  }
}

export default CampaignPayloadLoyaltyEffects;
