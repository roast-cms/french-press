import React from "react"

import {addKey} from "../components/vignettes/Reader"
import Link from "../components/controls/Link"

export const rulesSerializeWithProps = props => [
  {
    serialize(node, children) {
      const element = node.type
      switch (element) {
        case "link": {
          const href = node.data.href
          return addKey(
            <Link
              to={href}
              domain={props.options ? props.options.domain : null}
            >
              {children}
            </Link>
          )
        }
        case "image": {
          if (props.components && props.components.Picture) {
            const Picture = props.editor
              ? props.editor.props.components.Picture
              : props.components.Picture
            return addKey(
              <Picture
                editor={{value: {isSelected: false}}}
                node={{
                  data: {
                    get: object => node.data[object],
                  },
                  serial: node.serial,
                }}
                readOnly={true}
              />
            )
          } else return null
        }
        default:
          return addKey(<span>{children}</span>)
      }
    },
  },
]
export const RULES_SERIALIZE = [
  {
    serialize(node, children) {
      const element = node.type
      switch (element) {
        case "paragraph": {
          return addKey(<p>{children}</p>)
        }
        case "quote": {
          return addKey(
            <div style={{clear: "both"}}>
              <blockquote>{children}</blockquote>
            </div>
          )
        }
        case "heading": {
          return addKey(<h3>{children}</h3>)
        }
        case "divider": {
          return addKey(<hr />)
        }
        case "italic": {
          return addKey(<em>{children}</em>)
        }
        case "bold": {
          return addKey(<strong>{children}</strong>)
        }
      }
    },
  },
]
