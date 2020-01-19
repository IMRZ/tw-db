
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignPayloads } from "./CampaignPayloads";
import { UiCharacterActions } from "./UiCharacterActions";
import { CampaignCharacterActionSharedPerTurnLimits } from "./CampaignCharacterActionSharedPerTurnLimits";

export namespace CampaignGroupCharacterActions {
  export const KEY = new CollectionKey("campaign_group_character_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _payload: string;
    readonly _uiRecord: string;
    readonly allowedTimesPerCharacterPerTurn: number;
    readonly _sharedAllowedTimesPerTurn: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._payload = values["payload"];
      this._uiRecord = values["ui_record"];
      this.allowedTimesPerCharacterPerTurn = values["allowed_times_per_character_per_turn"];
      this._sharedAllowedTimesPerTurn = values["shared_allowed_times_per_turn"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get uiRecord(): UiCharacterActions.Entry | undefined {
      const collection = <UiCharacterActions.Entry[]>this.collectionCache.getCollection(UiCharacterActions.KEY, UiCharacterActions.Entry);
      return collection.find(entry => entry.key === this._uiRecord);
    }
    
    get sharedAllowedTimesPerTurn(): CampaignCharacterActionSharedPerTurnLimits.Entry | undefined {
      const collection = <CampaignCharacterActionSharedPerTurnLimits.Entry[]>this.collectionCache.getCollection(CampaignCharacterActionSharedPerTurnLimits.KEY, CampaignCharacterActionSharedPerTurnLimits.Entry);
      return collection.find(entry => entry.key === this._sharedAllowedTimesPerTurn);
    }
  }
}

export default CampaignGroupCharacterActions;
