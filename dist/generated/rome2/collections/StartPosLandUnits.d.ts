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
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitType: MainUnits.Entry | undefined;
        readonly general: StartPosCharacters.Entry | undefined;
    }
}
export default StartPosLandUnits;
