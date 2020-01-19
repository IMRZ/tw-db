import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignments } from "./CharacterAssignments";
import { CampaignOverlayRadarModes } from "./CampaignOverlayRadarModes";
import { UiCharacterAssignmentCategories } from "./UiCharacterAssignmentCategories";
export declare namespace UiCharacterAssignments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _characterAssignment: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly iconPath: string;
        readonly _radarMode: string;
        readonly _uiCharacterAssignmentCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterAssignment(): CharacterAssignments.Entry | undefined;
        get radarMode(): CampaignOverlayRadarModes.Entry | undefined;
        get uiCharacterAssignmentCategory(): UiCharacterAssignmentCategories.Entry | undefined;
    }
}
export default UiCharacterAssignments;
