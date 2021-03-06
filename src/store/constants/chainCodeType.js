const namespaces = 'chaincode';

const Types = {
    ALL_REQUEST: `${namespaces}/ALL_REQUEST`,
    ALL_DATA: `${namespaces}/ALL_DATA`,
    CHECK_UPDATE_REQUEST: `${namespaces}/CHECK_UPDATE_REQUEST`,
    CHECK_UPDATE: `${namespaces}/CHECK_UPDATE`,
    INSTALL_CHAINCODE_REQUEST: `${namespaces}/INSTALL_CHAINCODE_REQUEST`,
    INSTALL_CHAINCODE: `${namespaces}/INSTALL_CHAINCODE`,
    // Update chaincode list 
    RELEASE_LIST_REQUEST: `${namespaces}/RELEASE_LIST_REQUEST`,
    RELEASE_LIST: `${namespaces}/RELEASE_LIST`,
    DELETE_CHAINCODE_REQUEST: `${namespaces}/DELETE_CHAINCODE_REQUEST`,
    DELETE_CHAINCODE: `${namespaces}/DELETE_CHAINCODE`,
    ADD_NEW_RELEASE_REQUEST: `${namespaces}/ADD_NEW_RELEASE_REQUEST`,

};

export default Types;
