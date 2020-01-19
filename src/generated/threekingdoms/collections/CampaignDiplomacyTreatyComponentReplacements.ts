
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyExistingComponents } from "./CampaignDiplomacyExistingComponents";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CampaignDiplomacyTreatyComponentReplacements {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_replacements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _toBeReplaced: string;
    readonly _replacedBy: string;
    readonly replacedComponentIsBroken: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._toBeReplaced = values["to_be_replaced"];
      this._replacedBy = values["replaced_by"];
      this.replacedComponentIsBroken = !!values["replaced_component_is_broken"];
    }
    
    get toBeReplaced(): CampaignDiplomacyExistingComponents.Entry | undefined {
      const collection = <CampaignDiplomacyExistingComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyExistingComponents.KEY, CampaignDiplomacyExistingComponents.Entry);
      return collection.find(entry => entry.key === this._toBeReplaced);
    }
    
    get replacedBy(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._replacedBy);
    }
  }
}

export default CampaignDiplomacyTreatyComponentReplacements;
