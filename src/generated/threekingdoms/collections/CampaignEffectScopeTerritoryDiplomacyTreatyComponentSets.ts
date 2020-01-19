
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopeTerritories } from "./CampaignEffectScopeTerritories";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";

export namespace CampaignEffectScopeTerritoryDiplomacyTreatyComponentSets {
  export const KEY = new CollectionKey("campaign_effect_scope_territory_diplomacy_treaty_component_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _territory: string;
    readonly _diplomacyTreatyComponentSet: string;
    readonly territoryFactionHasSupersetOfSpecifiedSet: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._territory = values["territory"];
      this._diplomacyTreatyComponentSet = values["diplomacy_treaty_component_set"];
      this.territoryFactionHasSupersetOfSpecifiedSet = !!values["territory_faction_has_superset_of_specified_set"];
    }
    
    get territory(): CampaignEffectScopeTerritories.Entry | undefined {
      const collection = <CampaignEffectScopeTerritories.Entry[]>this.collectionCache.getCollection(CampaignEffectScopeTerritories.KEY, CampaignEffectScopeTerritories.Entry);
      return collection.find(entry => entry.key === this._territory);
    }
    
    get diplomacyTreatyComponentSet(): CampaignDiplomacyTreatyComponentSets.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentSets.KEY, CampaignDiplomacyTreatyComponentSets.Entry);
      return collection.find(entry => entry.set === this._diplomacyTreatyComponentSet);
    }
  }
}

export default CampaignEffectScopeTerritoryDiplomacyTreatyComponentSets;
