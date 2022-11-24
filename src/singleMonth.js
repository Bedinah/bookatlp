import React from "react";
import { Typography } from "antd";

const { Link } = Typography;

const SingleMonth = ({ data }) => {
  return (
    <div style={{ display: "grid" }}>
      <Link href={data?.first}>Google font</Link>
      <Link href={data?.second}>Google font</Link>
      <Link href={data?.first1}>Google font</Link>
      <Link href={data?.second1}>Google font</Link>
    </div>
  );
};

export default SingleMonth;
