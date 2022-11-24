import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({ filter, setFilter, setModalClick }) {
  return (
    <div>
      <MyInput
        value={filter.search}
        placeholder="Search..."
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <MySelect
          defaultOption="sorting by"
          options={[
            { value: "title", name: "by name" },
            { value: "body", name: "by description" },
          ]}
          value={filter.select}
          onSort={(sortPost) => setFilter({ ...filter, select: sortPost })}
        />
        <MyButton
          onClick={() => setModalClick(true)}
          style={{ color: "#fff", backgroundColor: "rgba(211, 48, 48, 0.911)" }}
        >
          Create post
        </MyButton>
      </div>
    </div>
  );
}
