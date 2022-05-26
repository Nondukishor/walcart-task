import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useMutation } from '@apollo/client';
import { CREATE_CATEGORY } from '../apollo/mutations/CATEGORIES';
import { LayoutContext } from '../layout/LayoutContext';
import { NextPage } from 'next';
const CreateCategories: NextPage = () => {
  const ctx = React.useContext(LayoutContext);
  const [CreateCategory] = useMutation(CREATE_CATEGORY);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    CreateCategory({
      variables: {
        category: {
          name: data.get('name'),
          parentCategoryUid: data.get('parentCategoryUid'),
        },
      },
    })
      .then((res) => {
        if (res.data.createCategory.statusCode === 400)
          ctx.setSnackbar({
            severity: 'error',
            message: res.data.createCategory.message,
            open: true,
          });
        else
          ctx.setSnackbar({
            severity: 'success',
            message: 'Created Successfully',
            open: true,
          });
      })
      .catch((err) => {
        ctx.setSnackbar({
          severity: 'error',
          message: 'Error',
          open: true,
        });
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Create Category
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                defaultValue={'C-YPSLUG'}
                id="category-id"
                label="Parent Category ID"
                name="parentCategoryUid"
                autoComplete="parent-category-id"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateCategories;
