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
        readonly general: StartPosCharacters.Entry | undefined;
        readonly primaryBuilding: BuildingLevels.Entry | undefined;
        readonly secondaryBuilding1: BuildingLevels.Entry | undefined;
        readonly secondaryBuilding2: BuildingLevels.Entry | undefined;
        readonly secondaryBuilding3: BuildingLevels.Entry | undefined;
        readonly secondaryBuilding4: BuildingLevels.Entry | undefined;
        readonly secondaryBuilding5: BuildingLevels.Entry | undefined;
        readonly secondaryBuilding6: BuildingLevels.Entry | undefined;
        readonly secondaryBuilding7: BuildingLevels.Entry | undefined;
        readonly secondaryBuilding8: BuildingLevels.Entry | undefined;
        readonly secondaryBuilding9: BuildingLevels.Entry | undefined;
        readonly secondaryBuilding10: BuildingLevels.Entry | undefined;
    }
}
export default StartPosHordeDetails;
