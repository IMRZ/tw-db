
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Videos } from "./Videos";

export namespace FrontendFactions {
  export const KEY = new CollectionKey("frontend_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly localisedMechanics: string;
    readonly localisedPlaystyle: string;
    readonly _video: string;
    readonly localisedInfo: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this.localisedMechanics = values["localised_mechanics"];
      this.localisedPlaystyle = values["localised_playstyle"];
      this._video = values["video"];
      this.localisedInfo = values["localised_info"];
      this.sortOrder = values["sort_order"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get video(): Videos.Entry | undefined {
      const collection = <Videos.Entry[]>this.collectionCache.getCollection(Videos.KEY, Videos.Entry);
      return collection.find(entry => entry.videoName === this._video);
    }
  }
}

export default FrontendFactions;
