
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { CampaignEffectScopeCharacterForceRelationships } from "./CampaignEffectScopeCharacterForceRelationships";

export namespace CampaignEffectScopeCharacterForceRelationshipJunctions {
  export const KEY = new CollectionKey("campaign_effect_scope_character_force_relationship_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignEffectScopeKey: string;
    readonly _forceRelationshipKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignEffectScopeKey = values["campaign_effect_scope_key"];
      this._forceRelationshipKey = values["force_relationship_key"];
    }
    
    get campaignEffectScopeKey(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._campaignEffectScopeKey);
    }
    
    get forceRelationshipKey(): CampaignEffectScopeCharacterForceRelationships.Entry | undefined {
      const collection = <CampaignEffectScopeCharacterForceRelationships.Entry[]>this.collectionCache.getCollection(CampaignEffectScopeCharacterForceRelationships.KEY, CampaignEffectScopeCharacterForceRelationships.Entry);
      return collection.find(entry => entry.key === this._forceRelationshipKey);
    }
  }
}

export default CampaignEffectScopeCharacterForceRelationshipJunctions;
