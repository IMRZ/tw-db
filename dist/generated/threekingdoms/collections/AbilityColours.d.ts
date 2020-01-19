import { CollectionCache, CollectionKey } from "../../../common";
import { UiColours } from "./UiColours";
export declare namespace AbilityColours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _backgroundColour: string;
        readonly _foregroundColour: string;
        readonly audioElementSwitchName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get backgroundColour(): UiColours.Entry | undefined;
        get foregroundColour(): UiColours.Entry | undefined;
    }
}
export default AbilityColours;
