import { CollectionCache, CollectionKey } from "../../../common";
import { MilitaryForceTypes } from "./MilitaryForceTypes";
import { MilitaryForceTypeFeatures } from "./MilitaryForceTypeFeatures";
export declare namespace MilitaryForceTypeFeatureJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _forceType: string;
        readonly _feature: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly forceType: MilitaryForceTypes.Entry | undefined;
        readonly feature: MilitaryForceTypeFeatures.Entry | undefined;
    }
}
export default MilitaryForceTypeFeatureJunctions;
