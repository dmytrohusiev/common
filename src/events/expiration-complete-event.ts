import { Subjects } from "./subjects";
import { AbstractEvent } from "./abstract-event";

export interface ExpirationCompleteEvent extends AbstractEvent<Subjects.ExpirationComplete> {
  data: {
    orderId: string;
  };
}
