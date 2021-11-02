import { Subjects } from "./subjects";
import { AbstractEvent } from "./abstract-event";

export interface TicketUpdatedEvent extends AbstractEvent<Subjects.TicketUpdated> {
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    orderId?: string;
  };
}
