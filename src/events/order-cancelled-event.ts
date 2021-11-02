import { Subjects } from "./subjects";
import { AbstractEvent } from "./abstract-event";

export interface OrderCancelledEvent extends AbstractEvent<Subjects.OrderCancelled> {
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
