import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { SotekTooltipTypes } from "./SotekTooltipTypes";
export declare namespace ProphecyOfSotekStages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly stage: string;
        readonly _effectBundle: string;
        readonly localisedName: string;
        readonly localisedDescription: string;
        readonly order: number;
        readonly _tooltipType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effectBundle: EffectBundles.Entry | undefined;
        readonly tooltipType: SotekTooltipTypes.Entry | undefined;
    }
}
export default ProphecyOfSotekStages;
