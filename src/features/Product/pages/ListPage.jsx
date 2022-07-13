import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import productApi from "../../../api/productApi";
import FilterViewer from "../components/Filters/FilterViewer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductListSkeleton from "../components/ProductListSkeleton";
import ProductSort from "../components/ProductSort";

ListPage.propTypes = {};

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || "salePrice:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });

  // const [filters, setFilters] = useState({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  //   _sort: queryParams._sort || "salePrice:ASC",
  // });

  // useEffect(() => {
  // navigate({
  //   search: createSearchParams(queryString.stringify(filters)).toString(),
  // });
  // }, [navigate, filters]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await productApi.getAll(queryParams);
        setProductList(response.data);
        setPagination(response.pagination);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (event, page) => {
    const filters = {
      ...queryParams,
      _page: page,
    };
    navigate({
      search: createSearchParams(queryString.stringify(filters)).toString(),
    });
  };

  const handleSortChange = (newSortValue) => {
    const filters = {
      ...queryParams,
      _page: 1,
      _sort: newSortValue,
    };
    navigate({
      search: createSearchParams(queryString.stringify(filters)).toString(),
    });
  };

  const handleFiltersChange = (newFilters) => {
    const filters = {
      ...queryParams,
      _page: 1,
      ...newFilters,
    };
    navigate({
      search: createSearchParams(queryString.stringify(filters)).toString(),
    });
  };

  const handleNewFilters = (newFilters) => {
    navigate({
      search: createSearchParams(queryString.stringify(newFilters)).toString(),
    });
  };

  return (
    <Box className='mt-16 pt-5 min-h-screen'>
      <Container>
        <Grid container spacing={1} className=''>
          <Grid item className='w-[250px]'>
            <Paper elevation={0} className='p-4'>
              <ProductFilters filters={queryParams} onChange={handleFiltersChange} />
            </Paper>
          </Grid>
          <Grid item className='flex-1'>
            <Paper elevation={0} className='p-5'>
              <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
              <FilterViewer filters={queryParams} onChange={handleNewFilters} />
              {loading ? <ProductListSkeleton length={9} /> : <ProductList data={productList} />}
              <Box className='flex justify-center mt-5 pb-10'>
                <Pagination color='primary' count={Math.ceil(pagination.total / pagination.limit)} page={pagination.page} onChange={handlePageChange}></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
