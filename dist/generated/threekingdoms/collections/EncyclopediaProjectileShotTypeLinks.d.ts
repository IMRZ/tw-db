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
        get shotType(): ProjectileShotTypeEnum.Entry | undefined;
        get manualPage(): EncyclopediaPages.Entry | undefined;
        get manualBlock(): EncyclopediaBlocks.Entry | undefined;
    }
}
export default EncyclopediaProjectileShotTypeLinks;
