
import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities } from "./UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities";

export namespace UiDiplomacyFollowupNegotiationComponents {
  export const KEY = new CollectionKey("ui_diplomacy_followup_negotiation_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedPanelTitle: string;
    readonly localisedPanelDescription: string;
    readonly localisedCallForAction: string;
    readonly localisedCallForActionButton: string;
    readonly localisedProposersTitle: string;
    readonly localisedRecipientsTitle: string;
    readonly _playerFactionVisibility: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedPanelTitle = values["localised_panel_title"];
      this.localisedPanelDescription = values["localised_panel_description"];
      this.localisedCallForAction = values["localised_call_for_action"];
      this.localisedCallForActionButton = values["localised_call_for_action_button"];
      this.localisedProposersTitle = values["localised_proposers_title"];
      this.localisedRecipientsTitle = values["localised_recipients_title"];
      this._playerFactionVisibility = values["player_faction_visibility"];
    }
    
    get playerFactionVisibility(): UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities.Entry | undefined {
      const collection = <UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities.Entry[]>this.collectionCache.getCollection(UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities.KEY, UiDiplomacyFollowupNegotiationComponentsPlayerVisibilities.Entry);
      return collection.find(entry => entry.key === this._playerFactionVisibility);
    }
  }
}

export default UiDiplomacyFollowupNegotiationComponents;
