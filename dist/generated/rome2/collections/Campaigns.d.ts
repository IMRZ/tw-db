import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";
export declare namespace Campaigns {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly campaignName: string;
        readonly onscreenName: string;
        readonly description: string;
        readonly _mapName: string;
        readonly dataDirectory: string;
        readonly isGrand: boolean;
        readonly exportable: boolean;
        readonly campaignOrder: number;
        readonly bulletList: string;
        readonly displayLocation: string;
        readonly isTutorial: boolean;
        readonly bannerImage: string;
        readonly bannerIcon: string;
        readonly availableForMp: boolean;
        readonly mpSortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly mapName: CampaignMaps.Entry | undefined;
    }
}
export default Campaigns;
