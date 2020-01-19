import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { Agents } from "./Agents";
import { MinisterialPositions } from "./MinisterialPositions";
import { DeathTypes } from "./DeathTypes";
import { AgentSubtypes } from "./AgentSubtypes";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
export declare namespace StartPosCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _faction: number;
        readonly _type: string;
        readonly startOnMap: boolean;
        readonly startx: number;
        readonly starty: number;
        readonly _ministerialPosition: string;
        readonly immortal: boolean;
        readonly isInGeneralsPool: boolean;
        readonly loyalty: number;
        readonly ambition: number;
        readonly _deathType: string;
        readonly turnsDiedBeforeStart: string;
        readonly legacyOverride: string;
        readonly progenitor: boolean;
        readonly _subtype: string;
        readonly _template: string;
        readonly undercoverCharacterEnabler: boolean;
        readonly startFacingAngle: number;
        readonly startingForceRetreatedThisTurn: boolean;
        readonly rankOverride: number;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): StartPosFactions.Entry | undefined;
        get type(): Agents.Entry | undefined;
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
        get deathType(): DeathTypes.Entry | undefined;
        get subtype(): AgentSubtypes.Entry | undefined;
        get template(): CharacterGenerationTemplates.Entry | undefined;
    }
}
export default StartPosCharacters;
