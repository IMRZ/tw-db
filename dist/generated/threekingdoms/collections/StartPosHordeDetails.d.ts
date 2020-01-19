import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace StartPosHordeDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _general: number;
        readonly startingDevPoints: number;
        readonly _primaryBuilding: string;
        readonly _secondaryBuilding1: string;
        readonly _secondaryBuilding2: string;
        readonly _secondaryBuilding3: string;
        readonly _secondaryBuilding4: string;
        readonly _secondaryBuilding5: string;
        readonly _secondaryBuilding6: string;
        readonly _secondaryBuilding7: string;
        readonly _secondaryBuilding8: string;
        readonly _secondaryBuilding9: string;
        readonly _secondaryBuilding10: string;
        constructor(collectionCache: CollectionCache, values: any);
        get general(): StartPosCharacters.Entry | undefined;
        get primaryBuilding(): BuildingLevels.Entry | undefined;
        get secondaryBuilding1(): BuildingLevels.Entry | undefined;
        get secondaryBuilding2(): BuildingLevels.Entry | undefined;
        get secondaryBuilding3(): BuildingLevels.Entry | undefined;
        get secondaryBuilding4(): BuildingLevels.Entry | undefined;
        get secondaryBuilding5(): BuildingLevels.Entry | undefined;
        get secondaryBuilding6(): BuildingLevels.Entry | undefined;
        get secondaryBuilding7(): BuildingLevels.Entry | undefined;
        get secondaryBuilding8(): BuildingLevels.Entry | undefined;
        get secondaryBuilding9(): BuildingLevels.Entry | undefined;
        get secondaryBuilding10(): BuildingLevels.Entry | undefined;
    }
}
export default StartPosHordeDetails;
