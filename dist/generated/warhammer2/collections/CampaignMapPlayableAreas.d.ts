import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";
import { TexcExpansions } from "./TexcExpansions";
import { Videos } from "./Videos";
export declare namespace CampaignMapPlayableAreas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mapname: string;
        readonly index: number;
        readonly minx: number;
        readonly maxx: number;
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
        readonly terrainFolder: string;
        readonly maxy: number;
        readonly miny: number;
        readonly campaignKey: string;
        readonly frontendImage: string;
        readonly _gameExpansionKey: string;
        readonly onscreenDescription: string;
        readonly _video: string;
        readonly isMpcAvailable: boolean;
        readonly campaignOverlayLookup: string;
        readonly campaignOverlayMap: string;
        constructor(collectionCache: CollectionCache, values: any);
        get mapname(): CampaignMaps.Entry | undefined;
        get gameExpansionKey(): TexcExpansions.Entry | undefined;
        get video(): Videos.Entry | undefined;
    }
}
export default CampaignMapPlayableAreas;
