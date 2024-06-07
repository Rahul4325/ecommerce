import { Button, Typography, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Company
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Solutions
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Supports
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Documentations
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Legal
            </Typography>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            © 2024 E-Commerce. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with ❤ by Rahul.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            <a
              href="https://github.com/rahul4325"
              target="_blank"
              rel="noreferrer"
            >
              Also on Github
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
