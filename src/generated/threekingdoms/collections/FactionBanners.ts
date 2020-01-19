
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";

export namespace FactionBanners {
  export const KEY = new CollectionKey("faction_banners");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly symbol: string;
    readonly primaryRed: number;
    readonly primaryGreen: number;
    readonly primaryBlue: number;
    readonly secondaryRed: number;
    readonly secondaryGreen: number;
    readonly secondaryBlue: number;
    readonly tertiaryRed: number;
    readonly tertiaryGreen: number;
    readonly tertiaryBlue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.symbol = values["symbol"];
      this.primaryRed = values["primary_red"];
      this.primaryGreen = values["primary_green"];
      this.primaryBlue = values["primary_blue"];
      this.secondaryRed = values["secondary_red"];
      this.secondaryGreen = values["secondary_green"];
      this.secondaryBlue = values["secondary_blue"];
      this.tertiaryRed = values["tertiary_red"];
      this.tertiaryGreen = values["tertiary_green"];
      this.tertiaryBlue = values["tertiary_blue"];
    }
    
    get key(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._key);
    }
  }
}

export default FactionBanners;
