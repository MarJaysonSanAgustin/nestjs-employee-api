import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  employeeId: number;

  @ManyToOne(() => Employee, employee => employee.tasks, { onDelete: 'SET NULL' })
  employee: Employee;
}