
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitVariants } from "./UnitVariants";
import { Factions } from "./Factions";
import { UniformTypeEnums } from "./UniformTypeEnums";

export namespace UnitVariantsColours {
  export const KEY = new CollectionKey("unit_variants_colours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitVariant: string;
    readonly _faction: string;
    readonly primaryColourR: number;
    readonly primaryColourG: number;
    readonly primaryColourB: number;
    readonly secondaryColourR: number;
    readonly secondaryColourG: number;
    readonly secondaryColourB: number;
    readonly tertiaryColourR: number;
    readonly tertiaryColourG: number;
    readonly tertiaryColourB: number;
    readonly _soldierType: string;
    readonly key: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitVariant = values["unit_variant"];
      this._faction = values["faction"];
      this.primaryColourR = values["primary_colour_r"];
      this.primaryColourG = values["primary_colour_g"];
      this.primaryColourB = values["primary_colour_b"];
      this.secondaryColourR = values["secondary_colour_r"];
      this.secondaryColourG = values["secondary_colour_g"];
      this.secondaryColourB = values["secondary_colour_b"];
      this.tertiaryColourR = values["tertiary_colour_r"];
      this.tertiaryColourG = values["tertiary_colour_g"];
      this.tertiaryColourB = values["tertiary_colour_b"];
      this._soldierType = values["soldier_type"];
      this.key = values["key"];
    }
    
    get unitVariant(): UnitVariants.Entry | undefined {
      const collection = <UnitVariants.Entry[]>this.collectionCache.getCollection(UnitVariants.KEY, UnitVariants.Entry);
      return collection.find(entry => entry.name === this._unitVariant);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get soldierType(): UniformTypeEnums.Entry | undefined {
      const collection = <UniformTypeEnums.Entry[]>this.collectionCache.getCollection(UniformTypeEnums.KEY, UniformTypeEnums.Entry);
      return collection.find(entry => entry.key === this._soldierType);
    }
  }
}

export default UnitVariantsColours;
