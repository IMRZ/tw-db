
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Names } from "./Names";

export namespace CampaignGroupCharacterNamesCosmeticOverrides {
  export const KEY = new CollectionKey("campaign_group_character_names_cosmetic_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _clanName: number;
    readonly _familyName: number;
    readonly _forename: number;
    readonly _otherName: number;
    readonly clanNameUseCurrent: boolean;
    readonly familyNameUseCurrent: boolean;
    readonly forenameUseCurrent: boolean;
    readonly otherNameUseCurrent: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._clanName = values["clan_name"];
      this._familyName = values["family_name"];
      this._forename = values["forename"];
      this._otherName = values["other_name"];
      this.clanNameUseCurrent = !!values["clan_name_use_current"];
      this.familyNameUseCurrent = !!values["family_name_use_current"];
      this.forenameUseCurrent = !!values["forename_use_current"];
      this.otherNameUseCurrent = !!values["other_name_use_current"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get clanName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._clanName);
    }
    
    get familyName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._familyName);
    }
    
    get forename(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._forename);
    }
    
    get otherName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._otherName);
    }
  }
}

export default CampaignGroupCharacterNamesCosmeticOverrides;
