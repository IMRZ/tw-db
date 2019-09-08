
import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";
import { Campaigns } from "./Campaigns";

export namespace PrologueChapters {
  export const KEY = new CollectionKey("prologue_chapters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly number: number;
    readonly title: string;
    readonly description: string;
    readonly isBattle: boolean;
    readonly _battleKey: string;
    readonly _campaignKey: string;
    readonly subtitle: string;
    readonly banner: string;
    readonly campaignFactionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.number = values["number"];
      this.title = values["title"];
      this.description = values["description"];
      this.isBattle = !!values["is_battle"];
      this._battleKey = values["battle_key"];
      this._campaignKey = values["campaign_key"];
      this.subtitle = values["subtitle"];
      this.banner = values["banner"];
      this.campaignFactionKey = values["campaign_faction_key"];
    }
    
    get battleKey(): Battles.Entry | undefined {
      const collection = <Battles.Entry[]>this.collectionCache.getCollection(Battles.KEY, Battles.Entry);
      return collection.find(entry => entry.key === this._battleKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
  }
}

export default PrologueChapters;
