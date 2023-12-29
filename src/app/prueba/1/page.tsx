/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const POSTS = [
  {
    id: '1',
    title: 'Post 1',
  },
  {
    id: '2',
    title: 'Post 2',
  },
]


// Using URL

// /posts  -> ["posts"]
// /posts/1 -> ["posts", 1 -> id]
// /posts?authorId=1 -> ["posts", {authorId : 1}]
// /posts/2/comments -> ["posts", 2, "comments"]

export default function page() {
	const queryClient = useQueryClient()
	const postsQuery = useQuery({
		queryKey: ['posts'], // query key, it's name
		queryFn: () => wait(1000).then(() => [...POSTS]), // promise to wait for the data
    staleTime: 1000 // refresh the data from api
	})




	if (postsQuery.isLoading) return <h1>Loading</h1> // Loading message
	if (postsQuery.isError) {
		return <pre>{JSON.stringify(postsQuery.error)}</pre> // Error message
	}
	return (
		<main className="relative">
			<h1>TanStack Query</h1>
			{postsQuery.data?.map((post) => (
				<h5 key={post.id}>{post.title}</h5>
			))}
		</main>
	)
}

function wait(duration: any) {
	return new Promise((resolve) => setTimeout(resolve, duration))
}
