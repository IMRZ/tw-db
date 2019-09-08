import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildingCategories } from "./BattlefieldBuildingCategories";
import { ModelsBuilding } from "./ModelsBuilding";
import { AudioMaterials } from "./AudioMaterials";
import { MissileWeapons } from "./MissileWeapons";
import { BattlefieldBuildingsNames } from "./BattlefieldBuildingsNames";
import { GroundTypes } from "./GroundTypes";
export declare namespace BattlefieldBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _category: string;
        readonly _model: string;
        readonly _audioMaterial: string;
        readonly hitPoints: string;
        readonly _gunType: string;
        readonly _onscreenName: string;
        readonly ignitionThreshold: number;
        readonly radarIcon: string;
        readonly visibleInPublicTed: boolean;
        readonly fortwallPenetrationChance: number;
        readonly collision3D: boolean;
        readonly destructThresholds: string;
        readonly joiner: boolean;
        readonly auxiliary: boolean;
        readonly burnRate: number;
        readonly heightMapMesh: boolean;
        readonly _groundType: string;
        readonly canBurn: boolean;
        readonly audioCountAsUrban: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: BattlefieldBuildingCategories.Entry | undefined;
        readonly model: ModelsBuilding.Entry | undefined;
        readonly audioMaterial: AudioMaterials.Entry | undefined;
        readonly gunType: MissileWeapons.Entry | undefined;
        readonly onscreenName: BattlefieldBuildingsNames.Entry | undefined;
        readonly groundType: GroundTypes.Entry | undefined;
    }
}
export default BattlefieldBuildings;
