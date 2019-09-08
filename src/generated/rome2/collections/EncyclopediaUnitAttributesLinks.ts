
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAttributes } from "./UnitAttributes";
import { EncyclopediaPages } from "./EncyclopediaPages";
import { EncyclopediaBlocks } from "./EncyclopediaBlocks";

export namespace EncyclopediaUnitAttributesLinks {
  export const KEY = new CollectionKey("encyclopedia_unit_attributes_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitAttribute: string;
    readonly _manualPage: string;
    readonly _manualBlock: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitAttribute = values["unit_attribute"];
      this._manualPage = values["manual_page"];
      this._manualBlock = values["manual_block"];
    }
    
    get unitAttribute(): UnitAttributes.Entry | undefined {
      const collection = <UnitAttributes.Entry[]>this.collectionCache.getCollection(UnitAttributes.KEY, UnitAttributes.Entry);
      return collection.find(entry => entry.key === this._unitAttribute);
    }
    
    get manualPage(): EncyclopediaPages.Entry | undefined {
      const collection = <EncyclopediaPages.Entry[]>this.collectionCache.getCollection(EncyclopediaPages.KEY, EncyclopediaPages.Entry);
      return collection.find(entry => entry.pageKey === this._manualPage);
    }
    
    get manualBlock(): EncyclopediaBlocks.Entry | undefined {
      const collection = <EncyclopediaBlocks.Entry[]>this.collectionCache.getCollection(EncyclopediaBlocks.KEY, EncyclopediaBlocks.Entry);
      return collection.find(entry => entry.blockKey === this._manualBlock);
    }
  }
}

export default EncyclopediaUnitAttributesLinks;
