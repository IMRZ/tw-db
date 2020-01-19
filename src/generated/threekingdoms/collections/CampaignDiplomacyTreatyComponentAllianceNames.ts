
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyAllianceNameGroups } from "./CampaignDiplomacyAllianceNameGroups";

export namespace CampaignDiplomacyTreatyComponentAllianceNames {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_alliance_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treatyComponent: string;
    readonly _allianceNameGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treatyComponent = values["treaty_component"];
      this._allianceNameGroup = values["alliance_name_group"];
    }
    
    get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyComponent);
    }
    
    get allianceNameGroup(): CampaignDiplomacyAllianceNameGroups.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceNameGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceNameGroups.KEY, CampaignDiplomacyAllianceNameGroups.Entry);
      return collection.find(entry => entry.group === this._allianceNameGroup);
    }
  }
}

export default CampaignDiplomacyTreatyComponentAllianceNames;
