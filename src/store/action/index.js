import { LANGAUGE_CONST , ROUTE_CONST, PROJECT_SELECT_CONST, PROJECT_CONFIRMATION_DATA_CONST} from "../constraint";
export function onReduxLangaugeChange(langauge) {
    return (dispatch) => {
        dispatch({
            type: LANGAUGE_CONST,
            payload: langauge
        })
    }
}
export function onReduxRouteChange(route) {
    return (dispatch) => {
        dispatch({
            type: ROUTE_CONST,
            payload: route
        })
    }
}
export function onReduxSelcteProjectChange(selectedProject) {
    return (dispatch) => {
        dispatch({
            type: PROJECT_SELECT_CONST,
            payload: selectedProject
        })
    }
}

export function onReduxProjectConfirmationDataHandle(data) {
    return (dispatch) => {
        dispatch({
            type: PROJECT_CONFIRMATION_DATA_CONST,
            payload: data
        })
    }
}

