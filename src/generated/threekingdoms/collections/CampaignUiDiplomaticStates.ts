
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignUiDiplomaticCcoStates } from "./CampaignUiDiplomaticCcoStates";

export namespace CampaignUiDiplomaticStates {
  export const KEY = new CollectionKey("campaign_ui_diplomatic_states");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _ccoState: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._ccoState = values["cco_state"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get ccoState(): CampaignUiDiplomaticCcoStates.Entry | undefined {
      const collection = <CampaignUiDiplomaticCcoStates.Entry[]>this.collectionCache.getCollection(CampaignUiDiplomaticCcoStates.KEY, CampaignUiDiplomaticCcoStates.Entry);
      return collection.find(entry => entry.stateName === this._ccoState);
    }
  }
}

export default CampaignUiDiplomaticStates;
