
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { CampaignEffectScopeCharacterUnitRelationships } from "./CampaignEffectScopeCharacterUnitRelationships";

export namespace CampaignEffectScopeCharacterUnitRelationshipJunctions {
  export const KEY = new CollectionKey("campaign_effect_scope_character_unit_relationship_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignEffectScopeKey: string;
    readonly _unitRelationshipKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignEffectScopeKey = values["campaign_effect_scope_key"];
      this._unitRelationshipKey = values["unit_relationship_key"];
    }
    
    get campaignEffectScopeKey(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._campaignEffectScopeKey);
    }
    
    get unitRelationshipKey(): CampaignEffectScopeCharacterUnitRelationships.Entry | undefined {
      const collection = <CampaignEffectScopeCharacterUnitRelationships.Entry[]>this.collectionCache.getCollection(CampaignEffectScopeCharacterUnitRelationships.KEY, CampaignEffectScopeCharacterUnitRelationships.Entry);
      return collection.find(entry => entry.key === this._unitRelationshipKey);
    }
  }
}

export default CampaignEffectScopeCharacterUnitRelationshipJunctions;
