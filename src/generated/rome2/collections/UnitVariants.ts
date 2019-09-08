
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { LandUnits } from "./LandUnits";
import { Variants } from "./Variants";

export namespace UnitVariants {
  export const KEY = new CollectionKey("unit_variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly _faction: string;
    readonly _unit: string;
    readonly _variant: string;
    readonly heightVariation: number;
    readonly heightScale: number;
    readonly unitCard: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this._faction = values["faction"];
      this._unit = values["unit"];
      this._variant = values["variant"];
      this.heightVariation = values["height_variation"];
      this.heightScale = values["height_scale"];
      this.unitCard = values["unit_card"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get unit(): LandUnits.Entry | undefined {
      const collection = <LandUnits.Entry[]>this.collectionCache.getCollection(LandUnits.KEY, LandUnits.Entry);
      return collection.find(entry => entry.key === this._unit);
    }
    
    get variant(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._variant);
    }
  }
}

export default UnitVariants;
