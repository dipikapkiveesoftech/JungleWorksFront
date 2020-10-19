import {    combineReducers} from 'redux';
// Route
import LangaugeStore from './langauge';
import RouteStore from "./route";
import ProjectStore from "./project";

export default combineReducers({
    langaugeStore: LangaugeStore,
    routeStore: RouteStore,
    projectStore: ProjectStore
})