
const DistanceScore = distance => {
    return Math.exp(distance * - 0.01)
}
const interestsScore = nbrTag => {
  return   1 - Math.exp(nbrTag * -1)
}

const MatchingFilter = (user2) => {
    const distancefilter = DistanceScore(user2.distance);
    const interestsfilter = interestsScore(user2.nbrTags);
    const rating = user2.rating;
    const isOnline = user2.online;
    const MatchScore = (distancefilter + interestsfilter   +  7 * rating    + isOnline ) /10 ;
    return MatchScore.toFixed(5);
    
}
module.exports = MatchingFilter