import { CollectionCache, CollectionKey } from "../../../common";
import { GroundTypes } from "./GroundTypes";
import { ModifiableUnitStats } from "./ModifiableUnitStats";
import { GroundTypeStatEffectGroups } from "./GroundTypeStatEffectGroups";
export declare namespace GroundTypeToStatEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _groundType: string;
        readonly _affectedStat: string;
        readonly multiplier: number;
        readonly _affectedGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly groundType: GroundTypes.Entry | undefined;
        readonly affectedStat: ModifiableUnitStats.Entry | undefined;
        readonly affectedGroup: GroundTypeStatEffectGroups.Entry | undefined;
    }
}
export default GroundTypeToStatEffects;
