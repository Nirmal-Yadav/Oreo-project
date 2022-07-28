import React from "react";
import {
  VictoryArea,
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryAxis,
} from "victory";
import "../../../CSS/datacurve.css";

const CurveChart = () => {
  const dataCurveChart = [
    {
      curveOne: [
        {
          x: 2,
          y: 0.4,
          label: 1,
        },
        {
          x: 4,
          y: 1,
          label: 4,
        },
        {
          x: 6,
          y: 0.9,
          label: 3,
        },
        {
          x: 8,
          y: 0.4,
          label: 6,
        },
        {
          x: 10,
          y: 1.2,
          label: 3,
        },
        {
          x: 12,
          y: 0.2,
          label: 3,
        },
        {
          x: 14,
          y: 0.9,
          label: 3,
        },
      ],
    },
    {
      curveTwo: [
        {
          x: 2,
          y: 1.2,
          label: 1,
        },
        {
          x: 4,
          y: 0.2,
          label: 4,
        },
        {
          x: 6,
          y: 0.5,
          label: 3,
        },
        {
          x: 8,
          y: 0.6,
          label: 6,
        },
        {
          x: 10,
          y: 0.8,
          label: 3,
        },
        {
          x: 12,
          y: 0.4,
          label: 3,
        },
        {
          x: 14,
          y: 0.1,
          label: 3,
        },
      ],
    },
    {
      curveThree: [
        {
          x: 2,
          y: 0.1,
          label: 1,
        },
        {
          x: 4,
          y: 0.6,
          label: 4,
        },
        {
          x: 6,
          y: 1.1,
          label: 3,
        },
        {
          x: 8,
          y: 0.7,
          label: 6,
        },
        {
          x: 10,
          y: 0.2,
          label: 3,
        },
        {
          x: 12,
          y: 0.35,
          label: 3,
        },
        {
          x: 14,
          y: 0.75,
          label: 3,
        },
      ],
    },
  ];

  const [curveOne, curveTwo, curveThree] = dataCurveChart;
  return (
    <>
      <div
        className="nestcurvearea-ecommerceDashboard"
        style={{ position: "absolute", top: "930px" }}
      >
        <div className="cc-info-container">
          <span className="cc-top">
            Annual <span className="cc-inner"> Report</span>{" "}
          </span>
          <span className="cc-bottom">
            Note:
            <span className="cc-inner1">
              Contrary to popular belief, Lorem Ipsum is not simply random text.{" "}
            </span>
          </span>
        </div>

        <VictoryChart
          containerComponent={
            <VictoryVoronoiContainer
              labelComponent={<VictoryTooltip dy={1} constrainToVisibleArea />}
            />
          }
          width={800}
          height={400}
        >
          <VictoryAxis
            tickValues={[2, 4, 6, 8, 10, 12, 14]}
            tickFormat={[
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
            ]}
          />
          <VictoryAxis
            dependentAxis
            tickValues={[0.5, 1, 1.5, 2, 2.5]}
            tickFormat={["0", "50", "100", "150", "200"]}
          />
          <VictoryArea
            interpolation="natural"
            labelComponent={<VictoryTooltip />}
            data={curveOne.curveOne}
            style={{
              data: { fill: "blue", width: 10, opacity: 0.5 },
            }}
          />
          <VictoryArea
            interpolation="natural"
            labelComponent={<VictoryTooltip />}
            data={curveTwo.curveTwo}
            style={{
              data: { fill: "yellow", width: 20, opacity: 0.7 },
            }}
          />
          <VictoryArea
            interpolation="natural"
            labelComponent={<VictoryTooltip />}
            data={curveThree.curveThree}
            style={{
              data: { fill: "pink", width: 20, opacity: 0.8 },
            }}
          />
        </VictoryChart>
      </div>
    </>
  );
};

export default CurveChart;
