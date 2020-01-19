import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldCivilianGroups } from "./BattlefieldCivilianGroups";
import { MainUnits } from "./MainUnits";
import { BattlefieldCivilianBehaviourGroups } from "./BattlefieldCivilianBehaviourGroups";
export declare namespace BattlefieldCivilianGroupVariations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _civilianGroup: string;
        readonly climateLookup: string;
        readonly seasonLookup: string;
        readonly timeOfDayLookup: string;
        readonly precipitationTypeLookup: string;
        readonly civilianAmountScale: number;
        readonly _civilianUnit: string;
        readonly _civilianBehaviourGroup: string;
        readonly proportionOfCiviliansToSpawnInsideShelters: number;
        readonly maxShelterCapacity: number;
        readonly tileUpgradesLookup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get civilianGroup(): BattlefieldCivilianGroups.Entry | undefined;
        get civilianUnit(): MainUnits.Entry | undefined;
        get civilianBehaviourGroup(): BattlefieldCivilianBehaviourGroups.Entry | undefined;
    }
}
export default BattlefieldCivilianGroupVariations;
