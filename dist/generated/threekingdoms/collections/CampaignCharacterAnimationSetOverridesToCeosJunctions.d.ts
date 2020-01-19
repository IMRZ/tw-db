import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCharacterAnimationSetOverrides } from "./CampaignCharacterAnimationSetOverrides";
import { Ceos } from "./Ceos";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
export declare namespace CampaignCharacterAnimationSetOverridesToCeosJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _animationSetOverride: string;
        readonly _ceo: string;
        readonly _animSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get animationSetOverride(): CampaignCharacterAnimationSetOverrides.Entry | undefined;
        get ceo(): Ceos.Entry | undefined;
        get animSet(): CampaignAnimSetEnums.Entry | undefined;
    }
}
export default CampaignCharacterAnimationSetOverridesToCeosJunctions;
