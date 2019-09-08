
export class Relationship {
  readonly tableName: string;
  readonly columnName: string;
  readonly foreignTableName: string;
  readonly foreignColumnName: string;

  constructor(
    tableName: string,
    columnName: string,
    foreignTableName: string,
    foreignColumnName: string
  ) {
    this.tableName = tableName;
    this.columnName = columnName;
    this.foreignTableName = foreignTableName;
    this.foreignColumnName = foreignColumnName;
  }

  static fromJson(json: any): Relationship[] {
    return json.root.relationship.map((entry: any) => {
      return new Relationship(
        entry.table_name,
        entry.column_name,
        entry.foreign_table_name,
        entry.foreign_column_name,
      );
    });
  }
}
