import { Subjects } from "./subjects";
import { AbstractEvent } from "./abstract-event";

export interface TicketCreatedEvent extends AbstractEvent<Subjects.TicketCreated> {
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
}
