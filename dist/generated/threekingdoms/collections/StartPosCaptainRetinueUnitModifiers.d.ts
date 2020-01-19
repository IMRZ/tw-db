import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosNonCommandingCaptains } from "./StartPosNonCommandingCaptains";
export declare namespace StartPosCaptainRetinueUnitModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _retinueCaptain: string;
        readonly _forceCommander: number;
        readonly retinueSlotIndex: number;
        readonly unitStartingHealthPercentage: number;
        readonly unitStartingExperienceLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        get retinueCaptain(): StartPosNonCommandingCaptains.Entry | undefined;
        get forceCommander(): StartPosNonCommandingCaptains.Entry | undefined;
    }
}
export default StartPosCaptainRetinueUnitModifiers;
