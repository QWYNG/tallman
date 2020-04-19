import React, { useEffect, useState } from 'react'

// myEncryptedAccountIdは公開されてるので特に秘匿ではない
const myEncryptedAccountId = 'eouFLBesHZCWzbab9ygwRQjqcUATAJnM0QfXeN5rhtPnYw'
const RiotApiProxyEndPoint = 'https://p4z75xh7q9.execute-api.us-east-2.amazonaws.com/default/riot_api_proxy'

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

function fetchThroughProxy(url: string): Promise<Response> {
  return fetch(`${RiotApiProxyEndPoint}?url=${url}`)
}

function fetchMyRankStatus(): Promise<RankedStatus> {
  return fetchThroughProxy(`https://jp1.api.riotgames.com/lol/league/v4/entries/by-summoner/${myEncryptedAccountId}`)
    .then(response => response.json())
    .then(json => json[0] as RankedStatus)
}

const RankCard: React.FC = () => {
  const [rankedStatus, setRankedStatus] = useState<RankedStatus | undefined>(undefined)

  useEffect(() => {
    fetchMyRankStatus().then(fetchedStatus => {
      setRankedStatus(fetchedStatus)
    })
  }, [])

  return (
    <div>
      <p>{rankedStatus?.summonerName}のLOLソロQランク!</p>
      <p>
        {rankedStatus?.tier} {rankedStatus?.rank} {rankedStatus?.leaguePoints}LP
      </p>
    </div>
  )
}
export default RankCard
