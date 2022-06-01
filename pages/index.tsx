import { useQuery } from '@apollo/client';
import { Menu, MenuItem, Skeleton } from '@mui/material';
import { NestedDropdown } from 'mui-nested-menu';
import type { NextPage } from 'next';
import { useState } from 'react';
import { GET_CATEGORIES } from '../apollo/queries/CATEGORY';

const Home: NextPage = () => {
  const [open, setOpen] = useState(true);
  const formatResponse = (categories: any) => {
    return categories.map((item: any) => {
      if (item.parents?.length >= 0) {
        return {
          children: formatResponse(item.parents),
        };
      } else
        return {
          title: item.name,
          id: item.uid,
          link: '#',
        };
    });
  };

  const { loading } = useQuery(GET_CATEGORIES, {
    variables: {
      filter: {
        name: 'root',
        uid: null,
      },
      pagination: {
        limit: null,
        skip: null,
      },
    },
    fetchPolicy: 'network-only',
    onCompleted: (res) => {
      if (Array.isArray(res.getCategories.result.categories)) {
        console.log(
          formatResponse(res.getCategories.result.categories),
          res.getCategories.result.categories
        );
      }
    },
  });

  if (loading) return <Skeleton />;
  return <div>Hello</div>;
};

export default Home;
