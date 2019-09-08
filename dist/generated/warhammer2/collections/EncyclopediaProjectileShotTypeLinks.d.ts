import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectileShotTypeEnum } from "./ProjectileShotTypeEnum";
import { EncyclopediaPages } from "./EncyclopediaPages";
import { EncyclopediaBlocks } from "./EncyclopediaBlocks";
export declare namespace EncyclopediaProjectileShotTypeLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _shotType: string;
        readonly _manualPage: string;
        readonly _manualBlock: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly shotType: ProjectileShotTypeEnum.Entry | undefined;
        readonly manualPage: EncyclopediaPages.Entry | undefined;
        readonly manualBlock: EncyclopediaBlocks.Entry | undefined;
    }
}
export default EncyclopediaProjectileShotTypeLinks;
