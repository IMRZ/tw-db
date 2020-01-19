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
        get battleContextKey(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        get groundTypeKey(): CampaignGroundTypes.Entry | undefined;
    }
}
export default CampaignBonusValueBattleContextGroundTypeJunctions;
