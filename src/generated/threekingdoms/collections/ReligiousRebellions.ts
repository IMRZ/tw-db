
import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";

export namespace ReligiousRebellions {
  export const KEY = new CollectionKey("religious_rebellions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _religion: string;
    readonly percentageForRebellion: number;
    readonly _rebelShadowedFaction: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._religion = values["religion"];
      this.percentageForRebellion = values["percentage_for_rebellion"];
      this._rebelShadowedFaction = values["rebel_shadowed_faction"];
      this._campaign = values["campaign"];
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
    
    get rebelShadowedFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._rebelShadowedFaction);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default ReligiousRebellions;
