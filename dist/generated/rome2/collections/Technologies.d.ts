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
        readonly researchPointsRequired: number;
        readonly militaryPrestige: number;
        readonly navalPrestige: number;
        readonly economicPrestige: number;
        readonly enlightenmentPrestige: number;
        readonly mpAvailableEarly: boolean;
        readonly mpAvailableLate: boolean;
        readonly infoPic: string;
        readonly aiBias: number;
        readonly uniqueIndex: number;
        readonly inEncyclopedia: boolean;
        readonly costPerRound: number;
        readonly isCivil: boolean;
        readonly isEngineering: boolean;
        readonly isMilitary: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly buildingLevel: BuildingLevels.Entry | undefined;
    }
}
export default Technologies;
