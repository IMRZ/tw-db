
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { FrontendFactionLeaderPlaystyles } from "./FrontendFactionLeaderPlaystyles";

export namespace FrontendFactions {
  export const KEY = new CollectionKey("frontend_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly activeYearsStart: number;
    readonly activeYearsEnd: number;
    readonly sortOrder: number;
    readonly _playstyle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this.activeYearsStart = values["active_years_start"];
      this.activeYearsEnd = values["active_years_end"];
      this.sortOrder = values["sort_order"];
      this._playstyle = values["playstyle"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get playstyle(): FrontendFactionLeaderPlaystyles.Entry | undefined {
      const collection = <FrontendFactionLeaderPlaystyles.Entry[]>this.collectionCache.getCollection(FrontendFactionLeaderPlaystyles.KEY, FrontendFactionLeaderPlaystyles.Entry);
      return collection.find(entry => entry.key === this._playstyle);
    }
  }
}

export default FrontendFactions;
