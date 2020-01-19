
import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";
import { Campaigns } from "./Campaigns";

export namespace CampaignReligiousRelations {
  export const KEY = new CollectionKey("campaign_religious_relations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _source: string;
    readonly _target: string;
    readonly positiveAttitudeMultiplier: number;
    readonly negativeAttitudeMultiplier: number;
    readonly attitudeBase: number;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._source = values["source"];
      this._target = values["target"];
      this.positiveAttitudeMultiplier = values["positive_attitude_multiplier"];
      this.negativeAttitudeMultiplier = values["negative_attitude_multiplier"];
      this.attitudeBase = values["attitude_base"];
      this._campaign = values["campaign"];
    }
    
    get source(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._source);
    }
    
    get target(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._target);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default CampaignReligiousRelations;
