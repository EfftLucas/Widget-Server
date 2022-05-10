import { TrelloAdapter, SendTrelloCard } from "../adapters/trelllo-adapter";

export class SubmitFeedbackTrelloUseCase {
  constructor(
    private trelloAdapter: TrelloAdapter,
  ) { }

  async execute(request: SendTrelloCard) {
    const { idList, name, desc, pos, due, dueComplete, idMembers, idLabels, urlSource, fileSource, idCardSource, keepFromSource } = request;

    if (!idList) {
      throw new Error("idList is required")
    }


    await this.trelloAdapter.sendCard({
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
