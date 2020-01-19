
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopeOwnerships } from "./CampaignEffectScopeOwnerships";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";

export namespace CampaignEffectScopeOwnershipTreatyComponentSets {
  export const KEY = new CollectionKey("campaign_effect_scope_ownership_treaty_component_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _scopeOwnership: string;
    readonly _treatyComponentSet: string;
    readonly ownershipFactionHasSupersetOfSpecifiedSet: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._scopeOwnership = values["scope_ownership"];
      this._treatyComponentSet = values["treaty_component_set"];
      this.ownershipFactionHasSupersetOfSpecifiedSet = !!values["ownership_faction_has_superset_of_specified_set"];
    }
    
    get scopeOwnership(): CampaignEffectScopeOwnerships.Entry | undefined {
      const collection = <CampaignEffectScopeOwnerships.Entry[]>this.collectionCache.getCollection(CampaignEffectScopeOwnerships.KEY, CampaignEffectScopeOwnerships.Entry);
      return collection.find(entry => entry.key === this._scopeOwnership);
    }
    
    get treatyComponentSet(): CampaignDiplomacyTreatyComponentSets.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentSets.KEY, CampaignDiplomacyTreatyComponentSets.Entry);
      return collection.find(entry => entry.set === this._treatyComponentSet);
    }
  }
}

export default CampaignEffectScopeOwnershipTreatyComponentSets;
