import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
import { Variants } from "./Variants";
import { AudioVoiceoverCultures } from "./AudioVoiceoverCultures";
export declare namespace CampaignMounts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly model: string;
        readonly _animationSet: string;
        readonly _variant: string;
        readonly scale: number;
        readonly _actor: string;
        readonly ignoreRiderVariantScale: boolean;
        readonly vfxFilter: number;
        readonly bannerRelativeToMount: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly animationSet: CampaignAnimSetEnums.Entry | undefined;
        readonly variant: Variants.Entry | undefined;
        readonly actor: AudioVoiceoverCultures.Entry | undefined;
    }
}
export default CampaignMounts;
