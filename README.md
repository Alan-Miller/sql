# SQL

## constraints
To remove, a constraint you must know the name of the constraint. Different UIs have different tools for this. Or you can use `pg_constraint`.

- See all constraints: 
```sql
SELECT * FROM pg_constraint;
```
- Remove constraint:
```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```
- Add ON DELETE CASCADE constraint:
```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name, ADD CONSTRAINT constraint_name FOREIGN KEY REFERENCES parent_table_name(parent_column) ON DELETE CASCADE;
```