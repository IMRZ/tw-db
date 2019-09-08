import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";
export declare namespace CampaignMapPlayableAreas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mapname: string;
        readonly index: number;
        readonly minx: number;
        readonly maxx: number;
        readonly miny: number;
        readonly maxy: number;
        readonly seaTrade: boolean;
        readonly onscreenName: string;
        readonly mapFile: string;
        readonly overlayFile: string;
        readonly radarFile: string;
        readonly meaningfulId: string;
        readonly previewWidth: number;
        readonly previewHeight: number;
        readonly previewBorder: number;
        readonly minimapLookupFile: string;
        readonly isAvailableInCustomBattle: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly mapname: CampaignMaps.Entry | undefined;
    }
}
export default CampaignMapPlayableAreas;
