
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldCivilianTypes } from "./BattlefieldCivilianTypes";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { BattlefieldCivilianGroups } from "./BattlefieldCivilianGroups";

export namespace BattlefieldCivilianTypeCivilianGroupJunctions {
  export const KEY = new CollectionKey("battlefield_civilian_type_civilian_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _civilianType: string;
    readonly _cultureLookup: string;
    readonly _subcultureLookup: string;
    readonly _factionLookup: string;
    readonly _civilianGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._civilianType = values["civilian_type"];
      this._cultureLookup = values["culture_lookup"];
      this._subcultureLookup = values["subculture_lookup"];
      this._factionLookup = values["faction_lookup"];
      this._civilianGroup = values["civilian_group"];
    }
    
    get civilianType(): BattlefieldCivilianTypes.Entry | undefined {
      const collection = <BattlefieldCivilianTypes.Entry[]>this.collectionCache.getCollection(BattlefieldCivilianTypes.KEY, BattlefieldCivilianTypes.Entry);
      return collection.find(entry => entry.key === this._civilianType);
    }
    
    get cultureLookup(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._cultureLookup);
    }
    
    get subcultureLookup(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureLookup);
    }
    
    get factionLookup(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionLookup);
    }
    
    get civilianGroup(): BattlefieldCivilianGroups.Entry | undefined {
      const collection = <BattlefieldCivilianGroups.Entry[]>this.collectionCache.getCollection(BattlefieldCivilianGroups.KEY, BattlefieldCivilianGroups.Entry);
      return collection.find(entry => entry.key === this._civilianGroup);
    }
  }
}

export default BattlefieldCivilianTypeCivilianGroupJunctions;
