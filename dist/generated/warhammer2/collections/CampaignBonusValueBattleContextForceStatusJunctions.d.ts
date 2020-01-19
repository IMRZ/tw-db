import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { CampaignBonusValueBattleContextForceStatus } from "./CampaignBonusValueBattleContextForceStatus";
export declare namespace CampaignBonusValueBattleContextForceStatusJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleContextKey: string;
        readonly _forceStatusKey: string;
        readonly isYours: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get battleContextKey(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        get forceStatusKey(): CampaignBonusValueBattleContextForceStatus.Entry | undefined;
    }
}
export default CampaignBonusValueBattleContextForceStatusJunctions;
