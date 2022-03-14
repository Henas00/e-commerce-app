import React from "react";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import { data } from "../../data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collections: data };
  }

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
