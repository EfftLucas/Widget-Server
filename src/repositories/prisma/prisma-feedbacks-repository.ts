import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot, company}: FeedbackCreateData) {
    await prisma.ticket.create({
      data: {
        type, comment, screenshot, company 
      },
    });
  }
}