import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { StartPosCharacters } from "./StartPosCharacters";
export declare namespace StartPosLandUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _unitType: string;
        readonly _general: number;
        readonly soldiers: number;
        readonly unique: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get unitType(): MainUnits.Entry | undefined;
        get general(): StartPosCharacters.Entry | undefined;
    }
}
export default StartPosLandUnits;
