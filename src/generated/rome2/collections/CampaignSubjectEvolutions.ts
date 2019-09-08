
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSubjects } from "./CampaignSubjects";
import { EffectBundles } from "./EffectBundles";
import { CampaignSubjectMessages } from "./CampaignSubjectMessages";
import { CampaignSubjectStrings } from "./CampaignSubjectStrings";

export namespace CampaignSubjectEvolutions {
  export const KEY = new CollectionKey("campaign_subject_evolutions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _campaignSubjectKey: string;
    readonly _effectBundleKey: string;
    readonly minTurns: number;
    readonly maxTurns: number;
    readonly weighting: number;
    readonly _arrivalMessage: string;
    readonly _departureMessage: string;
    readonly _flavourText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._campaignSubjectKey = values["campaign_subject_key"];
      this._effectBundleKey = values["effect_bundle_key"];
      this.minTurns = values["min_turns"];
      this.maxTurns = values["max_turns"];
      this.weighting = values["weighting"];
      this._arrivalMessage = values["arrival_message"];
      this._departureMessage = values["departure_message"];
      this._flavourText = values["flavour_text"];
    }
    
    get campaignSubjectKey(): CampaignSubjects.Entry | undefined {
      const collection = <CampaignSubjects.Entry[]>this.collectionCache.getCollection(CampaignSubjects.KEY, CampaignSubjects.Entry);
      return collection.find(entry => entry.key === this._campaignSubjectKey);
    }
    
    get effectBundleKey(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundleKey);
    }
    
    get arrivalMessage(): CampaignSubjectMessages.Entry | undefined {
      const collection = <CampaignSubjectMessages.Entry[]>this.collectionCache.getCollection(CampaignSubjectMessages.KEY, CampaignSubjectMessages.Entry);
      return collection.find(entry => entry.key === this._arrivalMessage);
    }
    
    get departureMessage(): CampaignSubjectMessages.Entry | undefined {
      const collection = <CampaignSubjectMessages.Entry[]>this.collectionCache.getCollection(CampaignSubjectMessages.KEY, CampaignSubjectMessages.Entry);
      return collection.find(entry => entry.key === this._departureMessage);
    }
    
    get flavourText(): CampaignSubjectStrings.Entry | undefined {
      const collection = <CampaignSubjectStrings.Entry[]>this.collectionCache.getCollection(CampaignSubjectStrings.KEY, CampaignSubjectStrings.Entry);
      return collection.find(entry => entry.key === this._flavourText);
    }
  }
}

export default CampaignSubjectEvolutions;
