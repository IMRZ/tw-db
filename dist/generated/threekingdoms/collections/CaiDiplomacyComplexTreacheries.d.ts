import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiDiplomacyComplexTreacheries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _firstEvent: string;
        readonly _secondEvent: string;
        readonly maxTurnDifference: number;
        readonly value: number;
        readonly constantValue: number;
        readonly _displayString: string;
        readonly _longDescriptionString: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get firstEvent(): CaiDiplomacyEvents.Entry | undefined;
        get secondEvent(): CaiDiplomacyEvents.Entry | undefined;
        get displayString(): DiplomacyStrings.Entry | undefined;
        get longDescriptionString(): DiplomacyStrings.Entry | undefined;
    }
}
export default CaiDiplomacyComplexTreacheries;
