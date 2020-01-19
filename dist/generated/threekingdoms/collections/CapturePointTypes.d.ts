import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CapturePointTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly onscreenDescription: string;
        readonly iconName: string;
        readonly visibilitySpottingRange: number;
        readonly restoreToNeutral: boolean;
        readonly showInUi: boolean;
        readonly showInGameWorld: boolean;
        readonly benefitOriginalOwnerOnly: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CapturePointTypes;
