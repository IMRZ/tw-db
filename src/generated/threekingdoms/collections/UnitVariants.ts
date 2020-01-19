
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { ComposedEntities } from "./ComposedEntities";
import { Variants } from "./Variants";
import { ColourLutTypes } from "./ColourLutTypes";

export namespace UnitVariants {
  export const KEY = new CollectionKey("unit_variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly _faction: string;
    readonly _composedEntity: string;
    readonly _manVariant: string;
    readonly unitCard: string;
    readonly _mountVariant: string;
    readonly _animalVariant: string;
    readonly _colourLutType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this._faction = values["faction"];
      this._composedEntity = values["composed_entity"];
      this._manVariant = values["man_variant"];
      this.unitCard = values["unit_card"];
      this._mountVariant = values["mount_variant"];
      this._animalVariant = values["animal_variant"];
      this._colourLutType = values["colour_lut_type"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get composedEntity(): ComposedEntities.Entry | undefined {
      const collection = <ComposedEntities.Entry[]>this.collectionCache.getCollection(ComposedEntities.KEY, ComposedEntities.Entry);
      return collection.find(entry => entry.key === this._composedEntity);
    }
    
    get manVariant(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._manVariant);
    }
    
    get mountVariant(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._mountVariant);
    }
    
    get animalVariant(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._animalVariant);
    }
    
    get colourLutType(): ColourLutTypes.Entry | undefined {
      const collection = <ColourLutTypes.Entry[]>this.collectionCache.getCollection(ColourLutTypes.KEY, ColourLutTypes.Entry);
      return collection.find(entry => entry.type === this._colourLutType);
    }
  }
}

export default UnitVariants;
