import { SubmitFeedbackTrelloUseCase } from "./submit-feedback-trello-use-case";

const trelloAdapter = jest.fn();

const submitFeedback = new SubmitFeedbackTrelloUseCase(
  { sendCard: trelloAdapter }
);

describe("Submit feedback on trello", () => {
  it('should be able to submit feedback', async () => {
    await expect(submitFeedback.execute({
      name: "Aly",
      desc: "Teste",
      pos: "top",
      idList: "627a66de4c30953a0fc30a3f",
      due: "",
      dueComplete: false,
      idMembers: [],
      idLabels: [],
      urlSource: "",
      fileSource:"",
      idCardSource: "",
      keepFromSource: "",
    })).resolves.not.toThrow();

    expect(trelloAdapter).toHaveBeenCalled
  })

  it('should not be able to submit feedback without a idList', async () => {
    await expect(submitFeedback.execute({
      name: "Aly",
      desc: "Teste",
      pos: "top",
      idList: "",
      due: "",
      dueComplete: false,
      idMembers: [],
      idLabels: [],
      urlSource: "",
      fileSource:"",
      idCardSource: "",
      keepFromSource: "",
    })).rejects.toThrow();
  })
})