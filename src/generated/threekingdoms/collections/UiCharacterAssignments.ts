
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignments } from "./CharacterAssignments";
import { CampaignOverlayRadarModes } from "./CampaignOverlayRadarModes";
import { UiCharacterAssignmentCategories } from "./UiCharacterAssignmentCategories";

export namespace UiCharacterAssignments {
  export const KEY = new CollectionKey("ui_character_assignments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _characterAssignment: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly iconPath: string;
    readonly _radarMode: string;
    readonly _uiCharacterAssignmentCategory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._characterAssignment = values["character_assignment"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.iconPath = values["icon_path"];
      this._radarMode = values["radar_mode"];
      this._uiCharacterAssignmentCategory = values["ui_character_assignment_category"];
    }
    
    get characterAssignment(): CharacterAssignments.Entry | undefined {
      const collection = <CharacterAssignments.Entry[]>this.collectionCache.getCollection(CharacterAssignments.KEY, CharacterAssignments.Entry);
      return collection.find(entry => entry.key === this._characterAssignment);
    }
    
    get radarMode(): CampaignOverlayRadarModes.Entry | undefined {
      const collection = <CampaignOverlayRadarModes.Entry[]>this.collectionCache.getCollection(CampaignOverlayRadarModes.KEY, CampaignOverlayRadarModes.Entry);
      return collection.find(entry => entry.key === this._radarMode);
    }
    
    get uiCharacterAssignmentCategory(): UiCharacterAssignmentCategories.Entry | undefined {
      const collection = <UiCharacterAssignmentCategories.Entry[]>this.collectionCache.getCollection(UiCharacterAssignmentCategories.KEY, UiCharacterAssignmentCategories.Entry);
      return collection.find(entry => entry.key === this._uiCharacterAssignmentCategory);
    }
  }
}

export default UiCharacterAssignments;
