import React from 'react'
import useRankedStatus from '../hooks/useRankedStatus'

const RankCard: React.FC = () => {
  const [rankedStatus, isLoading] = useRankedStatus()

  if (isLoading) {
    return <div> now Loading...</div>
  }
  return (
    <div>
      <p>{rankedStatus?.summonerName}'s LOL ranked status</p>
      <p>
        {rankedStatus?.tier} {rankedStatus?.rank} {rankedStatus?.leaguePoints}LP
      </p>
    </div>
  )
}
export default RankCard
