import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { FrontendCharacters } from "./FrontendCharacters";
export declare namespace FrontendFactionLeaderUniqueCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedDescription: string;
        readonly sortOrder: string;
        readonly _frontendFactionLeader: string;
        readonly _frontendCharacter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get frontendFactionLeader(): FrontendFactionLeaders.Entry | undefined;
        get frontendCharacter(): FrontendCharacters.Entry | undefined;
    }
}
export default FrontendFactionLeaderUniqueCharacters;
