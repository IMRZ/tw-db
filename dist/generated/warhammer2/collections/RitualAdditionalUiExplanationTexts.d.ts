import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
export declare namespace RitualAdditionalUiExplanationTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ritualKey: string;
        readonly onscreenText: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ritualKey(): Rituals.Entry | undefined;
    }
}
export default RitualAdditionalUiExplanationTexts;
