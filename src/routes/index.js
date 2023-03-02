import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
const AppLayout = lazy(() => import('./../views/Layouts/AppLayout'));
const DashboardLayout = lazy(() => import('../views/Internal/DashboardLayouts/DashboardLayout'));
const Home = lazy(() => import('./../views/Home'));
const Contact = lazy(() => import('./../views/Contact'));
const Blog = lazy(() => import('./../views/Blog'));
const BlogDetails = lazy(() => import('./../views/Blog/blog-details'));
const Pricing = lazy(() => import('./../views/Pricing'));
const Features = lazy(() => import('./../views/Features'));
const Dashboard = lazy(() => import('./../views/Internal/Dashboard'));
const FollowUps = lazy(() => import('./../views/Internal/FollowUps'));
const Enquiries = lazy(() => import('./../views/Internal/Enquiries'));
const Members = lazy(() => import('./../views/Internal/Members'));
const Memberships = lazy(() => import('./../views/Internal/Memberships'));
const MembershipsPackages = lazy(() => import('./../views/Internal/MembershipsPackages'));
const MembersWorkoutCard = lazy(() => import('./../views/Internal/MembersWorkoutCard'));
const FeedbackManagement = lazy(() => import('./../views/Internal/FeedbackManagement'));
const BalanceDueReport = lazy(() => import('./../views/Internal/BalanceDueReport'));
const SalesReport = lazy(() => import('./../views/Internal/SalesReport'));
const ExpiredMemberReport = lazy(() => import('./../views/Internal/ExpiredMemberReport'));
const MemberReportCard = lazy(() => import('./../views/Internal/MemberReportCard'));
const DueMembershipReport = lazy(() => import('./../views/Internal/DueMembershipReport'));
const SMSReport = lazy(() => import('./../views/Internal/SMSReport'));
const AttendenceReport = lazy(() => import('./../views/Internal/AttendenceReport'));
const PtReport = lazy(() => import('./../views/Internal/PtReport'));
const DietPlanManagement = lazy(() => import('./../views/Internal/DietPlanManagement'));
const Employees = lazy(() => import('./../views/Internal/Employees'));
const EmployeeAttendence = lazy(() => import('./../views/Internal/EmployeeAttendence'));
const Payroll = lazy(() => import('./../views/Internal/Payroll'));
const Payments = lazy(() => import('./../views/Internal/Payments'));
const ExpenseManagement = lazy(() => import('./../views/Internal/ExpenseManagement'));
const Login = lazy(() => import('./../views/Internal/Login/login'));


const MemberProfileLayout = lazy(() => import('../views/Internal/DashboardLayouts/MemberProfileLayout.js'));
const MemberEditProfile = lazy(() => import('../views/Internal/MembersProfile'));


function MainRoutes() {


    return (
        <>
            <Routes>
                <Route exact path="/" element={<AppLayout />} >
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/blog-details" element={<BlogDetails />} />
                    <Route exact path="/pricing" element={<Pricing />} />
                    <Route exact path="/features" element={<Features />} />


                </Route>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<DashboardLayout />} >

                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/followups" element={<FollowUps />} />
                    <Route exact path="/enquiries" element={<Enquiries />} />
                    <Route exact path="/members" element={<Members />} />
                    <Route exact path="/memberships" element={<Memberships />} />
                    <Route exact path="/memberships-packages" element={<MembershipsPackages />} />
                    <Route exact path="/members-workout-card" element={<MembersWorkoutCard />} />
                    <Route exact path="/feedback-Management" element={<FeedbackManagement />} />
                    <Route exact path="/balance-due-report" element={<BalanceDueReport />} />
                    <Route exact path="/sales-report" element={<SalesReport />} />
                    <Route exact path="/expire-member-report" element={<ExpiredMemberReport />} />
                    <Route exact path="/member-report-card" element={<MemberReportCard />} />
                    <Route exact path="/due-membership-report" element={<DueMembershipReport />} />
                    <Route exact path="/sms-report" element={<SMSReport />} />
                    <Route exact path="/attendance-report" element={<AttendenceReport />} />
                    <Route exact path="/pt-report" element={<PtReport />} />
                    <Route exact path="/diet-plan-management" element={<DietPlanManagement />} />
                    <Route exact path="/employees" element={<Employees />} />
                    <Route exact path="/employee-attendence" element={<EmployeeAttendence />} />
                    <Route exact path="/payroll" element={<Payroll />} />
                    <Route exact path="/payments" element={<Payments />} />
                    <Route exact path="/expense-management" element={<ExpenseManagement />} />





                </Route>

                <Route exact path='/' element={<MemberProfileLayout />}>
                <Route exact path="/memberEditProfile" element={<MemberEditProfile />} />
                </Route>
            </Routes>
        </>
    );
}

export default MainRoutes;
