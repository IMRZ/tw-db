import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsBattlefieldDeployables } from "./CampaignBonusValueIdsBattlefieldDeployables";
import { Deployables } from "./Deployables";
export declare namespace EffectBonusValueBattlefieldDeployablesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _battlefieldDeployable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsBattlefieldDeployables.Entry | undefined;
        get battlefieldDeployable(): Deployables.Entry | undefined;
    }
}
export default EffectBonusValueBattlefieldDeployablesJunctions;
