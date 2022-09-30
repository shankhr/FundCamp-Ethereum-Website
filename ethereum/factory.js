import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1117A7c6c3aa43ad428a8779A0F3D4A0Bc431BbD'
);

export default instance;
