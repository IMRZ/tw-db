import { CollectionCache, CollectionKey } from "../../../common";
import { MapPinTypes } from "./MapPinTypes";
import { MapPinIconTypes } from "./MapPinIconTypes";
export declare namespace MapPins {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _pinType: string;
        readonly localisedDescription: string;
        readonly _pinIconType: string;
        readonly localisedTitle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get pinType(): MapPinTypes.Entry | undefined;
        get pinIconType(): MapPinIconTypes.Entry | undefined;
    }
}
export default MapPins;
