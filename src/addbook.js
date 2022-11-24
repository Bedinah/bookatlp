import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Book = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>Add bookMark</Button>
      <Modal
        title="Bookmark Form"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form.Item label="Title">
          <Input placeholder="add title" />
        </Form.Item>
        <Form.Item label="Link">
          <Input placeholder="paste a link" />
        </Form.Item>
        <Form.Item label="Category">
          <Input placeholder="add category" />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea placeholder="type here..." />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        ></Form.Item>
      </Modal>
    </>
  );
};
export default Book;
