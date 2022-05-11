import { TrelloAdapter, SendTrelloCard } from "../adapters/trelllo-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class SubmitFeedbackTrelloUseCase {
  constructor(
    private trelloAdapter: TrelloAdapter,
    private feedBacksRepository: FeedbacksRepository
  ) { }

  async execute(request: SendTrelloCard) {
    const { idList, name, desc, pos, due, dueComplete, idMembers, idLabels, urlSource, fileSource, idCardSource, keepFromSource, type, comment, screenshot, company } = request;

    if (idList.length === 0 ) {
      throw new Error("idList is required")
    }

    await this.feedBacksRepository.create({ 
      type, comment, screenshot, company
    })


    await this.trelloAdapter.sendCard({
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
  }
}
