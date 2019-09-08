import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
export declare namespace CampaignAutoresolverBattleSituations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _battleType: string;
        readonly nightBattle: string;
        readonly stance: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleType: CampaignBattleTypeEnums.Entry | undefined;
    }
}
export default CampaignAutoresolverBattleSituations;
