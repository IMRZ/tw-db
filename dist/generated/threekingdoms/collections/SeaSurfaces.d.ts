import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SeaSurfaces {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly seaWindSpeed: number;
        readonly seaPhillipsConstant: number;
        readonly seaChoppiness: number;
        readonly swellWindSpeed: number;
        readonly swellPhillipsConstant: number;
        readonly foamEnabled: boolean;
        readonly foamDecayRate: number;
        readonly foamFadeInTime: number;
        readonly foamCutOffValue: number;
        readonly frothValue: number;
        readonly frothDistortionSpeed: number;
        readonly frothDistortionAmount: number;
        readonly sprayCutOffValue: number;
        readonly spraySpeed: number;
        readonly sprayDuration: number;
        readonly seaShininess: number;
        readonly seaDecay: number;
        readonly reflectionFlatteningFactor: number;
        readonly waveTroughYValue: number;
        readonly detailNormalUvScale1: number;
        readonly detailNormalUvSpeed1: number;
        readonly detailNormalUvScale2: number;
        readonly detailNormalUvSpeed2: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SeaSurfaces;
