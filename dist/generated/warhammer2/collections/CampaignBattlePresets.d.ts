import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
import { CampaignMapPlayableAreas } from "./CampaignMapPlayableAreas";
import { DestructionZoneMaskTypes } from "./DestructionZoneMaskTypes";
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
        readonly screenshotPath: string;
        readonly _creepOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleType: CampaignBattleTypeEnums.Entry | undefined;
        readonly campaignMap: CampaignMapPlayableAreas.Entry | undefined;
        readonly creepOverride: DestructionZoneMaskTypes.Entry | undefined;
    }
}
export default CampaignBattlePresets;
