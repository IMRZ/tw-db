import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { ComposedEntities } from "./ComposedEntities";
import { PersonalityLocationEnums } from "./PersonalityLocationEnums";
export declare namespace LandUnitsTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _landUnit: string;
        readonly _composedEntity: string;
        readonly numComposedEntities: number;
        readonly hpPool: number;
        readonly canBeDropped: boolean;
        readonly scaleNumComposedEntities: boolean;
        readonly _personalityLocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get landUnit(): LandUnits.Entry | undefined;
        get composedEntity(): ComposedEntities.Entry | undefined;
        get personalityLocation(): PersonalityLocationEnums.Entry | undefined;
    }
}
export default LandUnitsTemplates;
