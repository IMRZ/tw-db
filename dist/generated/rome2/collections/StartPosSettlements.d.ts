import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapSettlements } from "./CampaignMapSettlements";
import { StartPosRegions } from "./StartPosRegions";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace StartPosSettlements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _settlementId: string;
        readonly _region: number;
        readonly _building1: string;
        readonly _building2: string;
        readonly _building3: string;
        readonly _building4: string;
        readonly _building5: string;
        readonly wealth: number;
        readonly fortification: number;
        readonly onscreenName: string;
        readonly id: number;
        readonly _roads: string;
        readonly _fortifications: any;
        readonly _primaryBuilding: string;
        readonly _portBuilding: string;
        readonly startposSlavePoints: number;
        constructor(collectionCache: CollectionCache, values: any);
        get settlementId(): CampaignMapSettlements.Entry | undefined;
        get region(): StartPosRegions.Entry | undefined;
        get building1(): BuildingLevels.Entry | undefined;
        get building2(): BuildingLevels.Entry | undefined;
        get building3(): BuildingLevels.Entry | undefined;
        get building4(): BuildingLevels.Entry | undefined;
        get building5(): BuildingLevels.Entry | undefined;
        get roads(): BuildingLevels.Entry | undefined;
        get primaryBuilding(): BuildingLevels.Entry | undefined;
        get portBuilding(): BuildingLevels.Entry | undefined;
    }
}
export default StartPosSettlements;
