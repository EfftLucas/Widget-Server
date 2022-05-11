import express from 'express';
import { SubmitFeedbackTrelloUseCase } from './use-cases/submit-feedback-trello-use-case';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { TrelloAdapter } from './adapters/trelllo-adapter';
import { TrelloNodeCardAdapter } from './adapters/trello/trello-card-adapter';

export const routes = express.Router()

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot, company } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository()
  const nodemailerMailer = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailer
  )

  await submitFeedbackUseCase.execute({
    type, 
    comment, 
    screenshot,
    company
  })

  return res.status(201).send();
});

routes.post("/trello-feedbacks", async (req, res) => {
  const { idList, name, desc, pos, due, dueComplete, idMembers, idLabels, urlSource, fileSource, idCardSource, keepFromSource, type, comment, screenshot, company } = req.body

  const trelloAdapter = new TrelloNodeCardAdapter();
  const FeedbackRepository = new PrismaFeedbackRepository();

  const submitFeedbackTrelloUseCase = new SubmitFeedbackTrelloUseCase(
    trelloAdapter,
    FeedbackRepository
    
  )
    
  await submitFeedbackTrelloUseCase.execute({
    type, 
    comment, 
    screenshot,
    company,
    name,
    desc,
    pos,
    idList,
    due,
    dueComplete,
    idMembers,
    idLabels,
    urlSource,
    fileSource,
    idCardSource,
    keepFromSource,
  })

  return res.status(201).send();
})