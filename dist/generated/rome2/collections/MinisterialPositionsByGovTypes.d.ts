import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { MinisterialPositions } from "./MinisterialPositions";
import { GovernmentTypes } from "./GovernmentTypes";
import { Genders } from "./Genders";
export declare namespace MinisterialPositionsByGovTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _ministerKey: string;
        readonly _governmentType: string;
        readonly _gender: string;
        readonly _string: any;
        readonly loyaltyGained: number;
        readonly loyaltyOnLoss: number;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get ministerKey(): MinisterialPositions.Entry | undefined;
        get governmentType(): GovernmentTypes.Entry | undefined;
        get gender(): Genders.Entry | undefined;
    }
}
export default MinisterialPositionsByGovTypes;
