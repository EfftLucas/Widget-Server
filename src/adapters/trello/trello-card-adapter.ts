import TrelloNodeApi from 'trello-node-api';
import { SendTrelloCard, TrelloAdapter } from '../trelllo-adapter';
import fs from 'fs';

export class TrelloNodeCardAdapter implements TrelloAdapter {

  async sendCard({ idList, name, desc, pos, due, dueComplete, idMembers, idLabels, urlSource, fileSource, idCardSource, keepFromSource, type, comment, screenshot, company }: SendTrelloCard) {
    const Trello = new TrelloNodeApi();

    Trello.setApiKey(process.env.TRELLO_KEY_DEV!);
    Trello.setOauthToken(process.env.TRELLO_TOKEN_DEV!)


    try {
      const response = await Trello.card.create({
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
       keepFromSource
      });

    } catch (err) {
      
      console.log(`Trello: ${err}`);
    }
  }
}