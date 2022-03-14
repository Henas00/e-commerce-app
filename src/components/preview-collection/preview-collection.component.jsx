import './preview-collection.styles.scss'
import ColllectionItem from '../collection-item/collection-item.component'
const CollectionPreview = ({ title, items }) => {
    return (
      <div className="collection-preview">
        <h1 className="tilte">{title}</h1>
        <div className="preview">
          {items
            .filter((i, index) => index < 4)
            .map(({ id, ...OtherItemProps }) => (
              <ColllectionItem key={id} {...OtherItemProps} />
            ))}
        </div>
      </div>
    );
}
 
export default CollectionPreview;