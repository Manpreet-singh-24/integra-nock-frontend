import React, { useEffect, useRef } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import MDModal from "components/MDModal";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import PropTypes from "prop-types";

import { connect } from "react-redux";
//import projectsTableData from "layouts/tables/data/projectsTableData";

import { listing, checkUpdate } from "store/actions/chain-code";
import MomentHelper from "helpers/MomentHelper";

const columns = [
  { Header: "Name", accessor: "name", align: "left" },
  { Header: "Label", accessor: "label", align: "left" },
  { Header: "Version", accessor: "version", align: "center" },
  { Header: "Sequence", accessor: "sequence", align: "center" },
  { Header: "Created At", accessor: "created_at", align: "center" },
  // { Header: "action", accessor: "action", align: "center" },
];

const Listing = (props) => {
  const { listingData, getChainCode, onCheckUpdate } = props;
  const chainCodeModalRef = useRef(null);

  const onModalOpen = () => {
    onCheckUpdate();
    chainCodeModalRef.current.modalOpen();
  };

  useEffect(() => {
    const data = {
      per_page: 10,
      page_no: 1,
      search_by: "ffffff",
    };
    getChainCode(data);
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
              {item.name}
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
              {item.label}
            </MDTypography>
          ),
          version: (
            <MDBox ml={-1}>
              <MDBadge
                badgeContent={item.version}
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
              {item.sequence}
            </MDTypography>
          ),
          // action: (
          //   <MDButton variant="gradient" color="dark" onClick={() => onModalOpen()}>
          //     Check for update
          //   </MDButton>
          // ),
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
                      Chaincode Listing
                    </MDTypography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} style={{ textAlign: "end" }}>
                    <MDButton
                      variant="gradient"
                      color="dark"
                      onClick={() => onModalOpen()}
                    >
                      Check for update
                    </MDButton>
                  </Grid>
                </Grid>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows: renderList(listingData) }}
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
       * modal
       * */}
      <MDModal ref={chainCodeModalRef} />
      <Footer />
    </DashboardLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    listingData: state.chainCode.listingData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getChainCode: (data) => {
      dispatch(listing(data));
    },

    onCheckUpdate: () => {
      dispatch(checkUpdate());
    },
  };
};

Listing.propTypes = {
  getChainCode: PropTypes.func,
  onCheckUpdate: PropTypes.func,
  listingData: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
