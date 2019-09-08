
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilities } from "./UnitAbilities";
import { EncyclopediaPages } from "./EncyclopediaPages";
import { EncyclopediaBlocks } from "./EncyclopediaBlocks";

export namespace EncyclopediaUnitAbilitiesLinks {
  export const KEY = new CollectionKey("encyclopedia_unit_abilities_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitAbility: string;
    readonly _manualPage: string;
    readonly _manualBlock: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitAbility = values["unit_ability"];
      this._manualPage = values["manual_page"];
      this._manualBlock = values["manual_block"];
    }
    
    get unitAbility(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._unitAbility);
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

export default EncyclopediaUnitAbilitiesLinks;
