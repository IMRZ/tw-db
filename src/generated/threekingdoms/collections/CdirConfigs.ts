
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CdirConfigValues } from "./CdirConfigValues";

export namespace CdirConfigs {
  export const KEY = new CollectionKey("cdir_configs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _cdirConfigKey: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._cdirConfigKey = values["cdir_config_key"];
      this.value = values["value"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get cdirConfigKey(): CdirConfigValues.Entry | undefined {
      const collection = <CdirConfigValues.Entry[]>this.collectionCache.getCollection(CdirConfigValues.KEY, CdirConfigValues.Entry);
      return collection.find(entry => entry.key === this._cdirConfigKey);
    }
  }
}

export default CdirConfigs;
