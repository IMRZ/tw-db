
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace MilitaryForceLegacyEmblems {
  export const KEY = new CollectionKey("military_force_legacy_emblems");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly isArmy: boolean;
    readonly _factionKey: string;
    readonly _culureKey: string;
    readonly _subcultureKey: string;
    readonly icon: string;
    readonly bannerDecorator: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.isArmy = !!values["is_army"];
      this._factionKey = values["faction_key"];
      this._culureKey = values["culure_key"];
      this._subcultureKey = values["subculture_key"];
      this.icon = values["icon"];
      this.bannerDecorator = values["banner_decorator"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get culureKey(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culureKey);
    }
    
    get subcultureKey(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureKey);
    }
  }
}

export default MilitaryForceLegacyEmblems;
