import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";
import { CampaignMapMasks } from "./CampaignMapMasks";
import { TexcExpansions } from "./TexcExpansions";
import { CampaignBattlePaths } from "./CampaignBattlePaths";
export declare namespace Campaigns {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly campaignName: string;
        readonly onscreenName: string;
        readonly description: string;
        readonly _mapName: string;
        readonly exportable: boolean;
        readonly bulletList: string;
        readonly displayLocation: string;
        readonly isTutorial: boolean;
        readonly _mask: string;
        readonly availableForMp: boolean;
        readonly mpSortOrder: number;
        readonly _gameExpansionKey: string;
        readonly scriptPath: string;
        readonly _battlePath: string;
        readonly terrainLocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly mapName: CampaignMaps.Entry | undefined;
        readonly mask: CampaignMapMasks.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
        readonly battlePath: CampaignBattlePaths.Entry | undefined;
    }
}
export default Campaigns;
