import React from "react";
import classNames from "classnames";
import { HorizontalSplit } from "./index";

export class PricingTable extends React.Component {
  render() {
    return (
      <div className="neal-pricing-table">
        <div className="card-deck">{this.props.children}</div>
      </div>
    );
  }
}


export class PricingPlan extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    price: React.PropTypes.node.isRequired,
    period: React.PropTypes.string,
    features: React.PropTypes.objectOf(React.PropTypes.bool),
    buttonText: React.PropTypes.string,
    onClick: React.PropTypes.func,
  };

  static defaultProps = {
    period: "/month",
    buttonText: "Sign up",
  };

  render() {
    return (
      <div className="card">
        <div className="card-header neal-pricing-plan-name">
          {this.props.name}
        </div>
        <div className="card-block">
          <div className="text-xs-center neal-pricing-plan-price">
            <h4 className="card-title neal-pricing-plan-price-amount">{this.props.price}</h4>
            <span className="neal-pricing-plan-price-period">{this.props.period}</span>
          </div>
          <p className="card-text text-xs-center neal-pricing-plan-description">{this.props.description}</p>
        </div>
        <div className="card-block neal-pricing-plan-features">
          <ul className="list-group list-group-flush">
            {Object.keys(this.props.features).map((name, idx) => {
              const isEnabled = this.props.features[name];
              const _className = classNames("neal-pricing-plan-feature", { isEnabled, "isDisabled": !isEnabled });
              const _iconClassName = classNames("fa", { "fa-check-square-o": isEnabled, "fa-minus-square-o": !isEnabled });

              return <li key={idx} className={_className}><i className={_iconClassName} aria-hidden="true"></i> {name}</li>;
            })}
          </ul>
        </div>
        <div className="card-footer text-center">
          <p className="card-text text-xs-center neal-pricing-plan-action">
            <button role="button" className="btn btn-ghost btn-primary btn-lg" onClick={this.props.onClick}>
              {this.props.buttonText}
            </button>
          </p>          
        </div>        
      </div>
    );
  }

}
