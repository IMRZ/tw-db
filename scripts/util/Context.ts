
import { Relationship } from "./Relationship";
import { Table } from "./Table";

export namespace Context {
  export let tables: Table[] = [];
  export let relationships: Relationship[] = [];
}
