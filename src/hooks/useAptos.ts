import { AptosClient, FaucetClient, CoinClient, AptosAccount } from 'aptos'

const aptosDevRestUrl = process.env.REACT_APP_APTOS_DEV_REST_URL || 'https://fullnode.devnet.aptoslabs.com'
const aptosDevFaucetUrl = process.env.REACT_APP_APTOS_DEV_FAUCET_URL || 'https://faucet.devnet.aptoslabs.com'

const client = new AptosClient(aptosDevRestUrl)
const faucetClient = new FaucetClient(aptosDevRestUrl, aptosDevFaucetUrl)
let coinClient: CoinClient

if (client && faucetClient) {
  coinClient = new CoinClient(client)
}

export const useAptos = () => {
  return {
    coinClient,
    client,
    faucetClient
  }
}
