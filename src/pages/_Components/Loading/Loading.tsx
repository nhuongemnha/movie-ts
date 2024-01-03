import React, { Fragment } from "react";
import { useSelectorLoading } from "redux/store/Loading/Loading.selector";

type Props = {};

function Loading(props: Props) {
  let { isLoading } = useSelectorLoading();
  return (
    <Fragment>
      {isLoading ? (
        <div className="loading">
          <span className="text-4xl text-yellow-500">Loading...</span>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Loading;
