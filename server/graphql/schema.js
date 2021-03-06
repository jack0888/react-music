import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'

import banners from './banner/query'
import personalized from './personalized/query'
import search from './search/query'
import radio from './radio/query'
import playList from './playList/query'
import albumDetail from './album/query'
import artistDetail from './artist/query'
import music from './music/query'
import lyrics from './lyrics/query'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            banners,
            personalized,
            ...search,
            ...radio,
            playList,
            albumDetail,
            artistDetail,
            music,
            lyrics
        }
    })
})

export default schema