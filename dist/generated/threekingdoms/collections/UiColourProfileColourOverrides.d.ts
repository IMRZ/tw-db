import { CollectionCache, CollectionKey } from "../../../common";
import { UiColourProfiles } from "./UiColourProfiles";
import { UiColours } from "./UiColours";
export declare namespace UiColourProfileColourOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _colourProfile: string;
        readonly _colour: string;
        readonly colourR: number;
        readonly colourG: number;
        readonly colourB: number;
        constructor(collectionCache: CollectionCache, values: any);
        get colourProfile(): UiColourProfiles.Entry | undefined;
        get colour(): UiColours.Entry | undefined;
    }
}
export default UiColourProfileColourOverrides;
