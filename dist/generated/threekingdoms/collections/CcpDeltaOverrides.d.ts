import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace CcpDeltaOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _attacker: string;
        readonly _defender: string;
        readonly isRangedInMeleeResult: boolean;
        readonly cpDeltaOverrideVsDefender: number;
        readonly cpDeltaOverrideVsAttacker: number;
        readonly overridesApplyToAutoresolverOnly: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get attacker(): MainUnits.Entry | undefined;
        get defender(): MainUnits.Entry | undefined;
    }
}
export default CcpDeltaOverrides;
