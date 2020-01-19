
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";

export namespace CampaignBattleScenes {
  export const KEY = new CollectionKey("campaign_battle_scenes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly colour: number;
    readonly _culture: string;
    readonly bmd: string;
    readonly environment: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.colour = values["colour"];
      this._culture = values["culture"];
      this.bmd = values["bmd"];
      this.environment = values["environment"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default CampaignBattleScenes;
