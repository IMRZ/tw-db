
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSubjects } from "./CampaignSubjects";
import { Factions } from "./Factions";

export namespace CampaignSubjectFactionRestrictionJunctions {
  export const KEY = new CollectionKey("campaign_subject_faction_restriction_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignSubjectKey: string;
    readonly _factionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignSubjectKey = values["campaign_subject_key"];
      this._factionKey = values["faction_key"];
    }
    
    get campaignSubjectKey(): CampaignSubjects.Entry | undefined {
      const collection = <CampaignSubjects.Entry[]>this.collectionCache.getCollection(CampaignSubjects.KEY, CampaignSubjects.Entry);
      return collection.find(entry => entry.key === this._campaignSubjectKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
  }
}

export default CampaignSubjectFactionRestrictionJunctions;
