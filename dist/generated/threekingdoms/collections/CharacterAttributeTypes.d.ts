import { CollectionCache, CollectionKey } from "../../../common";
import { UiColours } from "./UiColours";
export declare namespace CharacterAttributeTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        readonly localizedName: string;
        readonly localizedDescription: string;
        readonly _colour: string;
        readonly icon: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        get colour(): UiColours.Entry | undefined;
    }
}
export default CharacterAttributeTypes;
