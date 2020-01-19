import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
import { Cultures } from "./Cultures";
export declare namespace CampaignBonusValueBattleContextCultureJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleContextKey: string;
        readonly _cultureKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleContextKey(): CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
        get cultureKey(): Cultures.Entry | undefined;
    }
}
export default CampaignBonusValueBattleContextCultureJunctions;
