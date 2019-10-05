import { CollectionCache, CollectionKey } from "../../../common";
import { MilitaryForceTypes } from "./MilitaryForceTypes";
export declare namespace MilitaryForceTypeConversions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _from: string;
        readonly _to: string;
        readonly automatic: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly from: MilitaryForceTypes.Entry | undefined;
        readonly to: MilitaryForceTypes.Entry | undefined;
    }
}
export default MilitaryForceTypeConversions;
