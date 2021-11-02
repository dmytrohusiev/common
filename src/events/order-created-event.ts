import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";
import { AbstractEvent } from "./abstract-event";

export interface OrderCreatedEvent extends AbstractEvent<Subjects.OrderCreated> {
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
