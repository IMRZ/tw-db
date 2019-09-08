
import { CollectionCache, CollectionKey } from "../../../common";
import { AncillariesCategories } from "./AncillariesCategories";
import { Factions } from "./Factions";

export namespace AncillariesCategoriesFactionJunctions {
  export const KEY = new CollectionKey("ancillaries_categories_faction_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ancillaryCategory: string;
    readonly _faction: string;
    readonly allowedPerCharacter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ancillaryCategory = values["ancillary_category"];
      this._faction = values["faction"];
      this.allowedPerCharacter = values["allowed_per_character"];
    }
    
    get ancillaryCategory(): AncillariesCategories.Entry | undefined {
      const collection = <AncillariesCategories.Entry[]>this.collectionCache.getCollection(AncillariesCategories.KEY, AncillariesCategories.Entry);
      return collection.find(entry => entry.category === this._ancillaryCategory);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default AncillariesCategoriesFactionJunctions;
