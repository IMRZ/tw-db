import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { DeployablesAbilities } from "./DeployablesAbilities";
export declare namespace LandUnitsToDeployablesAbilitiesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _landUnit: string;
        readonly _deployableAbility: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly landUnit: LandUnits.Entry | undefined;
        readonly deployableAbility: DeployablesAbilities.Entry | undefined;
    }
}
export default LandUnitsToDeployablesAbilitiesJunctions;
