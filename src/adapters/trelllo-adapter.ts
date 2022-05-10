export interface SendTrelloCard {
  name: string;
  desc: string;
  pos?: string;
  idList: string;
  due?: null | string;
  dueComplete?: boolean;
  idMembers?: string[];
  idLabels?: string[];
  urlSource?: string;
  fileSource?: string;
  idCardSource?: string;
  keepFromSource?: string;
}


export interface TrelloAdapter {
  sendCard: (data: SendTrelloCard) => Promise<void>;
}