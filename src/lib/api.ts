import { Story } from '@/types'

export async function getTopStories() {
  const response = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  )
  const data = await response.json()
  return data
}

export async function getStoryItem(storyId: number) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
  )
  const data = await response.json()
  return data
}

export async function getUser(userId: string) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/user/${userId}.json`
  )
  const data = await response.json()
  return data
}

export async function getRandomTopStories() {
  const randomStories: Story[] = []
  const topStories = await getTopStories()
  const randomStoryIds: number[] = []

  while (randomStoryIds.length < 10) {
    // Generate a random index within the range of topStories array.
    const randomStoryIndex = Math.floor(Math.random() * topStories.length)
    // Get the random story at the generated index.
    const randomStory = topStories[randomStoryIndex]

    // Check if the random story is not already in the randomStoryIds array.
    if (!randomStoryIds.includes(randomStory)) {
      // If it's not a duplicate, add it to the randomStoryIds array.
      randomStoryIds.push(randomStory)
    }
  }

  await Promise.all(
    randomStoryIds.map(async (storyId) => {
      // Fetch the story data for a specific story ID.
      const storyItem: Story = await getStoryItem(storyId)
      // Add the fetched story data to the stories array.
      randomStories.push(storyItem)
    })
  )

  // Sort the stories in ascending order based on their scores.
  randomStories.sort((a, b) => a.score - b.score)

  return randomStories
}
