import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { StartPosFamilyRelationshipTypes } from "./StartPosFamilyRelationshipTypes";
export declare namespace StartPosFamilyRelationships {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: number;
        readonly _relatedTo: number;
        readonly _relationship: string;
        readonly unique: boolean;
        readonly bastard: boolean;
        readonly adopted: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get character(): StartPosCharacters.Entry | undefined;
        get relatedTo(): StartPosCharacters.Entry | undefined;
        get relationship(): StartPosFamilyRelationshipTypes.Entry | undefined;
    }
}
export default StartPosFamilyRelationships;
