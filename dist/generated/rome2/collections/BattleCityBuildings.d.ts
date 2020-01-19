import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeRigid } from "./WarscapeRigid";
import { BattleCities } from "./BattleCities";
export declare namespace BattleCityBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _building: string;
        readonly _city: string;
        readonly amountInTown: number;
        readonly amountInCity: number;
        constructor(collectionCache: CollectionCache, values: any);
        get building(): WarscapeRigid.Entry | undefined;
        get city(): BattleCities.Entry | undefined;
    }
}
export default BattleCityBuildings;
