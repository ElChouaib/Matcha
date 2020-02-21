
const DistanceScore = distance => {
    return Math.exp(distance * - 0.01)
}
const interestsScore = interests => {
  return   1 - Math.exp(interests * -1)
}

const MatchingFilter = (user2) => {
    const distancefilter = DistanceScore(user2.distance);
    const interestsfilter = interestsScore(user2.nbrTags);
    const popularityfilter = user2.rating;
    const isOnline = user2.online;
    const MatchScore = (distancefilter * 3 + interestsfilter * 3 + popularityfilter * 3 + isOnline * 3) / (12);
    return MatchScore.toFixed(5);
    
}
module.exports = MatchingFilter