import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildingCategories } from "./BattlefieldBuildingCategories";
import { ModelsBuilding } from "./ModelsBuilding";
import { AudioMaterialsEnums } from "./AudioMaterialsEnums";
import { MissileWeapons } from "./MissileWeapons";
import { BattlefieldBuildingsNames } from "./BattlefieldBuildingsNames";
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
        constructor(collectionCache: CollectionCache, values: any);
        get category(): BattlefieldBuildingCategories.Entry | undefined;
        get model(): ModelsBuilding.Entry | undefined;
        get audioMaterial(): AudioMaterialsEnums.Entry | undefined;
        get gunType(): MissileWeapons.Entry | undefined;
        get onscreenName(): BattlefieldBuildingsNames.Entry | undefined;
    }
}
export default BattlefieldBuildings;
