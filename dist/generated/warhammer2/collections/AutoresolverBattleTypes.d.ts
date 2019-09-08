import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
import { AutoresolverOptionalBoolEnums } from "./AutoresolverOptionalBoolEnums";
export declare namespace AutoresolverBattleTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _battleType: string;
        readonly _isNightBattle: string;
        readonly autoresolverStance: string;
        readonly _isEncampment: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleType: CampaignBattleTypeEnums.Entry | undefined;
        readonly isNightBattle: AutoresolverOptionalBoolEnums.Entry | undefined;
        readonly isEncampment: AutoresolverOptionalBoolEnums.Entry | undefined;
    }
}
export default AutoresolverBattleTypes;
