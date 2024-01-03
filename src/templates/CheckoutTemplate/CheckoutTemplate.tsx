import { USER_LOGIN } from "@types";
import React, { FC, ReactNode } from "react";
import { Redirect, Route, useHistory, useParams } from "react-router-dom";

type Props = {
  component: React.ElementType;
  mobileComponent?: (props: React.ElementType) => React.FC<Props>;
  path: string;
};
export default function CheckoutTemplate(props: Props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        if (!localStorage.getItem(USER_LOGIN)) {
          return <Redirect to="/Login" />;
        }
        return (
          <div>
            <props.component {...propsRoute} />
          </div>
        );
      }}
    />
  );
}
