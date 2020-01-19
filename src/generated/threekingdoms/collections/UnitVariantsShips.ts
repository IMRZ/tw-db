
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { NavalUnits } from "./NavalUnits";

export namespace UnitVariantsShips {
  export const KEY = new CollectionKey("unit_variants_ships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly _faction: string;
    readonly _unit: string;
    readonly variant: string;
    readonly unitCard: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this._faction = values["faction"];
      this._unit = values["unit"];
      this.variant = values["variant"];
      this.unitCard = values["unit_card"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get unit(): NavalUnits.Entry | undefined {
      const collection = <NavalUnits.Entry[]>this.collectionCache.getCollection(NavalUnits.KEY, NavalUnits.Entry);
      return collection.find(entry => entry.key === this._unit);
    }
  }
}

export default UnitVariantsShips;
