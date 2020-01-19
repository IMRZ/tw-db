import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignBonusValueBattleContextSpecifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly nightBattlesOnly: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignBonusValueBattleContextSpecifiers;
