import apollo from '@/plugins/apollo'

import RecordsQuery from './../graphql/RecordsQuery.gql'

const records = async variables => {
  const response = await apollo.query({
    query: RecordsQuery,
    variables
  })
  return response.data.records
}

export default {
  records
}
