import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
export declare namespace EffectsAdditionalTooltipDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly localisedDescription: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
    }
}
export default EffectsAdditionalTooltipDetails;
