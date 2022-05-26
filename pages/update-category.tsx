import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useMutation } from '@apollo/client';
import { UPDATE_CATEGORY } from '../apollo/mutations/CATEGORIES';
import { LayoutContext } from '../layout/LayoutContext';
const UpdateCategories = () => {
  const ctx = React.useContext(LayoutContext);
  const [UpdateCategory] = useMutation(UPDATE_CATEGORY);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    UpdateCategory({
      variables: {
        category: {
          name: data.get('name'),
        },
        categoryUid: data.get('categoryUid'),
      },
    })
      .then((res) => {
        if (res.data.updateCategory.statusCode === 400)
          ctx.setSnackbar({
            severity: 'error',
            message: res.data.updateCategory.message,
            open: true,
          });
        else
          ctx.setSnackbar({
            severity: 'success',
            message: 'Update Successfully',
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
          Update Category
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
                defaultValue={'C-JA72EM'}
                id="category-id"
                label="Parent Category ID"
                name="categoryUid"
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

export default UpdateCategories;
