import React from "react";
import { useSelector } from "react-redux";
import "../../../CSS/Productreport.css";
import {
  VictoryArea,
  VictoryClipContainer,
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from "victory";
import "../../../CSS/graphreport.css";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SyncIcon from "@mui/icons-material/Sync";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurveChart from "../core/curvechart";

const ProductReport = () => {
  const data2012 = [
    { quarter: 1, earnings: 0 },
    { quarter: 2, earnings: 130 },
    { quarter: 3, earnings: 0 },
    { quarter: 4, earnings: 150 },
    { quarter: 5, earnings: 130 },
    { quarter: 6, earnings: 170 },
    { quarter: 7, earnings: 110 },
    { quarter: 8, earnings: 0 },
  ];

  const data2013 = [
    { quarter: 1, earnings: 70 },
    { quarter: 2, earnings: 130 },
    { quarter: 3, earnings: 0 },
    { quarter: 4, earnings: 250 },
    { quarter: 5, earnings: 130 },
    { quarter: 6, earnings: 200 },
    { quarter: 7, earnings: 110 },
    { quarter: 8, earnings: 110 },
  ];

  const data2014 = [
    { quarter: 1, earnings: 0 },
    { quarter: 2, earnings: 200 },
    { quarter: 3, earnings: 60 },
    { quarter: 4, earnings: 150 },
    { quarter: 5, earnings: 180 },
    { quarter: 6, earnings: 100 },
    { quarter: 7, earnings: 110 },
    { quarter: 8, earnings: 110 },
  ];

  const data2015 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 },
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  const data2016 = [
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  const data2017 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
    { quarter: 1, earnings: 11500 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 20000 },
    { quarter: 4, earnings: 15500 },
  ];

  const myState = useSelector((data) => data.switchNav);
  return (
    <div className="pr-container" style={{ width: myState.headerWidth }}>
      <div className="pr-graph-container">
        <div style={{ marginBottom: "50px" }}>
          <div className="ms-g1">
            <span className="ms-detail-bold">Product</span>
            <span className="ms-detail2-bold">Report</span>
          </div>
          <div className="pr-report-container">
            <div className="pr-report-info">
              <SyncIcon
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: "grey",
                  borderRadius: "5px",
                }}
              />
              <div className="pr-icon-container">
                <span>Sales Report</span>
                <span style={{ fontSize: "xx-large", fontWeight: "500" }}>
                  {" "}
                  $4516
                </span>
              </div>
            </div>
            <div className="pr-report-info">
              <EqualizerIcon
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: "grey",
                  borderRadius: "5px",
                }}
              />
              <div className="pr-icon-container">
                <span>Annual Revenue</span>
                <span style={{ fontSize: "xx-large", fontWeight: "500" }}>
                  $6481
                </span>
              </div>
            </div>
            <div className="pr-report-info">
              <AccountBalanceWalletIcon
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: "grey",
                  borderRadius: "5px",
                }}
              />
              <div className="pr-icon-container">
                <span>Total Profit</span>
                <span style={{ fontSize: "xx-large", fontWeight: "500" }}>
                  $3915
                </span>
              </div>
            </div>
          </div>
          <VictoryChart
            domainPadding={50}
            theme={VictoryTheme.material}
            height={800}
            width={2900}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
              tickFormat={[
                "0.0",
                "1.0",
                "2.0",
                "3.0",
                "4.0",
                "5.0",
                "6.0",
                "7.0",
                "8.0",
                "9.0",
                "10.0",
              ]}
              style={{ tickLabels: { fontSize: 30 } }}
            />
            <VictoryAxis
              dependentAxis
              tickValues={[10, 20, 30, 40, 50, 60]}
              tickFormat={["10", "20", "30", "40", "50", "60"]}
              style={{ tickLabels: { fontSize: 30 } }}
            />
            <VictoryStack>
              <VictoryBar
                data={data2015}
                style={{
                  data: { fill: "lightblue" },
                }}
                barWidth={86}
                x="p"
                y="earnings"
              />
              <VictoryBar
                data={data2016}
                style={{
                  data: { fill: "orange" },
                }}
                barWidth={86}
                x="p"
                y="earnings"
              />
              <VictoryBar
                data={data2017}
                style={{
                  data: { fill: "#424787" },
                }}
                barWidth={86}
                x="p"
                y="earnings"
              />
            </VictoryStack>
          </VictoryChart>
        </div>

        <div
          style={{
            height: "200px",
            width: "800px",
            paddingTop: "70px",
            position: "relative",
            paddingBottom: "0",
          }}
        >
          <div className="graph-container-pr">
            <div className="ms-g1">
              <span className="ms-detail-bold">Orders</span>
              <span className="ms-detail2-bold">Received</span>
            </div>
            <div className="ms-graph-value">
              <span className="ms-total"> 47,012</span>
              <span className="ms-per">
                23% Average <ElectricBoltIcon />
              </span>
            </div>
          </div>
          <VictoryArea
            height={150}
            width={900}
            groupComponent={
              <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
            }
            style={{
              data: {
                stroke: "#8c99e0",
                fill: "lightgrey",
                strokeWidth: 1,
                strokeLinecap: "round",
              },
            }}
            data={data2012}
            x="quater"
            y="earnings"
          />
        </div>
        <div
          style={{
            height: "200px",
            width: "800px",
            paddingTop: "70px",
            position: "relative",
            bottom: "274px",
            left: "380px",
            paddingBottom: "0",
            background: "white",
          }}
        >
          <div className="graph-container-pr">
            <div className="ms-g1">
              <span className="ms-detail-bold">Total</span>
              <span className="ms-detail2-bold">Sales</span>
            </div>
            <div className="ms-graph-value">
              <span className="ms-total"> 512</span>
              <span className="ms-per">
                18% Average <ElectricBoltIcon />
              </span>
            </div>
          </div>
          <VictoryArea
            height={150}
            width={900}
            groupComponent={
              <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
            }
            style={{
              data: {
                stroke: "#8c99e0",
                fill: "lightgrey",
                strokeWidth: 1,
                strokeLinecap: "round",
              },
            }}
            data={data2013}
            x="quater"
            y="earnings"
          />
        </div>
        <div
          style={{
            height: "200px",
            width: "800px",
            paddingTop: "70px",
            position: "relative",
            bottom: "547px",
            left: "750px",
            paddingBottom: "0",
            background: "white",
          }}
        >
          <div className="graph-container-pr">
            <div className="ms-g1">
              <span className="ms-detail-bold">Revenue</span>
            </div>
            <div className="ms-graph-value">
              <span className="ms-total"> 1,612</span>
              <span className="ms-per">
                13% Average <ElectricBoltIcon />
              </span>
            </div>
          </div>
          <VictoryArea
            height={150}
            width={900}
            groupComponent={
              <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
            }
            style={{
              data: {
                stroke: "#8c99e0",
                fill: "lightgrey",
                strokeWidth: 1,
                strokeLinecap: "round",
              },
            }}
            data={data2014}
            x="quater"
            y="earnings"
          />
        </div>
        <CurveChart />
      </div>
    </div>
  );
};

export default ProductReport;
