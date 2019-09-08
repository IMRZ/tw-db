import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { AncillaryInfo } from "./AncillaryInfo";
export declare namespace StartPosCharacterAncillaries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _characterId: number;
        readonly _ancillary: string;
        readonly unique: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly characterId: StartPosCharacters.Entry | undefined;
        readonly ancillary: AncillaryInfo.Entry | undefined;
    }
}
export default StartPosCharacterAncillaries;
