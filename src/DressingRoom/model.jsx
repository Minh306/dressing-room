import React, { Component } from "react";
import "./model.css";
import { connect } from "react-redux";
class Model extends Component {
  render() {
    return (
      <div
        className="contain"
        style={{
          backgroundImage: "url(images/background/background_998.jpg)",
        }}
      >
        <div
          className="body"
          style={{
            backgroundImage: "url(images/allbody/bodynew.png)",
          }}
        />
        <div
          className="model"
          style={{
            backgroundImage: "url(images/model/1000new.png)",
          }}
        />
        <div
          className="bikinitop"
          style={{
            backgroundImage: "url(images/allbody/bikini_branew.png)",
          }}
        />
        <div
          className="bikinibottom"
          style={{
            backgroundImage: "url(images/allbody/bikini_pantsnew.png)",
          }}
        />
        <div
          className="feetleft"
          style={{
            backgroundImage: "url(images/allbody/feet_high_leftnew.png)",
          }}
        />
        <div
          className="feetright"
          style={{
            backgroundImage: "url(images/allbody/feet_high_rightnew.png)",
          }}
        />
        <div
          className="bikinitop"
          style={{
            backgroundImage: `url(${this.props.selectedProduct.topclothes})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="bikinibottom"
          style={{
            backgroundImage: `url(${this.props.selectedProduct.botclothes})`,
            backgroundSize: "cover",
          }}
        />
        <div
          className=""
          style={{
            backgroundImage: `url(${this.props.selectedProduct.shoes})`,
            backgroundSize: "cover",
            width: "500px",
            height: "1000px",
            position: "absolute",
            bottom: "-39.5%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "1",
          }}
        />
        <div
          className=""
          style={{
            backgroundImage: `url(${this.props.selectedProduct.hairstyle})`,
            backgroundSize: "cover",
            width: "1000px",
            height: "1000px",
            // background: 'url("./images/hairstyle/hairstyle2.png")',
            position: "absolute",
            top: "-74%",
            right: "-59%",
            transform: "scale(0.15)",
            zIndex: "4",
          }}
        />
        <div
          className=""
          style={{
            backgroundImage: `url(${this.props.selectedProduct.handbags})`,
            backgroundSize: "cover",
            width: "500px",
            height: "1000px",
            position: "absolute",
            bottom: "-40.5%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "4",
          }}
        />
        <div
          className=""
          style={{
            backgroundImage: `url(${this.props.selectedProduct.necklaces})`,
            backgroundSize: "cover",
            width: "500px",
            height: "1000px",
            position: "absolute",
            bottom: "-38.5%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "4",
          }}
        />
        <div
          className=""
          style={{
            backgroundImage: `url(${this.props.selectedProduct.background})`,
            backgroundSize: "cover",
            width: "900px",
            height: "1500px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            bottom: "-90%",
            right: "-50%",
            transform: "scale(0.5)",
            zIndex: "-1",
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedProduct: state.selectedProduct,
  };
};
export default connect(mapStateToProps)(Model);
