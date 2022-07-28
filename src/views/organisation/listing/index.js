import { useEffect } from "react";
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
import authorsTableData from "./data/authorsTableData";
import { connect } from "react-redux";
//import projectsTableData from "layouts/tables/data/projectsTableData";

import { listing } from "store/actions/chain-code";

const Organisation = (props) => {
  const { getChainCode } = props;

  const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  useEffect(() => {
    const data = {
      per_page: 10,
      page_no: 1,
      search_by: "ffffff",
    };
    getChainCode(data);
  }, []);

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
                      Chaincode Table
                    </MDTypography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} style={{ textAlign: "end" }}>
                  <Link to="/organisation/add">
                      <MDButton variant="gradient" color="dark">
                        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                        &nbsp;Add New Organisation
                      </MDButton>

                      {/* <MDTypography variant="h6" color="white">
                        Add New Organisation
                </MDTypography> */}
                    </Link>
                  </Grid>
                </Grid>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
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
  //console.log(state)
  return {
    // loaded: state.category.loaded,
    isDataLoaded: state.category,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getChainCode: (data) => {
      dispatch(listing(data));
    },
  };
};

Organisation.propTypes = {
  getChainCode: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Organisation);
