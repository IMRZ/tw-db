import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticEvents } from "./CaiPersonalityDiplomaticEvents";
export declare namespace CaiDiplomacyComplexTreacheries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _firstEvent: string;
        readonly _secondEvent: string;
        readonly maxTurnDifference: number;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get firstEvent(): CaiPersonalityDiplomaticEvents.Entry | undefined;
        get secondEvent(): CaiPersonalityDiplomaticEvents.Entry | undefined;
    }
}
export default CaiDiplomacyComplexTreacheries;
