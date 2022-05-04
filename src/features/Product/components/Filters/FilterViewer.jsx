import React from "react";
import PropTypes from "prop-types";
import { Box, Chip } from "@mui/material";

FilterViewer.propTypes = {};
FilterViewer.defaultProps = {
  filters: {},
  onChange: null,
};

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "Giao hàng miễn phí",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Có khuyến mãi",
    isActive: (filters) => filters.isPromotion,
    isVisible: (filters) => Object.keys(filters).includes("isPromotion"),
    isRemovable: false,
    onRemove: (filters) => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isPromotion) {
        delete newFilters.isPromotion;
      } else {
        newFilters.isPromotion = true;
      }
      return newFilters;
    },
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes("salePrice_gte") &&
      Object.keys(filters).includes("salePrice_lte"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: (filters) => {},
  },
  {
    id: 4,
    getLabel: (filters) => `${filters["category.name"]}`,
    isActive: () => true,
    isVisible: (filters) => Object.keys(filters).includes("category.id"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters["category.name"];
      delete newFilters["category.id"];
      return newFilters;
    },
    onToggle: (filters) => {},
  },
];

function FilterViewer({ filters, onChange }) {
  console.log(filters);
  return (
    <Box>
      <ul className='flex mt-5'>
        {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
          <li key={x.id} className='p-2'>
            <Chip
              label={x.getLabel(filters)}
              color={x.isActive(filters) ? "primary" : "default"}
              clickable={!x.isRemovable}
              onClick={
                x.isRemovable
                  ? null
                  : () => {
                      if (!onChange) return;
                      const newFilters = x.onToggle(filters);
                      onChange(newFilters);
                    }
              }
              onDelete={
                !x.isRemovable
                  ? null
                  : () => {
                      if (!onChange) return;
                      const newFilters = x.onRemove(filters);
                      onChange(newFilters);
                    }
              }
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterViewer;
