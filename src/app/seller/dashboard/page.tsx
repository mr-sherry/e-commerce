import HeaderCards from "@/Components/seller/dashboard/HeaderCards/HeaderCards";
import RecentOrders from "@/Components/seller/dashboard/RecentOrders/RecentOrders";
import RevenueChart from "@/Components/seller/dashboard/RevenueChart/RevenueChart";
import TrafficSources from "@/Components/seller/dashboard/TrafficSources/TrafficSources";
import React from "react";

function page() {
  return (
    <div
      style={{
        paddingTop: "100px",
        paddingLeft: "150px",
        paddingRight: "10px",
        background: "#f9fafb",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderCards />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <RevenueChart />
        <TrafficSources />
      </div>
      <RecentOrders />
    </div>
  );
}

export default page;
