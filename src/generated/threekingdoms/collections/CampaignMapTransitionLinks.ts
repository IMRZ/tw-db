
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapTransitionAreas } from "./CampaignMapTransitionAreas";

export namespace CampaignMapTransitionLinks {
  export const KEY = new CollectionKey("campaign_map_transition_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly index: number;
    readonly _startArea: number;
    readonly _endArea: number;
    readonly delayChancePercentage: number;
    readonly turnsStartToEnd: number;
    readonly turnsEndToStart: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.index = values["index"];
      this._startArea = values["start_area"];
      this._endArea = values["end_area"];
      this.delayChancePercentage = values["delay_chance_percentage"];
      this.turnsStartToEnd = values["turns_start_to_end"];
      this.turnsEndToStart = values["turns_end_to_start"];
    }
    
    get startArea(): CampaignMapTransitionAreas.Entry | undefined {
      const collection = <CampaignMapTransitionAreas.Entry[]>this.collectionCache.getCollection(CampaignMapTransitionAreas.KEY, CampaignMapTransitionAreas.Entry);
      return collection.find(entry => entry.index === this._startArea);
    }
    
    get endArea(): CampaignMapTransitionAreas.Entry | undefined {
      const collection = <CampaignMapTransitionAreas.Entry[]>this.collectionCache.getCollection(CampaignMapTransitionAreas.KEY, CampaignMapTransitionAreas.Entry);
      return collection.find(entry => entry.index === this._endArea);
    }
  }
}

export default CampaignMapTransitionLinks;
