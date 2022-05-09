import React from 'react'
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import useScriptRef from 'hooks/useScriptRef'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
// /import clsx from 'clsx';
import RegexTypes from 'regex'
import PropTypes from "prop-types";

const OrganisationForm = (props) => {
    const { submitData, formInitialValue, buttonLabel } = props;

    const initialValues = formInitialValue;
    const scriptedRef = useScriptRef();

    //  const initialValues = formInitialValue;
    const validation = Yup.object({
        //sku: Yup.string().max(35).min(5).required('SKU number is required'),
        name: Yup.string()
            .trim()
            .matches(RegexTypes.checkSpacialCharacter, 'Name can not contain special character')
            .max(35, 'Name must be no longer than 35 characters')
            .min(5, 'Name must be at least 5 character long')
            .required('Name is required'),
        msp_id: Yup.string()
            .trim()
            .matches(RegexTypes.checkSpacialCharacter, 'MSP ID can not contain special character')
            .max(35, 'MSP ID must be no longer than 35 characters')
            .min(5, 'MSP ID must be at least 5 character long')
            .required('MSP ID is required'),
        peers_count: Yup.number().integer().typeError('Please enter only numeric value').required('Peer count is required'),

    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    if (scriptedRef.current) {
                        setStatus({ success: true });
                        setSubmitting(false);
                        submitData(values);
                    }
                } catch (error) {
                    console.error(error);
                    if (scriptedRef.current) {
                        setStatus({ success: false });
                        setErrors({ submit: error.message });
                        setSubmitting(false);
                    }
                }
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <React.Fragment>
                    <MDBox component="div">
                        <MDBox mb={2}>
                            <MDInput
                                type="text"
                                label="Organisation Name"
                                name="name"
                                value={values.name || ''}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={(touched.name && errors.name)  ? true : false}
                                fullWidth
                            />
                        </MDBox>
                        <MDBox mb={2}>
                            <MDInput
                                fullWidth
                                type="text"
                                label="MSP ID"
                                name="msp_id"
                                value={values.msp_id || ''}
                                onBlur={handleBlur}
                                onChange={handleChange} />
                        </MDBox>
                        <MDBox mb={2}>
                            <MDInput
                                fullWidth
                                type="text"
                                label="Peers Count"
                                name="peers_count"
                                value={values.peers_count || ''}
                                onBlur={handleBlur}
                            />
                        </MDBox>
                        <MDBox mt={4} mb={1}>
                            <MDButton disableElevation variant="gradient" color="info" 
                                type="submit" fullWidth>
                                {/* Add Organisation  */}
                                {buttonLabel}
                            </MDButton>
                        </MDBox>
                    </MDBox>
                    </React.Fragment>
                </Form>
            )}
        </Formik>

    )
}

OrganisationForm.propTypes = {
    // //For boolean value
    //PropTypes.bool, 
    // // While pass children
    //children: PropTypes.node.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    formInitialValue: PropTypes.object,
    submitData: PropTypes.func
}

export default OrganisationForm
