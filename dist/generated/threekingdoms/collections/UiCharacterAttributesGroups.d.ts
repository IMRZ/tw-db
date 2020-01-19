import { CollectionCache, CollectionKey } from "../../../common";
import { UiColours } from "./UiColours";
export declare namespace UiCharacterAttributesGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly groupId: string;
        readonly _colour: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get colour(): UiColours.Entry | undefined;
    }
}
export default UiCharacterAttributesGroups;
