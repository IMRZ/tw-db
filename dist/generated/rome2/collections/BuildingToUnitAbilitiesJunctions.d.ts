import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildings } from "./BattlefieldBuildings";
import { UnitAbilities } from "./UnitAbilities";
export declare namespace BuildingToUnitAbilitiesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingName: string;
        readonly _ability: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingName(): BattlefieldBuildings.Entry | undefined;
        get ability(): UnitAbilities.Entry | undefined;
    }
}
export default BuildingToUnitAbilitiesJunctions;
