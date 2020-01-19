import { CollectionCache, CollectionKey } from "../../../common";
import { UiTooltips } from "./UiTooltips";
export declare namespace UiTooltipComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _uiTooltip: string;
        readonly childId: string;
        readonly localisedText: string;
        readonly iconPath: string;
        readonly stateName: string;
        readonly isVisible: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get uiTooltip(): UiTooltips.Entry | undefined;
    }
}
export default UiTooltipComponents;
