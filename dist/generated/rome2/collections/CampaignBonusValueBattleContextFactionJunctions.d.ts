import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { Factions } from "./Factions";
export declare namespace CampaignBonusValueBattleContextFactionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleContextKey: string;
        readonly _factionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly battleContextKey: CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        readonly factionKey: Factions.Entry | undefined;
    }
}
export default CampaignBonusValueBattleContextFactionJunctions;
