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
		staleTime: 1000, // refresh the data from api
		// refetchInterval: 1000, // give the data every time
	})

	const newPostMutation = useMutation({
		mutationFn: (title: string) => {
			return wait(1000).then(() =>
				POSTS.push({ id: crypto.randomUUID(), title })
			)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['posts'],
			})
		},
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
			<button
			
				onClick={() => newPostMutation.mutate('New Post')}
			>
				Add New
			</button>
		</main>
	)
}

function wait(duration: any) {
	return new Promise((resolve) => setTimeout(resolve, duration))
}
