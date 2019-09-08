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
        readonly battleContextKey: CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        readonly territoryStatusKey: CampaignBonusValueBattleContextTerritoryStatus.Entry | undefined;
    }
}
export default CampaignBonusValueBattleContextTerritoryStatusJunctions;
