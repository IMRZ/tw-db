import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
export declare namespace CampaignBonusValueBattleContextBattleTypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleContextKey: string;
        readonly _battleTypeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleContextKey: CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        readonly battleTypeKey: CampaignBattleTypeEnums.Entry | undefined;
    }
}
export default CampaignBonusValueBattleContextBattleTypeJunctions;
