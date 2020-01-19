
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyTreatyComponentSetTreatyComponentDirections } from "./CampaignDiplomacyTreatyComponentSetTreatyComponentDirections";

export namespace CampaignDiplomacyTreatyComponentSetTreatyComponents {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_set_treaty_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _set: string;
    readonly _treatyComponent: string;
    readonly _direction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._set = values["set"];
      this._treatyComponent = values["treaty_component"];
      this._direction = values["direction"];
    }
    
    get set(): CampaignDiplomacyTreatyComponentSets.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentSets.KEY, CampaignDiplomacyTreatyComponentSets.Entry);
      return collection.find(entry => entry.set === this._set);
    }
    
    get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyComponent);
    }
    
    get direction(): CampaignDiplomacyTreatyComponentSetTreatyComponentDirections.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentSetTreatyComponentDirections.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentSetTreatyComponentDirections.KEY, CampaignDiplomacyTreatyComponentSetTreatyComponentDirections.Entry);
      return collection.find(entry => entry.direction === this._direction);
    }
  }
}

export default CampaignDiplomacyTreatyComponentSetTreatyComponents;
