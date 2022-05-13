/* eslint-disable camelcase */
/* eslint-disable react/jsx-key */
import * as React from 'react';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';

import BlogNews from '../conpanents/BlogNews';

function paginator(items, current_page, per_page_items) {
  const page = current_page || 1;
  const per_page = per_page_items || 2;
  const offset = (page - 1) * per_page;
  const paginatedItems = items.slice(offset).slice(0, per_page_items);
  const total_pages = Math.ceil(items.length / per_page);
  console.log(total_pages, items.length, per_page);

  return {
    page,
    per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages,
    data: paginatedItems
  };
}

export default function AlignItemsList({ carrierDetails }) {
  const count = Math.ceil(carrierDetails.length / 3);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(paginator(carrierDetails, value, 1).page);
  };

  return (
    <Container>
      {paginator(carrierDetails, page, 3).data.map((value, index) => (
        <>
          <BlogNews news={value} />
        </>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={paginator(carrierDetails, page, count).total_pages}
          page={paginator(carrierDetails, page, count).page}
          onChange={handleChange}
          color="success"
        />
      </div>
    </Container>
  );
}
