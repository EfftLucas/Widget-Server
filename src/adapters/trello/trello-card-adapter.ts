import TrelloNodeApi from 'trello-node-api';
import { SendTrelloCard, TrelloAdapter } from '../trelllo-adapter';

export class TrelloNodeCardAdapter implements TrelloAdapter {

  async sendCard(data: SendTrelloCard) {
    const Trello = new TrelloNodeApi();

    Trello.setApiKey(process.env.TRELLO_KEY!);
    Trello.setOauthToken(process.env.TRELLO_TOKEN!)
    

    try {
      const response = await Trello.card.create(data);

    } catch (err) {
      
      console.log(err);
    }
  }
}