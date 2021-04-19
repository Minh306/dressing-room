import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "./actions/index";
class ProductItem extends Component {
  selectProduct = () => {
    // const action = {
    //   type: "SELECT_PRODUCT",
    //   payload: {
    //     type: this.props.product.type,
    //     img: this.props.product.imgSrc_png,
    //   },
    // };
    this.props.dispatch(
      createAction("SELECT_PRODUCT", {
        type: this.props.product.type,
        img: this.props.product.imgSrc_png,
      })
    );
  };
  render() {
    const { imgSrc_jpg, name } = this.props.product;
    return (
      <div className="card mb-4">
        <img src={imgSrc_jpg} alt="product" />
        <div className="card-body">
          <p>{name}</p>
          <button onClick={this.selectProduct} className="btn btn-success">
            Thử đồ
          </button>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     //lấy dữ liệu categories trên store
//     // chuyển đổi thành props tên categories để sd
//     cates: state.categories,
//     selectedCate: state.selectedCate,
//   };
// };
export default connect()(ProductItem);
