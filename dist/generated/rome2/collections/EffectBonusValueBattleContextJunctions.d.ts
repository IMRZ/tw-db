import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBattleContexts } from "./CampaignBonusValueIdsBattleContexts";
import { CampaignBonusValueBattleContextSpecifiers } from "./CampaignBonusValueBattleContextSpecifiers";
export declare namespace EffectBonusValueBattleContextJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectKey: string;
        readonly _bonusValueId: string;
        readonly _battleContextKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effectKey: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsBattleContexts.Entry | undefined;
        readonly battleContextKey: CampaignBonusValueBattleContextSpecifiers.Entry | undefined;
    }
}
export default EffectBonusValueBattleContextJunctions;
