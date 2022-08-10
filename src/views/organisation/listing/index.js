import React, { useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import PropTypes from "prop-types";

// Data
import { connect } from "react-redux";
//import projectsTableData from "layouts/tables/data/projectsTableData";

import { listing, signChainCodeReq } from "store/actions/organisation";

import LocalStorageService from "services/LocalStorageService";
import { ADMIN } from "constants/userRoles";

const Organisation = (props) => {
  const { organisationList, listData, signOrganisation } = props;
  const userRole = LocalStorageService.getUserRole();

  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const tableHeading = [
    { Header: "Name", accessor: "name", align: "left" },
    { Header: "MSP ID", accessor: "mspId", align: "left" },
    { Header: "Created At", accessor: "Created_at", align: "center" },
    { Header: "action", accessor: "action", align: "center" },
  ];

  useEffect(() => {
    organisationList();
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
              {item.org_name || item.name}
            </MDTypography>
          ),
          mspId: (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {item.org_msp || item.msp_id}
            </MDTypography>
          ),
          Created_at: (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {item.created_at}
            </MDTypography>
          ),
          action: (
            <React.Fragment>
              {item.signedby_org === false ? (
                <MDButton
                  variant="gradient"
                  color="dark"
                  onClick={() => signOrganisation(item.org_id)}
                >
                  Sign{" "}
                </MDButton>
              ) : (
                "----"
              )}
            </React.Fragment>
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
                      Organisation Table
                    </MDTypography>
                  </Grid>
                  {userRole === ADMIN && (
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      style={{ textAlign: "end" }}
                    >
                      <Link to="/organisation/add">
                        <MDButton variant="gradient" color="dark">
                          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                          &nbsp;Add New Organisation
                        </MDButton>
                      </Link>
                    </Grid>
                  )}
                </Grid>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: tableHeading, rows: renderList(listData) }}
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
      <Footer />
    </DashboardLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    // loaded: state.category.loaded,
    listData: state.organisation.listingData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    organisationList: (data) => {
      dispatch(listing(data));
    },
    signOrganisation: (id) => {
      dispatch(signChainCodeReq(id));
    },
  };
};

Organisation.propTypes = {
  getChainCode: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Organisation);
