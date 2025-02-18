import { Route, Routes } from "react-router-dom";
import DashboardPage from "../Dashboard/Pages/DashboardPage";
import Complaint from "../Dashboard/Pages/Complaint/Complaint";
import SurveyMainPage from "../Dashboard/Pages/SurveyManagement/SurveyMainPage";
import SurveyAdd from "../Dashboard/Pages/SurveyManagement/SurveyAdd";
import SurveyResponse from "../Dashboard/Pages/SurveyManagement/SurveyResponse/SurveyResponse";
import SurveyIndividual from "../Dashboard/Pages/SurveyManagement/SurveyResponse/SurveyIndividual";
import UserTable from "../Dashboard/Pages/UserManagement/UserTable";
import TeamData from "../Dashboard/Pages/TeamManagement/TeamData";
import TeamTable from "../Dashboard/Pages/TeamManagement/TeamTable";
import DeleteUser from "../Dashboard/Pages/UserManagement/DeleteUser";
import EditUser from "../Dashboard/Pages/UserManagement/EditUser";

export const AllPagesRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/add-product" element={<h1>Add Product</h1>} />
            <Route path="/view-products" element={<h1>View Products</h1>} />
            <Route path="/new-orders" element={<h1>New Orders</h1>} />
            <Route path="/order-history" element={<h1>Order History</h1>} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/sales" element={<h1>Sales</h1>} />
            <Route path="/survey-management" element={<SurveyMainPage />} />
            <Route path="/add-survey" element={<SurveyAdd />} />
            <Route path="/survey-management/response" element={<SurveyResponse />} />
            <Route path="/survey-management/individual" element={<SurveyIndividual />} />
            <Route path="/user" element={<UserTable />} />
            <Route path="/team-management" element={<TeamData />} />
            <Route path="/team-management/team" element={<TeamTable />} />
            <Route path="/editUser" element={<EditUser />} />
            <Route path="/deleteUser" element={<DeleteUser />} />
            <Route path="/settings" element={<h1>Settings</h1>} />
        </Routes>
    );
}