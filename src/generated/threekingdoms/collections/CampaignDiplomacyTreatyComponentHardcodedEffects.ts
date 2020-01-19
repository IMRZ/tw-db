
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyHardcodedEffects } from "./CampaignDiplomacyHardcodedEffects";

export namespace CampaignDiplomacyTreatyComponentHardcodedEffects {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_hardcoded_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treatyComponent: string;
    readonly _hardcodedEffect: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treatyComponent = values["treaty_component"];
      this._hardcodedEffect = values["hardcoded_effect"];
    }
    
    get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyComponent);
    }
    
    get hardcodedEffect(): CampaignDiplomacyHardcodedEffects.Entry | undefined {
      const collection = <CampaignDiplomacyHardcodedEffects.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyHardcodedEffects.KEY, CampaignDiplomacyHardcodedEffects.Entry);
      return collection.find(entry => entry.key === this._hardcodedEffect);
    }
  }
}

export default CampaignDiplomacyTreatyComponentHardcodedEffects;
