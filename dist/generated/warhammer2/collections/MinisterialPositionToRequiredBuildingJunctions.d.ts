import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace MinisterialPositionToRequiredBuildingJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ministerialPosition: string;
        readonly _requiredBuilding: string;
        readonly localisedRequirementDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly ministerialPosition: MinisterialPositions.Entry | undefined;
        readonly requiredBuilding: BuildingLevels.Entry | undefined;
    }
}
export default MinisterialPositionToRequiredBuildingJunctions;
