
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Campaigns } from "./Campaigns";

export namespace MilitaryForceLegacyNames {
  export const KEY = new CollectionKey("military_force_legacy_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _subculture: string;
    readonly localisedName: string;
    readonly forArmy: boolean;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._subculture = values["subculture"];
      this.localisedName = values["localised_name"];
      this.forArmy = !!values["for_army"];
      this._campaign = values["campaign"];
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default MilitaryForceLegacyNames;
