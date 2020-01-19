
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSubjectStrings } from "./CampaignSubjectStrings";

export namespace CampaignSubjects {
  export const KEY = new CollectionKey("campaign_subjects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _optionalName: string;
    readonly uiImage: string;
    readonly _flavourText: string;
    readonly male: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._optionalName = values["optional_name"];
      this.uiImage = values["ui_image"];
      this._flavourText = values["flavour_text"];
      this.male = !!values["male"];
    }
    
    get optionalName(): CampaignSubjectStrings.Entry | undefined {
      const collection = <CampaignSubjectStrings.Entry[]>this.collectionCache.getCollection(CampaignSubjectStrings.KEY, CampaignSubjectStrings.Entry);
      return collection.find(entry => entry.key === this._optionalName);
    }
    
    get flavourText(): CampaignSubjectStrings.Entry | undefined {
      const collection = <CampaignSubjectStrings.Entry[]>this.collectionCache.getCollection(CampaignSubjectStrings.KEY, CampaignSubjectStrings.Entry);
      return collection.find(entry => entry.key === this._flavourText);
    }
  }
}

export default CampaignSubjects;
