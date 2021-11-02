import { Subjects } from "./subjects";
import { AbstractEvent } from "./abstract-event";

export interface PaymentCreatedEvent extends AbstractEvent<Subjects.PaymentCreated> {
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
