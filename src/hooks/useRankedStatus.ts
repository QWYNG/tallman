import { useEffect, useState } from 'react'

// myEncryptedAccountIdは公開されてるので特に秘匿ではない
const myEncryptedAccountId = 'eouFLBesHZCWzbab9ygwRQjqcUATAJnM0QfXeN5rhtPnYw'
const RiotApiProxyEndPoint = '  https://hjdkbpkvcl.execute-api.us-east-2.amazonaws.com/default/apiProxyWithGO'

export interface RankedStatus {
  leagueId: string
  queueType: string
  tier: string
  rank: string
  summonerId: string
  summonerName: string
  leaguePoints: number
  wins: number
  losses: number
  veteran: boolean
  inactive: boolean
  freshBlood: boolean
  hotStreak: boolean
}

function fetchThroughProxy(path: string): Promise<Response> {
  return fetch(`${RiotApiProxyEndPoint}?path=${path}`)
}

function fetchMyRankStatus(): Promise<RankedStatus> {
  return fetchThroughProxy(`league/v4/entries/by-summoner/${myEncryptedAccountId}`)
    .then(response => response.json())
    .then(json => json[0] as RankedStatus)
}

function useRankedStatus(): [RankedStatus | undefined, boolean] {
  const [rankedStatus, setRankedStatus] = useState<RankedStatus | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchMyRankStatus().then(fetchedStatus => {
      setRankedStatus(fetchedStatus)
      setIsLoading(false)
    })
  }, [])

  return [rankedStatus, isLoading]
}

export default useRankedStatus
