import React, { useState } from "react";
import { Drawer, Button, Typography, Card } from "antd";
import SingleMonth from "./singleMonth";

import allMonths from "./assets/data/month.json";

const Category = () => {
  const [open, setOpen] = useState(false);
  const [selectedMonth] = useState();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const { Text } = Typography;

  return (
    <>
      <Card style={{ width: "80%", height: "80%", marginLeft: "5rem" }}>
        <div style={{ gap: "2rem" }}>
          {allMonths.map((months) => (
            <Button
              onClick={showDrawer}
              style={{
                width: 150,
                height: 50,
              }}
            >
              <Text type="secondary">{months.title}</Text>
            </Button>
          ))}
        </div>
        <Drawer
          title="CATEGORY BY MONTH"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <SingleMonth data={selectedMonth} />
        </Drawer>
      </Card>
    </>
  );
};
export default Category;
