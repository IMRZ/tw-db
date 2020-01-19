import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { MinisterialPositionsStrings } from "./MinisterialPositionsStrings";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
import { PastExperienceReasons } from "./PastExperienceReasons";
import { UiMinisterialPositions } from "./UiMinisterialPositions";
import { Campaigns } from "./Campaigns";
export declare namespace MinisterialPositionsCultureDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly ministerialPositionCulturalVariant: string;
        readonly _ministerialPositionKey: string;
        readonly _localisedStringKey: string;
        readonly _cultureKey: string;
        readonly _subcultureKey: string;
        readonly _factionKey: string;
        readonly xCoordinate: number;
        readonly yCoordinate: number;
        readonly _localisedDescriptionKey: string;
        readonly allowCharacterToFactionwideMinisterialEffects: boolean;
        readonly _startOfRoundRelationshipTriggers: string;
        readonly _appointedRelationshipTriggers: string;
        readonly _recalledRelationshipTriggers: string;
        readonly _defectionPastExperienceReason: string;
        readonly allowFamilyMembersOnly: boolean;
        readonly _uiRecord: string;
        readonly _campaignKey: string;
        readonly allowCharacterToFactionwideMinisterialAlternativeEffects: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get ministerialPositionKey(): MinisterialPositions.Entry | undefined;
        get localisedStringKey(): MinisterialPositionsStrings.Entry | undefined;
        get cultureKey(): Cultures.Entry | undefined;
        get subcultureKey(): CulturesSubcultures.Entry | undefined;
        get factionKey(): Factions.Entry | undefined;
        get localisedDescriptionKey(): MinisterialPositionsStrings.Entry | undefined;
        get startOfRoundRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined;
        get appointedRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined;
        get recalledRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined;
        get defectionPastExperienceReason(): PastExperienceReasons.Entry | undefined;
        get uiRecord(): UiMinisterialPositions.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
    }
}
export default MinisterialPositionsCultureDetails;
