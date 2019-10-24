import React from "react";
import { Responsive } from "semantic-ui-react";

class Responsive_Custom extends Responsive {
  render() {
    const { children, getWidth, ...props } = this.props;
    return (
      <Responsive {...props} fireOnMount getWidth={getWidth}>
        {children}
      </Responsive>
    );
  }
}

export default Responsive_Custom;
