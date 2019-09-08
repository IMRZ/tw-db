import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { CampaignGroundTypes } from "./CampaignGroundTypes";
export declare namespace CampaignBonusValueBattleContextGroundTypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleContextKey: string;
        readonly _groundTypeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleContextKey: CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        readonly groundTypeKey: CampaignGroundTypes.Entry | undefined;
    }
}
export default CampaignBonusValueBattleContextGroundTypeJunctions;
