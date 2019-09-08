import { CollectionCache, CollectionKey } from "../../../common";
import { NavalWeaponsEnums } from "./NavalWeaponsEnums";
import { BattlefieldEnginesAutonomous } from "./BattlefieldEnginesAutonomous";
import { ModelsEntityWeapons } from "./ModelsEntityWeapons";
export declare namespace NavalWeapons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _type: string;
        readonly _autonomousEngine: string;
        readonly _modelsEntityWeaponry: string;
        readonly isPrimaryUnitAttack: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly type: NavalWeaponsEnums.Entry | undefined;
        readonly autonomousEngine: BattlefieldEnginesAutonomous.Entry | undefined;
        readonly modelsEntityWeaponry: ModelsEntityWeapons.Entry | undefined;
    }
}
export default NavalWeapons;
