import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Skeleton } from "@mui/material";
import categoryApi from "../../../../api/categoryApi";

FilterByCategory.propTypes = {};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const [values, setValues] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await categoryApi.getAll();
        setCategoryList(
          response.map((item) => ({ id: item.id, name: item.name }))
        );
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    })();
  }, []);

  const handleCategoryClick = (id, name) => {
    if (onChange) {
      onChange(id, name);
    }
  };
  return (
    <Box className='mb-4'>
      <h1 className='font-semibold'>Danh mục sản phẩm</h1>
      {isLoading ? (
        Array.from(new Array(5)).map((x, index) => (
          <Box padding={1} key={index}>
            <Skeleton />
          </Box>
        ))
      ) : (
        <ul>
          {categoryList.map((category) => (
            <li
              className='cursor-pointer mt-1 hover:text-purple-500 transition-all duration-200'
              onClick={() => handleCategoryClick(category.id, category.name)}
              key={category.id}>
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
}

export default FilterByCategory;
