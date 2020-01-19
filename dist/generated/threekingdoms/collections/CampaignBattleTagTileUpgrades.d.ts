import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBattleTags } from "./CampaignBattleTags";
export declare namespace CampaignBattleTagTileUpgrades {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignBattleTag: string;
        readonly tileUpgradeId: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignBattleTag(): CampaignBattleTags.Entry | undefined;
    }
}
export default CampaignBattleTagTileUpgrades;
