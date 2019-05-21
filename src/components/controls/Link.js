import LinkFilter from "@roast-cms/react-link-filter"
import React from "react"

/**
 * An implementation of `@roast-cms/react-link-filter` component that's built on top of React Router 4 with additional features, such as correcting user input (if they forgot to type http://), transforming absolute URLs on your domain to relative ones, and a proper function within React application that works in React Router 4 context.
 * @module Link
 */

export default props => {
  return <LinkFilter {...props}>{props.children}</LinkFilter>
}
