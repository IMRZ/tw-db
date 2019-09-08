import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace TechnologyRequiredBuildingLevelsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _technology: string;
        readonly _requiredBuildingLevel: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly technology: Technologies.Entry | undefined;
        readonly requiredBuildingLevel: BuildingLevels.Entry | undefined;
    }
}
export default TechnologyRequiredBuildingLevelsJunctions;
