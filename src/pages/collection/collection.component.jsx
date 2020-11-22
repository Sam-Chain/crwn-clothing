import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selectors'


import React from 'react'
import './collection.styles.scss'
const Collection = ({collection}) => {
    const {title, items} = collection
    return (
        <div className='collection'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    collection: selectCollection(props.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
