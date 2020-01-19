import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { MercenaryRetinueLevelSources } from "./MercenaryRetinueLevelSources";
export declare namespace BuildingLevelToMercenaryRetinueSourceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly autoId: number;
        readonly _buildingLevel: string;
        readonly _providesMercenaryRetinueSource: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get providesMercenaryRetinueSource(): MercenaryRetinueLevelSources.Entry | undefined;
    }
}
export default BuildingLevelToMercenaryRetinueSourceJunctions;
