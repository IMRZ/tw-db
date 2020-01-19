import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace CampaignMaps {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly mapname: string;
        readonly minx: number;
        readonly miny: number;
        readonly maxx: number;
        readonly maxy: number;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
    }
}
export default CampaignMaps;
