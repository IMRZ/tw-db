import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
import { CampaignMapPlayableAreas } from "./CampaignMapPlayableAreas";
export declare namespace CampaignBattlePresets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly description: string;
        readonly coordX: number;
        readonly coordY: number;
        readonly tileUpgrade: string;
        readonly _battleType: string;
        readonly isUniqueSettlement: boolean;
        readonly _campaignMap: number;
        constructor(collectionCache: CollectionCache, values: any);
        get battleType(): CampaignBattleTypeEnums.Entry | undefined;
        get campaignMap(): CampaignMapPlayableAreas.Entry | undefined;
    }
}
export default CampaignBattlePresets;
