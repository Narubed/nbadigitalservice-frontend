import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
import MKTypography from '../../../../components/MKTypography';

function Footer() {
  return (
    <MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: 'center', lg: 'left' }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <MKTypography variant="h6" textTransform="uppercase" mb={{ xs: 2, lg: 3 }}>
              NBA Digital Service
            </MKTypography>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: 'center', lg: 'flex-start' }}
              pl={0}
              mb={3}
              sx={{ listStyle: 'none' }}
            >
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/"
                  // target="_blank"
                  rel="noreferrer"
                >
                  หน้าหลัก
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/pages/landing-pages/service"
                  // target="_blank"
                  rel="noreferrer"
                >
                  บริการ
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/pages/landing-pages/investment"
                  // target="_blank"
                  rel="noreferrer"
                >
                  รูปแบบการลงทุน
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/pages/landing-pages/blog"
                  // target="_blank"
                  rel="noreferrer"
                >
                  คำถามที่พบบ่อย
                </MKTypography>
              </MKBox>
            </Stack>
            <MKTypography variant="button" opacity={0.8}>
              Create © <script>document.write(new Date().getFullYear())</script>2022 by aof.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} ml="auto" textAlign={{ xs: 'center', lg: 'right' }}>
            <MKTypography variant="body2" fontWeight="bold" mb={6} sx={{ fontSize: '1rem' }}>
              Customer Service Center “A new dimension of business activities One Stop Service” by
              bringing integrated business services into one place. “All in one place…finish here”
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Footer;
