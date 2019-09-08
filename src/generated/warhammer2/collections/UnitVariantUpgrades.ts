
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Ancillaries } from "./Ancillaries";
import { Variants } from "./Variants";

export namespace UnitVariantUpgrades {
  export const KEY = new CollectionKey("unit_variant_upgrades");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _mainUnitKey: string;
    readonly _ancillaryPrimary: string;
    readonly _ancillarySecondary: string;
    readonly _variantName: string;
    readonly cost: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._mainUnitKey = values["main_unit_key"];
      this._ancillaryPrimary = values["ancillary_primary"];
      this._ancillarySecondary = values["ancillary_secondary"];
      this._variantName = values["variant_name"];
      this.cost = values["cost"];
    }
    
    get mainUnitKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._mainUnitKey);
    }
    
    get ancillaryPrimary(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillaryPrimary);
    }
    
    get ancillarySecondary(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillarySecondary);
    }
    
    get variantName(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._variantName);
    }
  }
}

export default UnitVariantUpgrades;
