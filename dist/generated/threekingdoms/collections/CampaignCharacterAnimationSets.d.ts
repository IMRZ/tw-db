import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
import { CampaignCharacterAnimationSetOverrides } from "./CampaignCharacterAnimationSetOverrides";
import { ParticleEffects } from "./ParticleEffects";
export declare namespace CampaignCharacterAnimationSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _defaultAnimSet: string;
        readonly _animSetOverrides: string;
        readonly _dismemberedLimbBloodTrailVfx: string;
        constructor(collectionCache: CollectionCache, values: any);
        get defaultAnimSet(): CampaignAnimSetEnums.Entry | undefined;
        get animSetOverrides(): CampaignCharacterAnimationSetOverrides.Entry | undefined;
        get dismemberedLimbBloodTrailVfx(): ParticleEffects.Entry | undefined;
    }
}
export default CampaignCharacterAnimationSets;
