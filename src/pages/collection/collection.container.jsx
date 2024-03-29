import  {connect}  from "react-redux"
import { compose } from "redux"
import  {createStructuredSelector}  from "reselect"
import  WithSpinner  from "../../components/with-spinner/with-spinner.component"
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors"
import  Collection  from "./collection.component"


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)

export default CollectionContainer