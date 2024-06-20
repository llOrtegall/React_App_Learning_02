import { useRouteError, Link } from "react-router-dom"

export function NotFound() {
  const error = useRouteError()
  console.log(error);
  
  return (
    <>
      <div>NotFound</div>
      <Link to="/">Home</Link>
    </>
  )
}
