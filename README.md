# tw-db

A programmatic and typed API to file db.
A typed interface to the Total War database folder, usually extracted from the AssemblyKit.

This is used in various personal projects to extract faction or unit data.

Currently supported games are:
* Total War: Rome II
* Total War: Warhammer II

## Example
```js
import twdb from "tw-db";

const wh2Db = twdb.createInstanceWarhammer2(`C:\Program Files (x86)\Steam\steamapps\common\Total War WARHAMMER II\assembly_kit\raw_data\db`);

// get the onScreenName from first entry in the abilities table
const abilityOnscreenName = wh2Db.abilities[0].onScreenName;

// access data from related collection
const abilityCategory = wh2Db.abilities[0].category;

// or just the key value
const abilityCategory = wh2Db.abilities[0]._category;

// using the optional-chaining and null coalescing
const abilityCategoryOnScreenName = wh2Db.abilities[0]?.category.onScreenName ?? "";
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
