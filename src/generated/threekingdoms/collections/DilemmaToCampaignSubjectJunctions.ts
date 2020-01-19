
import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CampaignSubjects } from "./CampaignSubjects";

export namespace DilemmaToCampaignSubjectJunctions {
  export const KEY = new CollectionKey("dilemma_to_campaign_subject_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _dilemmaKey: string;
    readonly _campaignSubjectKey: string;
    readonly weighting: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._dilemmaKey = values["dilemma_key"];
      this._campaignSubjectKey = values["campaign_subject_key"];
      this.weighting = values["weighting"];
    }
    
    get dilemmaKey(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._dilemmaKey);
    }
    
    get campaignSubjectKey(): CampaignSubjects.Entry | undefined {
      const collection = <CampaignSubjects.Entry[]>this.collectionCache.getCollection(CampaignSubjects.KEY, CampaignSubjects.Entry);
      return collection.find(entry => entry.key === this._campaignSubjectKey);
    }
  }
}

export default DilemmaToCampaignSubjectJunctions;
