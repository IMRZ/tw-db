import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { FamilyRelationshipTypes } from "./FamilyRelationshipTypes";
export declare namespace StartPosFamilyRelationships {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: number;
        readonly _relatedTo: number;
        readonly _relationship: string;
        readonly bastard: boolean;
        readonly adopted: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly character: StartPosCharacters.Entry | undefined;
        readonly relatedTo: StartPosCharacters.Entry | undefined;
        readonly relationship: FamilyRelationshipTypes.Entry | undefined;
    }
}
export default StartPosFamilyRelationships;
