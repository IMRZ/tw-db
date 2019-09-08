
import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectileShotTypeEnum } from "./ProjectileShotTypeEnum";
import { EncyclopediaPages } from "./EncyclopediaPages";
import { EncyclopediaBlocks } from "./EncyclopediaBlocks";

export namespace EncyclopediaProjectileShotTypeLinks {
  export const KEY = new CollectionKey("encyclopedia_projectile_shot_type_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _shotType: string;
    readonly _manualPage: string;
    readonly _manualBlock: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._shotType = values["shot_type"];
      this._manualPage = values["manual_page"];
      this._manualBlock = values["manual_block"];
    }
    
    get shotType(): ProjectileShotTypeEnum.Entry | undefined {
      const collection = <ProjectileShotTypeEnum.Entry[]>this.collectionCache.getCollection(ProjectileShotTypeEnum.KEY, ProjectileShotTypeEnum.Entry);
      return collection.find(entry => entry.key === this._shotType);
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

export default EncyclopediaProjectileShotTypeLinks;
