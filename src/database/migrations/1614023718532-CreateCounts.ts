import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class CreateCounts1614023718532 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'counts',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'user_id',
            type: 'varchar',
          },
          {
            name: 'type_id',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'decimal(10, 2)',
          },
          {
            name: 'status',
            type: 'boolean',
          },
          {
            name: 'register_date',
            type: 'date',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey('counts', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
    }));

    await queryRunner.createForeignKey('counts', new TableForeignKey({
      columnNames: ['type_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'types_counts',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('counts');
  }
}
