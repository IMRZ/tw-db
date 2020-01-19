import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
import { Variants } from "./Variants";
export declare namespace CampaignMounts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly model: string;
        readonly _animationSet: string;
        readonly _variant: string;
        readonly scale: number;
        readonly ignoreRiderVariantScale: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get animationSet(): CampaignAnimSetEnums.Entry | undefined;
        get variant(): Variants.Entry | undefined;
    }
}
export default CampaignMounts;
