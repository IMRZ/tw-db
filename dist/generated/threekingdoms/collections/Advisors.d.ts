import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
export declare namespace Advisors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly advisorName: string;
        readonly _optionalCharacterTemplate: string;
        constructor(collectionCache: CollectionCache, values: any);
        get optionalCharacterTemplate(): CharacterGenerationTemplates.Entry | undefined;
    }
}
export default Advisors;
