
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirCampaignJunctions } from "./CdirCampaignJunctions";
import { CdirFactionJunctions } from "./CdirFactionJunctions";
import { CdirConfigValues } from "./CdirConfigValues";

export namespace CdirConfigs {
  export const KEY = new CollectionKey("cdir_configs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignKey: string;
    readonly _factionKey: string;
    readonly _cdirConfigKey: string;
    readonly value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignKey = values["campaign_key"];
      this._factionKey = values["faction_key"];
      this._cdirConfigKey = values["cdir_config_key"];
      this.value = values["value"];
    }
    
    get campaignKey(): CdirCampaignJunctions.Entry | undefined {
      const collection = <CdirCampaignJunctions.Entry[]>this.collectionCache.getCollection(CdirCampaignJunctions.KEY, CdirCampaignJunctions.Entry);
      return collection.find(entry => entry.key === this._campaignKey);
    }
    
    get factionKey(): CdirFactionJunctions.Entry | undefined {
      const collection = <CdirFactionJunctions.Entry[]>this.collectionCache.getCollection(CdirFactionJunctions.KEY, CdirFactionJunctions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get cdirConfigKey(): CdirConfigValues.Entry | undefined {
      const collection = <CdirConfigValues.Entry[]>this.collectionCache.getCollection(CdirConfigValues.KEY, CdirConfigValues.Entry);
      return collection.find(entry => entry.key === this._cdirConfigKey);
    }
  }
}

export default CdirConfigs;
