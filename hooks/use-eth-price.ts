import useSWR from "swr";

const URL = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false"
export const COURSE_PRICE = 10; // in dollars

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const json = await res.json()
  return json.market_data.current_price.usd ?? null
}

export const useEthPrice = () => {
  const swrRes = useSWR(
    URL,
    fetcher,
    { refreshInterval: 1000 }
  )
    
    const perItem = (swrRes.data && (COURSE_PRICE / Number(swrRes.data)).toFixed(6) )?? null

  return { eth: { perItem, ...swrRes}}
}