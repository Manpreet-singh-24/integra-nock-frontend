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
import MDBadge from "components/MDBadge";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import PropTypes from "prop-types";

// Data
import { connect } from "react-redux";
//import projectsTableData from "layouts/tables/data/projectsTableData";

import { listing } from "store/actions/organisation";

const Organisation = (props) => {
  const { getChainCode, listData } = props;
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const tableHeading = [
    { Header: "Name", accessor: "name", align: "left" },
    { Header: "MSP ID", accessor: "mspId", align: "left" },
    { Header: "Version", accessor: "version", align: "center" },
    { Header: "Peer Count", accessor: "peerCount", align: "center" },
    { Header: "Created At", accessor: "Created_at", align: "center" },
  ]

  useEffect(() => {
    const data = {
      per_page: 10,
      page_no: 1,
      search_by: "ffffff",
    };
    getChainCode(data);
  }, []);


  const renderList = (data) => {
    return data && data.map((item, index) => {
      return {
        name: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {item.name}
          </MDTypography>
        ),
        mspId: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {item.msp_id}
          </MDTypography>
        ),
        version: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="v2" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        Created_at: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        peerCount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {item.peers_count}
          </MDTypography>
        ),
      }

    })
  }

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
                  table={{ columns: tableHeading, rows: renderList(listData) }}
                  isSorted={true}
                  entriesPerPage={true}
                  showTotalEntries={true}
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
    listData: state.organisation.data,
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
