import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitVoiceEventsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitVoiceCategoryKey: any;
        readonly _voiceTypeKey: any;
        readonly _voiceEventKey: any;
        readonly _soundEventKey: any;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitVoiceEventsJunctions;
