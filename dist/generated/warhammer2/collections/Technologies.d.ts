import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace Technologies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _buildingLevel: string;
        readonly positionIndex: number;
        readonly onscreenName: string;
        readonly shortDescription: string;
        readonly longDescription: string;
        readonly iconName: string;
        readonly militaryPrestige: number;
        readonly navalPrestige: number;
        readonly economicPrestige: number;
        readonly enlightenmentPrestige: number;
        readonly mpAvailableEarly: boolean;
        readonly mpAvailableLate: boolean;
        readonly infoPic: string;
        readonly uniqueIndex: number;
        readonly inEncyclopedia: boolean;
        readonly isCivil: boolean;
        readonly isEngineering: boolean;
        readonly isMilitary: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
    }
}
export default Technologies;
