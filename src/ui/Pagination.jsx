import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constants";
import { Pagination as Pagination2 } from "@mui/material";
import { useState } from "react";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const pageCount = Math.ceil(count / PAGE_SIZE);
  const [page, setPage] = useState(currentPage);
  const handleClick = (event, value) => {
    setPage(value);
    searchParams.set("page", value);
    setSearchParams(searchParams);
  };
  if (pageCount <= 1) return;
  return (
    <StyledPagination>
      <Pagination2
        count={pageCount}
        color="primary"
        size="large"
        page={page}
        onChange={handleClick}
        sx={{
          "& .MuiPaginationItem-root": {
            fontWeight: "bold",
            fontSize: "12px",
          },
        }}
      />
    </StyledPagination>
  );
}

export default Pagination;
