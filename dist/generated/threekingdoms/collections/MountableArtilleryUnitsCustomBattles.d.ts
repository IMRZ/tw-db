import { CollectionCache, CollectionKey } from "../../../common";
import { MountableArtilleryUnits } from "./MountableArtilleryUnits";
import { Factions } from "./Factions";
export declare namespace MountableArtilleryUnitsCustomBattles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mountableArtillery: string;
        readonly cap: number;
        readonly probability: number;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get mountableArtillery(): MountableArtilleryUnits.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default MountableArtilleryUnitsCustomBattles;
