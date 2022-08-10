import React, { useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
/**
 * Dialog
 */
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import MDDialog from "components/MD-Dialog";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import PropTypes from "prop-types";

import { connect } from "react-redux";
//import projectsTableData from "layouts/tables/data/projectsTableData";

import { releasesListing, deleteRelease } from "store/actions/chain-code";
import MomentHelper from "helpers/MomentHelper";
import { Link } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const columns = [
  { Header: "Name", accessor: "name", align: "left" },
  { Header: "Label", accessor: "label", align: "left" },
  { Header: "Version", accessor: "version", align: "center" },
  { Header: "Sequence", accessor: "sequence", align: "center" },
  { Header: "Created At", accessor: "created_at", align: "center" },
  { Header: "Status", accessor: "status", align: "center" },
  { Header: "action", accessor: "action", align: "center" },
];

const Listing = (props) => {
  const { releasesList, getRelease, onDeleteRelease } = props;
  const [open, setOpen] = React.useState(false);

  const onDialogOpen = () => {
    setOpen(true);
  };

  const onDialogClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const data = {
      per_page: 10,
      page_no: 1,
      search_by: "ffffff",
    };
    getRelease(data);
  }, []);

  const renderList = (data) => {
    return (
      data &&
      data.map((item, index) => {
        return {
          name: (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {item.name ? item.name : "----"}
            </MDTypography>
          ),
          label: (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {item.label ? item.label : "----"}
            </MDTypography>
          ),
          version: (
            <MDBox ml={-1}>
              <MDBadge
                badgeContent={item.version ? item.version : "----"}
                color="success"
                variant="gradient"
                size="sm"
              />
            </MDBox>
          ),
          created_at: (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              <MomentHelper date={item.created_at} />
            </MDTypography>
          ),
          sequence: (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {item.sequence ? item.sequence : "----"}
            </MDTypography>
          ),
          status: (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              1
            </MDTypography>
          ),
          action: (
            <>
              <MDButton
                variant="gradient"
                color="dark"
                onClick={() => onDialogOpen()}
              >
                Logs
              </MDButton>
              <MDButton
                variant="gradient"
                color="dark"
                onClick={() => onDeleteRelease()}
              >
                Delete
              </MDButton>
            </>
          ),
        };
      })
    );
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Grid container>
                  <Grid item xs={6} sm={6} md={6}>
                    <MDTypography variant="h6" color="white">
                      Releases List
                    </MDTypography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} style={{ textAlign: "end" }}>
                    <Link to="/chaincode/release/create">
                      <MDButton variant="gradient" color="dark">
                        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                        &nbsp;Add New Release
                      </MDButton>
                    </Link>
                  </Grid>
                </Grid>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows: renderList(releasesList) }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* /*
       * Dialog box
       * */}
      <BootstrapDialog
        onClose={onDialogClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <MDDialog id="customized-dialog-title" onClose={onDialogClose}>
          Logs Detail
        </MDDialog>
        <DialogContent dividers>
          <MDTypography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </MDTypography>
          <MDTypography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </MDTypography>
          <MDTypography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </MDTypography>
        </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>
      <Footer />
    </DashboardLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    releasesList: state.chainCode.releasesList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRelease: (data) => {
      dispatch(releasesListing(data));
    },

    onDeleteRelease: () => {
      dispatch(deleteRelease());
    },
  };
};

Listing.propTypes = {
  getRelease: PropTypes.func,
  onDeleteRelease: PropTypes.func,
  releasesList: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
