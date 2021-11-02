import { Subjects } from "./subjects";

export interface AbstractEvent<T extends Subjects> {
  subject: T;
}
