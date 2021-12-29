import React from 'react'

const TextLists = (props) => {
    const items = props.gifs.map((itemData) => {
        return <Item url={itemData.url} />
    })
    return (
        <div>
            {items}
        </div>
    )
}

const Item = (props) => {
    return (
        <div>
            <img src={props.url} alt='' />
        </div>
    )
}

export default TextLists
