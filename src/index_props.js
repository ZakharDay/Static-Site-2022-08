function formatData(indexData) {
  const categories = []
  let categoryNames = []

  indexData['records'].forEach((post) => {
    categoryNames.push(...post['fields']['Categories'])
  })

  categoryNames = [...new Set(categoryNames)]

  categoryNames.forEach((categoryName) => {
    const category = {
      name: categoryName,
      posts: []
    }

    indexData['records'].forEach((post) => {
      if (post['fields']['Categories'].includes(categoryName)) {
        category.posts.push({
          title: post['fields']['Title'],
          image: post['fields']['Image'][0]['url'],
          url: post['fields']['Url']
        })
      }
    })

    categories.push(category)
  })

  return categories
}

export { formatData }
