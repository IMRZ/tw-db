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
        get groundType(): GroundTypes.Entry | undefined;
        get affectedStat(): ModifiableUnitStats.Entry | undefined;
        get affectedGroup(): GroundTypeStatEffectGroups.Entry | undefined;
    }
}
export default GroundTypeToStatEffects;
