
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyKeyGroups } from "./DiplomacyKeyGroups";
import { DiplomacyStrings } from "./DiplomacyStrings";
import { CampaignGroups } from "./CampaignGroups";

export namespace DiplomacyNegotiationStringOptions {
  export const KEY = new CollectionKey("diplomacy_negotiation_string_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _string: string;
    readonly option: number;
    readonly _group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._string = values["string"];
      this.option = values["option"];
      this._group = values["group"];
    }
    
    get key(): DiplomacyKeyGroups.Entry | undefined {
      const collection = <DiplomacyKeyGroups.Entry[]>this.collectionCache.getCollection(DiplomacyKeyGroups.KEY, DiplomacyKeyGroups.Entry);
      return collection.find(entry => entry.groupId === this._key);
    }
    
    get string(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._string);
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
  }
}

export default DiplomacyNegotiationStringOptions;
