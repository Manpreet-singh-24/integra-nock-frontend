import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import MDModal from "components/MDModal"

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const chainCodeModalRef = useRef(null);

  const onModalOpen = () => { 
    chainCodeModalRef.current.modalOpen();
  }

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
      <MDModal ref={chainCodeModalRef} />
      
    </MDBox>
  );

  return {
    columns: [
      { Header: "Name", accessor: "name", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "Version", accessor: "version", align: "center" },
      { Header: "employed", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        version: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          // <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <MDButton variant="gradient" color="dark" onClick={() => onModalOpen()}>
            Check for update
          </MDButton>

          // </MDTypography>
        ),
      },
      {
        name: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        version: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        name: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Job title="Executive" description="Projects" />,
        version: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        name: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        version: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        name: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager" description="Executive" />,
        version: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        name: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        version: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };

  Job.propTypes = {
    title: PropTypes.any,
    description: PropTypes.any,
  };
  
  Author.propTypes = {
    image: PropTypes.any,
    name: PropTypes.any,
    email: PropTypes.any,
  };
}
