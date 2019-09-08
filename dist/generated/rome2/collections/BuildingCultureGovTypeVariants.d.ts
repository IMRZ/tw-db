import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { Cultures } from "./Cultures";
import { GovernmentTypes } from "./GovernmentTypes";
import { WarscapeRigid } from "./WarscapeRigid";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BuildingDescriptionTexts } from "./BuildingDescriptionTexts";
import { BuildingShortDescriptionTexts } from "./BuildingShortDescriptionTexts";
export declare namespace BuildingCultureGovTypeVariants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _building: string;
        readonly _culture: string;
        readonly _governmentType: string;
        readonly name: string;
        readonly _artpiece: string;
        readonly _artpieceAnimated: string;
        readonly _description: string;
        readonly icon: string;
        readonly _shortDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly building: BuildingLevels.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
        readonly governmentType: GovernmentTypes.Entry | undefined;
        readonly artpiece: WarscapeRigid.Entry | undefined;
        readonly artpieceAnimated: WarscapeAnimated.Entry | undefined;
        readonly description: BuildingDescriptionTexts.Entry | undefined;
        readonly shortDescription: BuildingShortDescriptionTexts.Entry | undefined;
    }
}
export default BuildingCultureGovTypeVariants;
