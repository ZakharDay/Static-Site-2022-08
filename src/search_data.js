import Airtable from 'airtable'

const token =
  'patmmWEYvIcdQIv63.be336c1827dde9111bdbb74b62d1c2f0e753092cbb2cb61cdca9341601acd005'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

const base = Airtable.base('appwcTAYHNcwgwLzW')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Post Teasers')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            tags: record.fields['Tags'],
            image: record.fields['Image'],
            title: record.fields['Title'],
            description: record.fields['Description']
          })
        })

        resolve(content)
      })
  })
}

export { getPostTeasers }
