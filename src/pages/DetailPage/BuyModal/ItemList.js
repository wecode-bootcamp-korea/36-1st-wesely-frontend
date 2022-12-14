import QuantityButton from './QuantityButton';
import './ItemList.scss';

function ItemList({
  selectedItem,
  deleteItem,
  totalCount,
  setTotalCount,
  imageId,
  setImageId,
}) {
  const deleteCount = id => {
    if (id === 1) {
      setTotalCount({ ...totalCount, total1: 0 });
      setImageId({ ...imageId, imageId1: 0 });
    } else if (id === 2) {
      setTotalCount({ ...totalCount, total2: 0 });
      setImageId({ ...imageId, imageId2: 0 });
    } else if (id === 3) {
      setTotalCount({ ...totalCount, total3: 0 });
      setImageId({ ...imageId, imageId3: 0 });
    } else if (id === 4) {
      setTotalCount({ ...totalCount, total4: 0 });
      setImageId({ ...imageId, imageId4: 0 });
    }
  };

  const total = Object.keys(totalCount).reduce(
    (previousValue, currentValue) => {
      return previousValue + totalCount[currentValue];
    },
    0
  );
  const totalPrice =
    selectedItem.reduce((previousValue, currentValue) => {
      return currentValue.price;
    }, 0) * total;

  return (
    <div className="itemContentBox">
      {selectedItem.map(list => {
        return (
          <div key={list.imageId} className="itemMain">
            <h1 className="itemImage">
              <img src={list.optionImg} alt="" />
            </h1>
            <div className="itemInfoWrap">
              <div>
                <div className="titleWrap">
                  <h3>{list.productName}</h3>
                  <button
                    onClick={() => {
                      deleteItem(list.imageId);
                      deleteCount(list.imageId);
                    }}
                  >
                    ×
                  </button>
                </div>
                <p>{list.description}</p>
              </div>
              <div>
                <div className="itemCount">
                  <span className="price">{list.price}</span>
                  <div className="count">
                    <QuantityButton
                      imageId={imageId}
                      setImageId={setImageId}
                      totalCount={totalCount}
                      setTotalCount={setTotalCount}
                      listId={list.imageId}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="itemTotal">
        <span>
          총 수량 <strong>{total}</strong>개
        </span>
        <span>{totalPrice}원</span>
      </div>
    </div>
  );
}

export default ItemList;
