import { CollectionCache, CollectionKey } from "../../../common";
import { GroundTypes } from "./GroundTypes";
import { UiUnitStats } from "./UiUnitStats";
export declare namespace GroundTypeToStatEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _groundType: string;
        readonly _affectedStat: string;
        readonly multiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly groundType: GroundTypes.Entry | undefined;
        readonly affectedStat: UiUnitStats.Entry | undefined;
    }
}
export default GroundTypeToStatEffects;
