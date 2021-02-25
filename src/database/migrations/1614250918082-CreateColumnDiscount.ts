import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class CreateColumnDiscount1614250918082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('counts', new TableColumn({
      name: 'discount',
      type: 'decimal(10,2)',
      default: 0.0,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('counts', 'discount');
  }
}
