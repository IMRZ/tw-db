
import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";

export namespace SeaClimateDetails {
  export const KEY = new CollectionKey("sea_climate_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly seaDeepColour: string;
    readonly seaShallowColour: string;
    readonly sunColour: string;
    readonly skyColour: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.seaDeepColour = values["sea_deep_colour"];
      this.seaShallowColour = values["sea_shallow_colour"];
      this.sunColour = values["sun_colour"];
      this.skyColour = values["sky_colour"];
    }
    
    get key(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._key);
    }
  }
}

export default SeaClimateDetails;
