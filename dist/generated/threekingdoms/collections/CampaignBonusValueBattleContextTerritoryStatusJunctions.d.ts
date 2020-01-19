import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { CampaignBonusValueBattleContextTerritoryStatus } from "./CampaignBonusValueBattleContextTerritoryStatus";
export declare namespace CampaignBonusValueBattleContextTerritoryStatusJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleContextKey: string;
        readonly _territoryStatusKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleContextKey(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        get territoryStatusKey(): CampaignBonusValueBattleContextTerritoryStatus.Entry | undefined;
    }
}
export default CampaignBonusValueBattleContextTerritoryStatusJunctions;
