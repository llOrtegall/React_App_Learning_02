import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <p>Go Back Home</p>
      <Link to="/" className="bg-blue-400 py-2 px-4 rounded-md text-white font-semibold hover:bg-blue-600">Home</Link>
    </section>
  )
}