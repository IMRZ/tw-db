import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace CampaignTreeTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly treeType: string;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
    }
}
export default CampaignTreeTypes;
