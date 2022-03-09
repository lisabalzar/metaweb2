import * as d3 from 'd3';
import { useEffect, useState, useRef } from 'react';

function Chart() {
    //const [data, setData] = useState([]);
    const [data] = useState([10, 20, 60, 40, 40, 60, 80, 100]);
    const svgRef = useRef();

    useEffect(() => {
        const w = 300;
        const h = 300;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('overflow', 'visible')
            .style('padding-top', '40px')
            .style('margin-left', '60px')

            const xScale = d3.scaleBand()
                .domain(data.map((val, i) => i))
                .range([0,w])
                .padding(0.1);
                
            const yScale = d3.scaleLinear()
                .domain([0,h])
                .range([h, 0]);

        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length);
            
        const yAxis = d3.axisLeft(yScale)
            .ticks(7);
            
        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${h})`)
        svg.append('g')
            .call(yAxis);

        svg.selectAll('.bar')
            .data(data)
            .join('rect')
                .attr('x', (v, i) => xScale(i))
                .attr('y', yScale)
                .attr('width', xScale.bandwidth())
                .attr('height', val => h - yScale(val))
                .style('fill', '#B2085C');
        
    }, [data]);

    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    );
}

export default Chart;